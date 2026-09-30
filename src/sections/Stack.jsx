import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import { useLang } from '../i18n/context'
import { at } from '../lib/motion'

// Plain definition lists on purpose: a skills section is a lookup table.
// Bold entries are the tools used most in the projects above.
export default function Stack() {
  const { t, c: { stack } } = useLang()

  return (
    <section id="stack" className="border-t border-mist py-24">
      <div className="wrap">
        <SectionHeading title={t('stack.title')} />
        <div className="mt-14 space-y-16">
          {stack.map((c) => (
            <div key={c.cluster} className="grid gap-6 lg:grid-cols-12">
              <Reveal as="h3" className="text-xl font-semibold text-royal lg:col-span-4">{c.cluster}</Reveal>
              <dl className="border-t border-mist lg:col-span-8">
                {c.groups.map((g, i) => (
                  <Reveal key={g.label} delay={at(i)} className="grid gap-2 border-b border-mist py-5 md:grid-cols-[13rem_1fr]">
                    <dt className="text-sm font-medium text-body">{g.label}</dt>
                    <dd>
                      <ul className="flex flex-wrap gap-x-5 gap-y-1.5 text-lg">
                        {g.items.map((it) => (
                          <li key={it} className={g.hot.includes(it) ? 'font-semibold text-ink' : 'text-body'}>{it}</li>
                        ))}
                      </ul>
                    </dd>
                  </Reveal>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
