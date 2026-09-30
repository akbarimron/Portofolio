import { motion, useReducedMotion } from 'motion/react'
import { rise, viewport } from '../../lib/motion'

// Single entrance pattern used across the site: rise + fade, once.
export default function Reveal({ as = 'div', delay = 0, className, children, ...rest }) {
  const reduce = useReducedMotion()

  if (reduce) {
    const Plain = as
    return <Plain className={className} {...rest}>{children}</Plain>
  }

  const Tag = motion[as]
  return (
    <Tag
      className={className}
      variants={rise}
      custom={delay}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      {...rest}
    >
      {children}
    </Tag>
  )
}
