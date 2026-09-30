import { useMemo, useState } from 'react'
import Modal from './ui/Modal'
import SafeImage from './ui/SafeImage'
import { ExternalIcon } from './ui/Icons'
import { images } from '../data/images'
import { useLang } from '../i18n/context'
import { thumbOf } from '../data/covers'
import { toEmbed } from '../lib/embed'

const PORTFOLIO_PDF = '/docs/Portfolio-Muhamad-Akbar-Imron.pdf'
// portrait pictures (posters, character sheets) get a tall frame instead of 16:9
const TALL = 'h-[70vh] max-h-[720px] min-h-[420px]'
const frameOf = (item, tb) => {
  const f = tb?.frame ?? (item.tall ? 'tall' : '')
  return f === 'tall' ? TALL : f === 'wide' ? 'aspect-[4/1]' : 'aspect-video'
}
const count = (c) => `${c.items.length}${c.more ? '+' : ''}`

// The stage for one work: its embed if it has a link, its picture if it is a design
// asset, otherwise its thumbnail with an honest note. Only the selected work is rendered, so a video starts
// only when the visitor picks it.
function Stage({ item, thumb }) {
  const { t } = useLang()
  const embed = toEmbed(item.url)

  if (embed?.kind === 'tall') {
    return (
      <div className="grid place-items-center rounded-xl bg-ice py-3">
        <iframe
          src={embed.src}
          title={item.title}
          loading="lazy"
          allow="encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
          className="h-[68vh] max-h-[720px] min-h-[480px] w-full max-w-[420px] rounded-lg border-0 bg-white"
        />
      </div>
    )
  }
  if (embed) {
    return (
      <iframe
        src={embed.src}
        title={item.title}
        loading="lazy"
        allow="accelerometer; encrypted-media; picture-in-picture; fullscreen"
        allowFullScreen
        className="aspect-video w-full rounded-xl border-0 bg-ink-deep"
      />
    )
  }
  if (item.image && !item.url) {
    // a design asset: the picture is the work itself
    return <SafeImage src={images[item.image]} alt={item.title} className={`${frameOf(item)} w-full rounded-xl bg-ice`} imgClassName="object-contain" />
  }
  return (
    <div className="relative">
      <SafeImage src={images[thumb]} alt={t('creative.panelAlt', { title: item.title })} className="aspect-video w-full rounded-xl bg-ink-deep" imgClassName="object-contain" />
      <p className="absolute inset-x-3 bottom-3 rounded-lg bg-ink-deep/85 px-3 py-2 text-sm text-canvas">
        {item.url ? t('creative.noEmbed') : t('creative.pending')}
      </p>
    </div>
  )
}

