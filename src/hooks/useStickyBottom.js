import { useEffect, useState } from 'react'

// A block taller than the viewport should scroll until its BOTTOM reaches the
// bottom of the screen, then pin. This returns the `top` value that does that.
export default function useStickyBottom(ref) {
  const [top, setTop] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const update = () => setTop(Math.min(0, window.innerHeight - el.offsetHeight))
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    window.addEventListener('resize', update)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', update)
    }
  }, [ref])

  return top
}
