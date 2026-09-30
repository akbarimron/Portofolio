import { lazy, Suspense, useCallback, useEffect, useRef, useState } from 'react'
import { useMotionValueEvent, useReducedMotion, useScroll } from 'motion/react'
import ErrorBoundary from './ui/ErrorBoundary'

const MascotStage = lazy(() => import('./three/MascotStage'))

// One fixed, click-through canvas holding the mascot. It sits above the page
// (z-15) so it can overlap the portrait in About, whose rectangle is read live
// each frame (see journey.js). The canvas only exists while the bottom of the
// portrait is near the screen, so the hero and the rest of the page pay nothing for it.
export default function MascotLayer() {
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()
  const span = useRef(null) // document y of the portrait: { top, bottom }
  const [ready, setReady] = useState(false)
  const [on, setOn] = useState(false)

  const getFigure = useCallback(() => document.getElementById('about-photo')?.getBoundingClientRect() ?? null, [])

  const check = useCallback(
    (y) => {
      const s = span.current
      // starts a little before the platform can appear (time to load three.js), ends once it has left
      setOn(!!s && y > s.bottom - window.innerHeight - 700 && y < s.bottom + 400)
    },
    [],
  )

  useEffect(() => {
    const update = () => {
      const f = getFigure()
      if (f) span.current = { top: f.top + window.scrollY, bottom: f.bottom + window.scrollY }
      check(window.scrollY)
    }
    update()
    document.fonts?.ready.then(update)
    const timer = setTimeout(update, 1500)
    window.addEventListener('resize', update)
    return () => { clearTimeout(timer); window.removeEventListener('resize', update) }
  }, [getFigure, check])

  useMotionValueEvent(scrollY, 'change', check)

  if (reduce || !on) return null

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-[15] transition-opacity duration-700 ${ready ? 'opacity-100' : 'opacity-0'}`}
    >
      <ErrorBoundary fallback={null}>
        <Suspense fallback={null}>
          <MascotStage getFigure={getFigure} scrollY={scrollY} onReady={() => setReady(true)} />
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}
