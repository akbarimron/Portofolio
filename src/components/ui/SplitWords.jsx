import { Fragment, useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'motion/react'
import { ease, dur } from '../../lib/motion'

// Word-by-word mask reveal for headlines. Words rise out of a clipped line,
// so the eye reads the sentence in order. Screen readers get the plain text.
// The observer watches the outer wrapper: a word that starts translated out of
// its own overflow-hidden mask is clipped and would never report as visible.
export default function SplitWords({ text, className = '', delay = 0, onMount = false }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const seen = useInView(ref, { once: true, margin: '0px 0px -12% 0px' })
  const shown = onMount || seen

  return (
    <span ref={ref} className={className}>
      <span className="sr-only">{text}</span>
      {text.split(' ').map((w, i) => (
        <Fragment key={i}>
          <span aria-hidden="true" className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom">
            <motion.span
              className="inline-block"
              initial={reduce ? false : { y: '115%' }}
              animate={{ y: shown || reduce ? 0 : '115%' }}
              transition={{ duration: dur.slow, ease, delay: delay + i * 0.07 }}
            >
              {w}
            </motion.span>
          </span>{' '}
        </Fragment>
      ))}
    </span>
  )
}
