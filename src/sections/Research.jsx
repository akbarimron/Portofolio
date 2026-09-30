import { useState } from 'react'
import SectionHeading from '../components/ui/SectionHeading'
import SafeImage from '../components/ui/SafeImage'
import Reveal from '../components/ui/Reveal'
import ProjectDialog from '../components/ProjectDialog'
import { useLang } from '../i18n/context'
import { images } from '../data/images'

// Research done together with lecturers. The confidential one is deliberately
// kept to two lines: it is unpublished and not yet patented.
export default function Research() {
  const { t, c: { research } } = useLang()
  const [open, setOpen] = useState(null)
  const [main, ...others] = research.filter((r) => !r.confidential)
  const secret = research.filter((r) => r.confidential)

  const renderMain = (m, wide) => (
    <Reveal as="article" key={m.id} className={`group overflow-hidden rounded-3xl border border-mist bg-white ${wide ? 'lg:col-span-12' : 'lg:col-span-8'}`}>
      <div className="grid md:grid-cols-2">
        <div className={`relative aspect-[4/3] md:aspect-auto md:min-h-[24rem] ${wide ? 'md:order-2' : ''}`}>
          <SafeImage
            src={images[m.image]}
            alt={t('research.photo', { title: m.title })}
            className="absolute inset-0"
            imgClassName="transition-transform duration-700 ease-emph group-hover:scale-[1.03]"
          />
          <button
            type="button"
            onClick={() => setOpen(m)}
            aria-label={t('project.openPhotos', { title: m.title, n: m.shots.length })}
            className="absolute inset-0 z-10 cursor-zoom-in"
          />
          <span className="pointer-events-none absolute bottom-3 left-3 z-20 rounded-md bg-white/95 px-2.5 py-1 text-sm font-medium text-ink">
            {t('project.viewPhotos', { n: m.shots.length })}
          </span>
        </div>
        <div className="flex flex-col justify-between gap-8 p-6 md:p-10">
          <div>
            <p className="text-sm font-medium text-royal">{[m.role, m.period].filter(Boolean).join(' | ')}</p>
            <h3 className="mt-1 text-3xl font-semibold leading-tight text-ink">{m.title}</h3>
            <p className="mt-4 leading-relaxed text-body">{m.text}</p>
          </div>
          <ul className="flex flex-wrap gap-2">
            {Object.values(m.stackGroups).flat().map((s) => (
              <li key={s} className="rounded-md bg-ice px-2.5 py-1 text-sm text-ink">{s}</li>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  )

  return (
    <section id="research" className="border-t border-mist bg-ice/50 py-28">
      <div className="wrap">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeading title={t('research.title')} />
          <Reveal className="max-w-sm text-body">{t('research.intro')}</Reveal>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-12">
          {renderMain(main, false)}

          {secret.map((r, i) => (
            <Reveal as="article" key={r.id} delay={0.1 + i * 0.06} className="on-dark flex flex-col justify-between rounded-3xl bg-ink p-8 text-canvas lg:col-span-4">
              <div>
                <p className="text-sm font-medium text-sky">{r.role}</p>
                <h3 className="mt-1 text-2xl font-semibold leading-tight">{r.title}</h3>
                <p className="mt-4 leading-relaxed text-mist">{r.text}</p>
              </div>
              <p className="mt-10 border-t border-canvas/20 pt-4 text-sm text-mist">{t('research.unpublished')}</p>
            </Reveal>
          ))}

          {others.map((r) => renderMain(r, true))}
        </div>
      </div>
      {open && <ProjectDialog project={open} onClose={() => setOpen(null)} />}
    </section>
  )
}
