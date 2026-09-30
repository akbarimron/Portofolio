import { useEffect, useRef, useState } from 'react'
import { animate, useInView, useReducedMotion } from 'motion/react'
import { ease } from '../../lib/motion'

export default function CountUp({ to, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const reduce = useReducedMotion()
  const [value, setValue] = useState(reduce ? to : 0)

  useEffect(() => {
    if (!inView || reduce) return
    const controls = animate(0, to, {
      duration: 1.2,
      ease,
      onUpdate: (v) => setValue(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, reduce, to])

  return (
    <span ref={ref} className="whitespace-nowrap tabular-nums">
      {value}
      {suffix && <span className="ml-0.5 text-3xl font-medium">{suffix}</span>}
    </span>
  )
}
