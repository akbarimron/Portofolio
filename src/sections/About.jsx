import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import SectionHeading from '../components/ui/SectionHeading'
import SafeImage from '../components/ui/SafeImage'
import Reveal from '../components/ui/Reveal'
import CountUp from '../components/ui/CountUp'
import { useLang } from '../i18n/context'
import { images } from '../data/images'
import { at } from '../lib/motion'

export default function About() {
  const { t, c: { profile, philosophy, awards, projects, experience, creative } } = useLang()
  // Every number is derived from the data files, so it can't drift. The creative
  // total counts every work in data/creative.js; "+" because Cinematic and Motion
  // are marked `more` (the card count shows the same sign).
  const metrics = [
    { value: awards.length + 1 /* + the GenBI scholarship */, label: t('about.m.awards') },
    { value: projects.length, label: t('about.m.projects') },
    { value: experience.length, label: t('about.m.roles') },
    { value: creative.reduce((n, c) => n + c.items.length, 0), suffix: creative.some((c) => c.more) ? '+' : undefined, label: t('about.m.creative') },
  ]
  const figRef = useRef(null)
  const reduce = useReducedMotion()

  // The portrait is uncovered as this section slides up over the hero:
  // a small window opens out to the full frame while the photo settles in.
  const { scrollYProgress: enter } = useScroll({ target: figRef, offset: ['start end', 'start 30%'] })
  const clip = useTransform(enter, [0, 1], ['inset(32% 24% 0% 24% round 48px)', 'inset(0% 0% 0% 0% round 24px)'])
  const zoom = useTransform(enter, [0, 1], [1.35, 1])

  return (
    <section id="about" className="overflow-x-clip py-28">
      <div className="wrap grid items-start gap-14 lg:grid-cols-12">
        <figure ref={figRef} className="lg:col-span-5">
          {/* the mascot is positioned from this box (see journey.js); clip-path does not change its rect */}
          <motion.div id="about-photo" style={reduce ? undefined : { clipPath: clip }}>
            <motion.div style={reduce ? undefined : { scale: zoom }}>
              <SafeImage
                src={images.portrait}
                alt={t('about.portrait', { name: `${profile.first} ${profile.last}` })}
                className="aspect-[3/4] rounded-3xl"
                imgClassName="object-[50%_30%]"
              />
            </motion.div>
          </motion.div>
        </figure>

        <div className="lg:col-span-7 lg:pt-16">
          <SectionHeading title={philosophy.quote} />
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-body">
            {philosophy.paragraphs.map((p, i) => (
              <Reveal as="p" key={i} delay={at(i + 1)}>{p}</Reveal>
            ))}
          </div>

          <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-mist pt-8 md:grid-cols-4">
            {metrics.map((m, i) => (
              <Reveal key={m.label} delay={at(i)} className="flex flex-col-reverse justify-end">
                <dt className="mt-2 text-sm leading-snug text-body">{m.label}</dt>
                <dd className={`text-5xl font-semibold ${m.suffix ? 'text-royal' : 'text-ink'}`}>
                  <CountUp to={m.value} suffix={m.suffix} />
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
