// Small time-based generators for the idle life of the mascot. All of them are
// smooth functions of time: no state that can pop.

const smooth = (u) => u * u * (3 - 2 * u)

// Blink: fast close, slower open. Random gap of 2.4-5.4s, one in four is a double blink.
export function createBlinker() {
  let next = 2.2
  let queued = false
  let start = -10

  return (t) => {
    if (t >= next) {
      start = t
      const dbl = !queued && Math.random() < 0.25
      queued = dbl
      next = t + (dbl ? 0.34 : 2.4 + Math.random() * 3)
    }
    const u = (t - start) / 0.2
    if (u < 0 || u > 1) return 0
    return smooth(u < 0.4 ? u / 0.4 : 1 - (u - 0.4) / 0.6)
  }
}

// Idle "point" bounce of the raised arm, a decaying wobble every few seconds.
export function pointPulse(t, period = 4.6) {
  const tau = t % period
  return tau < 1.2 ? 0.07 * Math.exp(-3.6 * tau) * Math.sin(tau * 21) : 0
}

// Two slow sines that never quite repeat: reads as breathing and drifting attention.
export const drift = (t, a = 1, b = 0.55) => Math.sin(t * a) * 0.6 + Math.sin(t * a * 1.71 + 1.3) * 0.4 * b

export const easeOutCubic = (u) => 1 - Math.pow(1 - u, 3)
export const easeInOut = (u) => (u < 0.5 ? 4 * u * u * u : 1 - Math.pow(-2 * u + 2, 3) / 2)
