import { motion, useScroll, useSpring } from 'motion/react'

// Reading progress: tells the reader how much of the page is left.
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.4 })

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-royal"
    />
  )
}
