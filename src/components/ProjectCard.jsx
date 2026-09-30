import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import SafeImage from './ui/SafeImage'
import { ExternalIcon } from './ui/Icons'
import useMedia from '../hooks/useMedia'
import { images } from '../data/images'
import { techOf } from '../data/projects'

// On desktop each card pins under the heading and the next one slides over it.
// The pinned card eases back in scale so the stack reads as depth.
// Clicking the picture (or Enter on it) opens the preview dialog with more images.
export default function ProjectCard({ project: p, index, total, onOpen }) {
  const wrapRef = useRef(null)
  const desktop = useMedia('(min-width: 768px)')
  const reduce = useReducedMotion()
  const last = index === total - 1
  const { scrollYProgress } = useScroll({ target: wrapRef, offset: ['start start', 'end start'] })
  const scale = useTransform(scrollYProgress, [0, 0.7], [1, 0.94])
  const flip = index % 2 === 1
  const count = p.shots?.length ?? 1
  const onlyPhotos = (p.shots ?? []).every((s) => !s.type || s.type === 'image')
  const links = p.links ?? []

  return (
    <li ref={wrapRef} className={`pb-8 md:pb-0 ${last ? '' : 'md:min-h-[88vh]'}`}>
      <motion.article
        style={{ top: 96 + index * 14, ...(desktop && !reduce ? { scale } : null) }}
        className="group origin-top overflow-hidden rounded-3xl border border-mist bg-white md:sticky"
      >
        <div className="grid md:grid-cols-12">
          <div className={`relative aspect-[16/10] md:col-span-7 md:aspect-auto md:min-h-[26rem] ${flip ? 'md:order-2' : ''}`}>
            <SafeImage
              src={images[p.image]}
              alt={`Tampilan proyek ${p.title}`}
              className="absolute inset-0"
              imgClassName={`transition-transform duration-700 ease-emph group-hover:scale-[1.03] ${p.fit === 'contain' ? 'object-contain' : ''}`}
            />
            <button
              type="button"
              onClick={() => onOpen(p)}
              aria-label={`Buka pratinjau ${p.title}, ${count} gambar`}
              className="absolute inset-0 z-10 cursor-zoom-in"
            />
            <span className="pointer-events-none absolute bottom-3 left-3 z-20 rounded-md bg-white/95 px-2.5 py-1 text-sm font-medium text-ink">
              {count > 1 ? `Lihat ${count} ${onlyPhotos ? 'foto' : 'media'}` : 'Lihat foto'}
            </span>
          </div>
          <div className="flex flex-col justify-between gap-8 p-6 md:col-span-5 md:p-10">
            <div>
              {p.role && <p className="text-sm font-medium text-royal">{p.role}</p>}
              <h3 className="mt-1 text-3xl font-semibold leading-tight text-ink">{p.title}</h3>
              <p className="mt-4 leading-relaxed text-body">{p.text}</p>
            </div>
            <div>
              <ul className="flex flex-wrap gap-2">
                {techOf(p).map((s) => (
                  <li key={s} className="rounded-md bg-ice px-2.5 py-1 text-sm text-ink">{s}</li>
                ))}
              </ul>
              {links.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-1 border-t border-mist pt-4">
                  {links.map((l) => (
                    <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-1 font-medium text-royal hover:text-ink">
                      {l.label} <ExternalIcon />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.article>
    </li>
  )
}
