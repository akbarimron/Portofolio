import SafeImage from './SafeImage'
import { ExternalIcon } from './Icons'
import { images } from '../../data/images'
import { useLang } from '../../i18n/context'

export const srcOf = (w) => w.src ?? images[w.image]

const VIDEO_ALLOW = 'accelerometer; encrypted-media; picture-in-picture; fullscreen'

// Only the selected item is rendered, so a video starts only when the visitor picks it.
function Viewer({ work }) {
  const box = 'aspect-video w-full rounded-xl bg-ink-deep'
  if (work.type === 'video') {
    return <iframe src={work.embed} title={work.title} loading="lazy" allow={VIDEO_ALLOW} allowFullScreen className={box} />
  }
  if (work.type === 'file') return <video src={work.src} controls className={box} />
  return <SafeImage src={srcOf(work)} alt={work.title} className={box} imgClassName="object-contain" />
}

function Thumb({ work }) {
  const { t } = useLang()
  if (work.poster) {
    return (
      <span className="relative block h-full w-full">
        <SafeImage src={work.poster} alt="" className="h-full w-full" />
        <span className="absolute inset-0 grid place-items-center bg-ink-deep/40 text-xs font-medium text-canvas">{t('gallery.video')}</span>
      </span>
    )
  }
  if (work.type === 'image' || work.image || work.src) return <SafeImage src={srcOf(work)} alt="" className="h-full w-full" />
  return <span className="grid h-full w-full place-items-center bg-ink px-1 text-center text-xs text-canvas">{work.label ?? t('gallery.media')}</span>
}

const isRealImage = (w) => !w.dummy && (!w.type || w.type === 'image') && !!srcOf(w)

// Large preview plus a row of thumbnails. Shared by the creative, project and detail dialogs.
// `zoomable` adds a full-size link under real (non-placeholder) images, for documents whose
// small print is unreadable at dialog size, such as certificates.
export default function Gallery({ works, index, onSelect, zoomable = false }) {
  const { t } = useLang()
  const work = works[index]
  return (
    <div className="min-w-0">
      <Viewer key={index} work={work} />
      <p className="mt-3 font-medium text-ink">{work.title}</p>
      {zoomable && isRealImage(work) && (
        <a href={srcOf(work)} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-1 text-sm font-medium text-royal hover:text-ink">
          {t('gallery.full')} <ExternalIcon />
        </a>
      )}
      {works.length > 1 && (
        <ul className="mt-4 flex gap-2 overflow-x-auto pb-1" aria-label={t('gallery.pick')}>
          {works.map((w, i) => (
            <li key={w.title + i} className="shrink-0">
              <button
                type="button"
                aria-current={i === index}
                aria-label={w.title}
                onClick={() => onSelect(i)}
                className={`block h-16 w-28 overflow-hidden rounded-lg border-2 ${i === index ? 'border-royal' : 'border-transparent'}`}
              >
                <Thumb work={w} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
