// Motion identity: "Premium" archetype. One decelerating entrance curve,
// three durations, one entrance pattern (rise + fade), 60ms stagger step.
export const ease = [0.05, 0.7, 0.1, 1]
export const easeSoft = [0.4, 0, 0.2, 1]
export const dur = { quick: 0.2, base: 0.55, slow: 1 }
export const step = 0.06

export const rise = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: dur.base, ease, delay },
  }),
}

export const viewport = { once: true, margin: '0px 0px -12% 0px' }

// Stagger delay is capped so a long list never exceeds ~0.4s total.
export const at = (i) => Math.min(i, 6) * step
