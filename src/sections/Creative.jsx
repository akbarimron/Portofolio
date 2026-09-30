import { useState } from 'react'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import CreativePanel from '../components/CreativePanel'
import CreativeDialog from '../components/CreativeDialog'
import { creative } from '../data/creative'
import { coverOf } from '../data/covers'

export default function Creative() {
  const [active, setActive] = useState(0)
  const [open, setOpen] = useState(null)

  return (
    <section id="creative" className="border-t border-mist py-24">
      <div className="wrap">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <SectionHeading title="Karya Kreatif" />
          <Reveal className="max-w-xs text-body">Klik satu kategori untuk memilih dan menonton tiap karyanya.</Reveal>
        </div>
        <Reveal className="mt-12 flex flex-col gap-3 lg:h-[34rem] lg:flex-row">
          {creative.map((c, i) => (
            <CreativePanel
              key={c.id}
              item={c}
              cover={coverOf(c.id)}
              active={active === i}
              onActivate={() => setActive(i)}
              onOpen={() => setOpen(c)}
            />
          ))}
        </Reveal>
      </div>
      {open && <CreativeDialog categories={creative} initialId={open.id} onClose={() => setOpen(null)} />}
    </section>
  )
}
