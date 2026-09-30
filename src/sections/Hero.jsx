import SplitWords from '../components/ui/SplitWords'
import Reveal from '../components/ui/Reveal'
import Marquee from '../components/Marquee'
import { ExternalIcon } from '../components/ui/Icons'
import { useLang } from '../i18n/context'

// Centered name on top, a full-width strip of work below.
export default function Hero() {
  const { t, c: { profile } } = useLang()
  const links = Object.entries(profile.links).filter(([, href]) => href)

  return (
    <section id="top" className="bg-ice pt-32 pb-16">
      <div className="wrap">
        <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
          <Reveal className="mb-6 text-base font-medium text-royal">
            {t('hero.edu')}
          </Reveal>

          <h1 className="text-[clamp(2.75rem,7.4vw,6.25rem)] font-semibold leading-[1] tracking-tight text-ink">
            <SplitWords text={profile.first} onMount delay={0.1} />{' '}
            <span className="text-royal"><SplitWords text={profile.last} onMount delay={0.25} /></span>
          </h1>

          <Reveal delay={0.5} className="mt-6 max-w-2xl text-balance text-xl font-medium text-ink md:text-2xl">
            {profile.role}
          </Reveal>
          <Reveal delay={0.56} className="mt-4 max-w-xl text-balance text-lg leading-relaxed text-body">
            {profile.summary}
          </Reveal>

          <Reveal delay={0.62} className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="#projects" className="rounded-full bg-ink px-7 py-3.5 font-medium text-canvas transition-colors hover:bg-royal">
              {t('hero.projects')}
            </a>
            <a href="#contact" className="rounded-full border border-ink/25 bg-white px-7 py-3.5 font-medium text-ink transition-colors hover:border-ink">
              {t('hero.message')}
            </a>
            {links.map(([name, href]) => (
              <a key={name} href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 px-2 py-3 text-body hover:text-ink">
                {name} <ExternalIcon />
              </a>
            ))}
          </Reveal>
        </div>
      </div>

      <Reveal delay={0.7} className="mt-14"><Marquee /></Reveal>
    </section>
  )
}
