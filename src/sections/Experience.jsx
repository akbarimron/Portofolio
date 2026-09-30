import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import SectionHeading from '../components/ui/SectionHeading'
import ExperienceRow from '../components/ExperienceRow'
import DetailDialog from '../components/DetailDialog'
import { experienceDetail } from '../data/details'
import { experience, filters } from '../data/experience'
import { ease, dur } from '../lib/motion'

export default function Experience() {
  const [filter, setFilter] = useState('all')
  const [open, setOpen] = useState(null)
  const items = experience.filter((e) => filter === 'all' || e.group === filter)

  return (
    <section id="experience" className="py-32">
      <div className="wrap">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading title="Organisasi & Asistensi" />
          <div role="group" aria-label="Saring peran" className="flex gap-1 self-start rounded-xl border border-mist bg-ice p-1">
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                aria-pressed={filter === f.id}
                onClick={() => setFilter(f.id)}
                className={`relative isolate rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${filter === f.id ? 'text-ink' : 'text-body hover:text-ink'}`}
              >
                {filter === f.id && (
                  <motion.span
                    layoutId="filter-active"
                    transition={{ duration: dur.base, ease }}
                    className="absolute inset-0 -z-10 rounded-lg bg-white shadow-sm"
                  />
                )}
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <p aria-live="polite" className="sr-only">{items.length} peran ditampilkan</p>

        {items.length === 0 ? (
          <p className="mt-12 text-body">Belum ada peran di kategori ini.</p>
        ) : (
          <ul className="mt-12 border-t border-mist">
            <AnimatePresence initial={false} mode="popLayout">
              {items.map((item) => <ExperienceRow key={item.id} item={item} onOpen={setOpen} />)}
            </AnimatePresence>
          </ul>
        )}
      </div>
      {open && <DetailDialog title={open.title} subtitle={`${open.org} | ${open.meta}`} detail={experienceDetail[open.id]} onClose={() => setOpen(null)} />}
    </section>
  )
}
