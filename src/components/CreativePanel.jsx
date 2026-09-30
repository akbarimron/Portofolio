import { useEffect, useRef, useState } from 'react'
import SafeImage from './ui/SafeImage'
import { shuffle } from '../data/covers'
import { useLang } from '../i18n/context'

// On desktop the strip is an accordion: the hovered/focused panel grows and
// the others fold to a vertical title. Below lg every panel is fully open.
// The invisible button on top opens the gallery (mouse, touch and keyboard).
export default function CreativePanel({ item, covers, delay = 0, active, onActivate, onOpen }) {
  const { t } = useLang()
  // the cover cycles through every work's thumbnail; `prev` stays underneath so the next one cross-fades in
  const [pos, setPos] = useState({ cur: 0, prev: 0 })
  const cur = useRef(0)
  const queue = useRef([])

  useEffect(() => {
    if (covers.length < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    let timer
    const start = setTimeout(() => {
      // satu putaran = semua gambar tampil tepat sekali dalam urutan acak, lalu diundi ulang
      timer = setInterval(() => {
        if (!queue.current.length) queue.current = shuffle(covers.map((_, i) => i).filter((i) => i !== cur.current))
        const next = queue.current.shift()
        setPos({ prev: cur.current, cur: next })
        cur.current = next
      }, 4500)
    }, delay)
    return () => { clearTimeout(start); clearInterval(timer) }
  }, [covers.length, delay])

  return (
    <article
      data-active={active}
      onMouseEnter={onActivate}
      style={{ flexGrow: active ? 4 : 1 }}
      className="group on-dark relative isolate min-h-80 overflow-hidden rounded-2xl bg-ink text-canvas lg:min-h-0 lg:basis-0 lg:transition-[flex-grow] lg:duration-700 lg:ease-emph"
    >
      {[...new Set([pos.prev, pos.cur])].map((i, n) => (
        <SafeImage
          key={i}
          {...covers[i]}
          instant={n > 0}
          alt={n > 0 || pos.prev === pos.cur ? t('creative.panelAlt', { title: item.title }) : ''}
          className={`absolute inset-0 -z-20 ${n > 0 ? 'cover-in' : ''}`}
          imgClassName="transition-transform duration-700 ease-emph group-hover:scale-105"
        />
      ))}
      {/* scrim: keeps the white text readable over any part of the photo */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-deep/95 via-ink-deep/50 to-ink-deep/10" />

      <span className="absolute bottom-6 left-6 hidden text-lg font-semibold transition-opacity duration-300 [writing-mode:vertical-rl] rotate-180 lg:block lg:group-data-[active=true]:opacity-0">
        {item.title}
      </span>

      <div className="absolute inset-x-0 bottom-0 p-6 lg:translate-y-3 lg:p-8 lg:opacity-0 lg:transition-all lg:duration-500 lg:group-data-[active=true]:translate-y-0 lg:group-data-[active=true]:opacity-100 lg:group-data-[active=true]:delay-300">
        <h3 className="text-2xl font-semibold">{item.title}</h3>
        <p className="mt-3 max-w-md leading-relaxed text-mist">{item.text}</p>
        <p className="mt-4 text-sm font-medium text-sky">{item.tools}</p>
        <p className="mt-1 text-sm text-mist">{t('creative.count', { n: `${item.items.length}${item.more ? '+' : ''}` })}</p>
        <p className="mt-4 font-medium underline decoration-sky decoration-2 underline-offset-4">{t('creative.seeAll')}</p>
      </div>

      <button
        type="button"
        onClick={onOpen}
        onFocus={onActivate}
        aria-label={t('creative.open', { title: item.title })}
        className="absolute inset-0 z-10 cursor-pointer rounded-2xl"
      />
    </article>
  )
}
