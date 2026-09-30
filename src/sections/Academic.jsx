import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import { useLang } from '../i18n/context'
import { at } from '../lib/motion'

const Stage = ({ label, name, detail, period, gpa }) => (
  <div className="border-t border-canvas/20 py-5">
    <p className="text-sm font-medium text-sky">{label}</p>
    <p className="mt-1 text-2xl font-semibold">{name}</p>
    <p className="mt-1 text-mist">{detail}</p>
    {period && <p className="mt-1 font-medium">{period}</p>}
    {gpa && <p className="mt-1 font-medium text-sky">{gpa}</p>}
  </div>
)

// Inverse navy band (DESIGN.md "inverse sections"): the one place the page
// goes dark before the long light middle, so the academic base reads as the anchor.
export default function Academic() {
  const { t, c: { academic } } = useLang()
  const { current } = academic

  return (
    <section id="academic" className="on-dark bg-ink py-24 text-canvas">
      <div className="wrap grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading title={t('academic.title')} dark />
          <Reveal delay={0.1} className="mt-10">
            <Stage {...current} />
          </Reveal>
        </div>

        <div className="lg:col-span-7 lg:pt-4">
          <ul className="border-t border-canvas/20">
            {academic.focus.map((f, i) => (
              <Reveal as="li" key={f.title} delay={at(i)} className="grid gap-2 border-b border-canvas/20 py-6 md:grid-cols-[1fr_1.2fr] md:gap-8">
                <h3 className="text-xl font-semibold">{f.title}</h3>
                <p className="text-mist">{f.text}</p>
              </Reveal>
            ))}
          </ul>

          <Reveal className="mt-8">
            <h3 className="text-sm font-medium text-sky">{t('academic.courses')}</h3>
            <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-mist">
              {academic.courses.map((c) => <li key={c}>{c}</li>)}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
