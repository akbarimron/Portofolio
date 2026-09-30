import { useState } from 'react'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import CreativePanel from '../components/CreativePanel'
import CreativeDialog from '../components/CreativeDialog'
import { useLang } from '../i18n/context'
import { coverPool } from '../data/covers'

export default function Creative() {
  const { t, c: { creative } } = useLang()
  const [active, setActive] = useState(0)
  const [open, setOpen] = useState(null)

  return (
    <section id="creative" className="border-t border-mist py-24">
      <div className="wrap">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <SectionHeading title={t('creative.title')} />
          <Reveal className="max-w-xs text-body">{t('creative.intro')}</Reveal>
        </div>
        <Reveal className="mt-12 flex flex-col gap-3 lg:h-[34rem] lg:flex-row">
          {creative.map((c, i) => (
            <CreativePanel
              key={c.id}
              item={c}
              covers={coverPool(c.id)}
              delay={i * 1200}
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
