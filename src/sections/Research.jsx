import { useState } from 'react'
import SectionHeading from '../components/ui/SectionHeading'
import SafeImage from '../components/ui/SafeImage'
import Reveal from '../components/ui/Reveal'
import ProjectDialog from '../components/ProjectDialog'
import { research } from '../data/research'
import { images } from '../data/images'

// Research done together with lecturers. The confidential one is deliberately
// kept to two lines: it is unpublished and not yet patented.
export default function Research() {
  const [open, setOpen] = useState(null)
  const main = research.find((r) => !r.confidential)
  const secret = research.filter((r) => r.confidential)

  return (
    <section id="research" className="border-t border-mist bg-ice/50 py-28">
      <div className="wrap">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeading title="Penelitian Dosen" />
          <Reveal className="max-w-sm text-body">Proyek riset yang saya ikuti sebagai anggota tim bersama dosen.</Reveal>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-12">
          <Reveal as="article" className="group overflow-hidden rounded-3xl border border-mist bg-white lg:col-span-8">
            <div className="grid md:grid-cols-2">
              <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[24rem]">
                <SafeImage
                  src={images[main.image]}
                  alt={`Foto prototipe ${main.title}`}
                  className="absolute inset-0"
                  imgClassName="transition-transform duration-700 ease-emph group-hover:scale-[1.03]"
                />
                <button
                  type="button"
                  onClick={() => setOpen(main)}
                  aria-label={`Buka pratinjau ${main.title}, ${main.shots.length} foto`}
                  className="absolute inset-0 z-10 cursor-zoom-in"
                />
                <span className="pointer-events-none absolute bottom-3 left-3 z-20 rounded-md bg-white/95 px-2.5 py-1 text-sm font-medium text-ink">
                  Lihat {main.shots.length} foto
                </span>
              </div>
              <div className="flex flex-col justify-between gap-8 p-6 md:p-10">
                <div>
                  <p className="text-sm font-medium text-royal">{main.role}</p>
                  <h3 className="mt-1 text-3xl font-semibold leading-tight text-ink">{main.title}</h3>
                  <p className="mt-4 leading-relaxed text-body">{main.text}</p>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {Object.values(main.stackGroups).flat().map((s) => (
                    <li key={s} className="rounded-md bg-ice px-2.5 py-1 text-sm text-ink">{s}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {secret.map((r, i) => (
            <Reveal as="article" key={r.id} delay={0.1 + i * 0.06} className="on-dark flex flex-col justify-between rounded-3xl bg-ink p-8 text-canvas lg:col-span-4">
              <div>
                <p className="text-sm font-medium text-sky">{r.role}</p>
                <h3 className="mt-1 text-2xl font-semibold leading-tight">{r.title}</h3>
                <p className="mt-4 leading-relaxed text-mist">{r.text}</p>
              </div>
              <p className="mt-10 border-t border-canvas/20 pt-4 text-sm text-mist">Belum dipublikasikan</p>
            </Reveal>
          ))}
        </div>
      </div>
      {open && <ProjectDialog project={open} onClose={() => setOpen(null)} />}
    </section>
  )
}
