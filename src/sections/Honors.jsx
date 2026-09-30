import { useState } from 'react'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import DetailDialog from '../components/DetailDialog'
import { awards, featuredAward } from '../data/awards'
import { awardDetail } from '../data/details'
import { at } from '../lib/motion'

// Invisible button over the whole card/row: click (or Enter) opens the detail dialog.
const Open = ({ item, onOpen }) => (
  <button
    type="button"
    onClick={() => onOpen(item)}
    aria-label={`Lihat detail ${item.title}`}
    className="absolute inset-0 z-10 cursor-pointer rounded-2xl"
  />
)

// Sticky heading on the left, list on the right: the only section with this
// composition, so it reads as a ledger of records rather than another card grid.
export default function Honors() {
  const [open, setOpen] = useState(null)
  const f = featuredAward

  return (
    <section id="honors" className="border-t border-mist bg-ice/50 py-28">
      <div className="wrap grid gap-12 lg:grid-cols-12">
        <div className="self-start lg:sticky lg:top-28 lg:col-span-4">
          <SectionHeading title="Prestasi & Penghargaan" />
          <Reveal delay={0.1} className="mt-6 max-w-sm text-lg leading-relaxed text-body">
            Beasiswa, hibah, dan kompetisi tingkat nasional yang saya ikuti bersama tim. Klik satu untuk melihat detailnya.
          </Reveal>
        </div>

        <div className="lg:col-span-8">
          <Reveal as="article" className="on-dark relative rounded-2xl bg-ink p-8 text-canvas md:p-10">
            <p className="text-sm font-medium text-sky">{f.level}, {f.year}</p>
            <h3 className="mt-3 text-2xl font-semibold leading-snug md:text-3xl">{f.title}</h3>
            <p className="mt-2 text-mist">{f.sub}</p>
            <p className="mt-5 max-w-2xl leading-relaxed text-mist">{f.text}</p>
            <p className="mt-5 text-sm font-medium underline decoration-sky decoration-2 underline-offset-4">Lihat detail</p>
            <Open item={f} onOpen={setOpen} />
          </Reveal>

          <ol className="mt-4">
            {awards.map((a, i) => (
              <Reveal as="li" key={a.id} delay={at(i)} className="group relative grid gap-x-8 gap-y-2 border-b border-mist py-8 transition-colors hover:bg-white/60 md:grid-cols-[7rem_1fr] md:px-3">
                <p className="text-5xl font-semibold tabular-nums text-royal transition-transform duration-300 group-hover:-translate-y-1">{a.year}</p>
                <div>
                  <p className="text-sm font-medium text-body">{a.level}</p>
                  <h3 className="mt-1 text-xl font-semibold text-ink">{a.title}</h3>
                  <p className="mt-1 text-sm font-medium text-royal">{a.sub}</p>
                  <p className="mt-3 leading-relaxed text-body">{a.text}</p>
                  <p className="mt-2 text-sm font-medium text-royal underline decoration-sky decoration-2 underline-offset-4">Lihat detail</p>
                </div>
                <Open item={a} onOpen={setOpen} />
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
      {open && (
        <DetailDialog
          title={open.title}
          subtitle={[open.sub, open.year && `${open.level}, ${open.year}`].filter(Boolean).join(' | ')}
          detail={awardDetail[open.id]}
          onClose={() => setOpen(null)}
        />
      )}
    </section>
  )
}
