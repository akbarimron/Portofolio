import { useMemo, useState } from 'react'
import Modal from './ui/Modal'
import SafeImage from './ui/SafeImage'
import { ExternalIcon } from './ui/Icons'
import { images } from '../data/images'
import { documents } from '../data/documents'
import { thumbOf } from '../data/covers'
import { toEmbed } from '../lib/embed'

const portfolio = documents.find((d) => d.id === 'portfolio')
const count = (c) => `${c.items.length}${c.more ? '+' : ''}`

// The stage for one work: its embed if it has a link, its picture if it is a design
// asset, otherwise its thumbnail with an honest note. Only the selected work is rendered, so a video starts
// only when the visitor picks it.
function Stage({ item, thumb }) {
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
    return <SafeImage src={images[item.image]} alt={item.title} className="aspect-video w-full rounded-xl bg-ice" imgClassName="object-contain" />
  }
  return (
    <div className="relative">
      <SafeImage src={images[thumb]} alt={`Cuplikan ${item.title}`} className="aspect-video w-full rounded-xl bg-ink-deep" imgClassName="object-contain" />
      <p className="absolute inset-x-3 bottom-3 rounded-lg bg-ink-deep/85 px-3 py-2 text-sm text-canvas">
        {item.url
          ? 'Tautan ini belum bisa disematkan. Buka lewat tombol "Buka sumber" di bawah.'
          : 'Video karya ini belum ditambahkan. Gambar ini hanya cuplikan.'}
      </p>
    </div>
  )
}

// Creative gallery: pick a category with the tabs, then pick a work from the list.
export default function CreativeDialog({ categories, initialId, onClose }) {
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
      title="Karya Kreatif"
      subtitle={`${cat.title}, ${count(cat)} karya di portfolio`}
      onClose={onClose}
      onKeyDown={onKeyDown}
      actions={
        <a
          href={`${portfolio.file}#page=3`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-11 items-center gap-1 rounded-lg px-3 text-sm font-medium text-royal hover:bg-ice"
        >
          Buka Portfolio <ExternalIcon />
        </a>
      }
    >
      <div className="overflow-y-auto p-5 md:p-6">
        <div role="tablist" aria-label="Kategori karya" className="mb-6 flex flex-wrap gap-2">
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

        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <Stage key={`${catId}-${index}`} item={item} thumb={thumb} />
            <p className="mt-3 font-medium text-ink">{item.title}</p>
            {item.url && (
              <a href={item.url} target="_blank" rel="noreferrer" className="mt-1 inline-flex min-h-11 items-center gap-1 text-sm font-medium text-royal hover:text-ink">
                Buka sumber <ExternalIcon />
              </a>
            )}
            <p className="mt-2 max-w-xl leading-relaxed text-body">{cat.text}</p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-royal">Daftar karya, klik untuk melihat</h4>
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
                      <span className="block text-xs text-body">{it.image ? 'Gambar' : it.url ? 'Video tersedia' : 'Belum ada video'}</span>
                    </span>
                  </button>
                </li>
              ))}
              {cat.more && <li className="px-1 py-2.5 text-body">dan masih banyak lagi</li>}
            </ol>
          </div>
        </div>
      </div>
    </Modal>
  )
}
