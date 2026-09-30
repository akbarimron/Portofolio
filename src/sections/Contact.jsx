import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import CopyEmail from '../components/CopyEmail'
import ContactForm from '../components/ContactForm'
import { useLang } from '../i18n/context'

export default function Contact() {
  const { t } = useLang()

  return (
    <section id="contact" className="on-dark bg-ink py-28 text-canvas">
      <div className="wrap grid items-start gap-14 lg:grid-cols-12">
        <div className="lg:col-span-6 lg:pt-6">
          <SectionHeading title={t('contact.title')} dark />
          <Reveal delay={0.1} className="mt-8 max-w-md text-lg leading-relaxed text-mist">
            {t('contact.intro')}
          </Reveal>
          <Reveal delay={0.16}><CopyEmail /></Reveal>
        </div>
        <Reveal delay={0.1} className="lg:col-span-6">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  )
}