// A work with preview renders: the large view swaps between the video and each image in place.
// Keyed by the selected work, so switching works always starts on the video.
function Showcase({ item, thumb }) {
  const { t } = useLang()
  const previews = item.previews ?? []
  const [pv, setPv] = useState(-1)
  const [tab, setTab] = useState(0)
  if (item.tabs?.length) {
    // one work, several pictures: a strip of previews swaps the large view in place
    return (
      <div>
        <SafeImage key={tab} src={images[item.tabs[tab].image]} alt={`${item.title}, ${item.tabs[tab].label}`} className={`${frameOf(item, item.tabs[tab])} w-full rounded-xl bg-ice`} imgClassName="object-contain" />
        <a href={images[item.tabs[tab].image]} target="_blank" rel="noreferrer" className="mt-1 inline-flex min-h-11 items-center gap-1 text-sm font-medium text-royal hover:text-ink">
          {t('gallery.full')} <ExternalIcon />
        </a>
        <ul className="mt-3 flex gap-2 overflow-x-auto pb-1" aria-label={t('creative.imageTabs')}>
          {item.tabs.map((tb, i) => (
            <li key={tb.image} className="shrink-0">
              <button
                type="button"
                aria-current={tab === i}
                aria-label={tb.label}
                title={tb.label}
                onClick={() => setTab(i)}
                className={`block h-16 w-28 overflow-hidden rounded-lg border-2 ${tab === i ? 'border-royal' : 'border-transparent'}`}
              >
                <SafeImage src={images[tb.image]} alt="" className="h-full w-full bg-ice" imgClassName="object-contain" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
  if (!previews.length) return <Stage item={item} thumb={thumb} />
  const poster = toEmbed(item.url)?.poster ?? images[thumb]
  const btn = (active) => `block h-16 w-28 overflow-hidden rounded-lg border-2 ${active ? 'border-royal' : 'border-transparent'}`

  return (
    <div>
      {pv < 0 ? (
        <Stage item={item} thumb={thumb} />
      ) : (
        <SafeImage key={pv} src={images[previews[pv]]} alt={t('creative.previewOpen', { title: item.title, n: pv + 1 })} className="aspect-video w-full rounded-xl bg-ink-deep" imgClassName="object-contain" />
      )}
      <ul className="mt-3 flex gap-2 overflow-x-auto pb-1" aria-label={t('creative.previews')}>
        <li className="shrink-0">
          <button type="button" aria-current={pv < 0} aria-label={t('gallery.video')} onClick={() => setPv(-1)} className={btn(pv < 0)}>
            <span className="relative block h-full w-full">
              <SafeImage src={poster} alt="" className="h-full w-full" />
              <span className="absolute inset-0 grid place-items-center bg-ink-deep/40 text-xs font-medium text-canvas">{t('gallery.video')}</span>
            </span>
          </button>
        </li>
        {previews.map((key, i) => (
          <li key={key} className="shrink-0">
            <button type="button" aria-current={pv === i} aria-label={t('creative.previewOpen', { title: item.title, n: i + 1 })} onClick={() => setPv(i)} className={btn(pv === i)}>
              <SafeImage src={images[key]} alt="" className="h-full w-full" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

// Creative gallery: pick a category with the tabs, then pick a work from the list.
export default function CreativeDialog({ categories, initialId, onClose }) {
  const { t } = useLang()
  const [catId, setCatId] = useState(initialId)
  const [index, setIndex] = useState(0)
  const cat = categories.find((c) => c.id === catId)
  const item = cat.items[index]
  const thumb = useMemo(() => thumbOf(cat, item, index), [cat, item, index])

  const pick = (id) => { setCatId(id); setIndex(0) }
  const onKeyDown = (e) => {
    if (e.target.closest?.('iframe')) return
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') { e.preventDefault(); setIndex((i) => Math.min(i + 1, cat.items.length - 1)) }
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') { e.preventDefault(); setIndex((i) => Math.max(i - 1, 0)) }
  }

  return (
    <Modal
      wide
      title={t('creative.title')}
      subtitle={`${cat.title}, ${t('creative.count', { n: count(cat) })}`}
      onClose={onClose}
      onKeyDown={onKeyDown}
      actions={
        <a
          href={`${PORTFOLIO_PDF}#page=3`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-11 items-center gap-1 rounded-lg px-3 text-sm font-medium text-royal hover:bg-ice"
        >
          {t('creative.portfolio')} <ExternalIcon />
        </a>
      }
    >
      <div className="overflow-y-auto p-5 md:p-6">
        <div role="tablist" aria-label={t('creative.tabs')} className="mb-6 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              role="tab"
              aria-selected={c.id === catId}
              onClick={() => pick(c.id)}
              className={`min-h-11 rounded-full border px-5 text-sm font-medium transition-colors ${c.id === catId ? 'border-ink bg-ink text-canvas' : 'border-mist bg-white text-body hover:border-royal hover:text-ink'}`}
            >
              {c.title} <span className="tabular-nums opacity-70">{count(c)}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
          <div className="min-w-0">
            <Showcase key={`${catId}-${index}`} item={item} thumb={thumb} />
            <p className="mt-3 flex flex-wrap items-center gap-2 font-medium text-ink">
              {item.title}
              {item.highlight && <span className="rounded-full bg-royal/10 px-2 py-0.5 text-xs font-medium text-royal">{t('creative.highlight')}</span>}
            </p>
            {item.url && (
              <a href={item.url} target="_blank" rel="noreferrer" className="mt-1 inline-flex min-h-11 items-center gap-1 text-sm font-medium text-royal hover:text-ink">
                {t('creative.source')} <ExternalIcon />
              </a>
            )}
            <p className="mt-2 max-w-xl leading-relaxed text-body">{cat.text}</p>
          </div>

          <div className="min-w-0">
            <h4 className="text-sm font-medium text-royal">{t('creative.list')}</h4>
            <ol className="mt-2 divide-y divide-mist border-y border-mist">
              {cat.items.map((it, i) => (
                <li key={it.title}>
                  <button
                    type="button"
                    aria-current={i === index}
                    onClick={() => setIndex(i)}
                    className={`flex w-full items-center gap-3 px-1 py-2 text-left transition-colors hover:bg-ice ${i === index ? 'bg-ice' : ''}`}
                  >
                    <SafeImage
                      src={it.url && toEmbed(it.url)?.poster ? toEmbed(it.url).poster : images[thumbOf(cat, it, i)]}
                      alt=""
                      className="h-11 w-[4.5rem] shrink-0 rounded-md"
                    />
                    <span className="min-w-0 flex-1">
                      <span className="block text-ink">{i + 1}. {it.title}</span>
                      {it.highlight && <span className="mr-1.5 inline-block rounded-full bg-royal/10 px-2 text-xs font-medium text-royal">{t('creative.highlight')}</span>}
                      <span className="text-xs text-body">{it.image ? t('creative.image') : it.url ? t('creative.hasVideo') : t('creative.noVideo')}</span>
                    </span>
                  </button>
                </li>
              ))}
              {cat.more && <li className="px-1 py-2.5 text-body">{t('creative.more')}</li>}
            </ol>
          </div>
        </div>
      </div>
    </Modal>
  )
}
