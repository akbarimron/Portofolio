import { useRef } from 'react'
import Hero from './Hero'
import About from './About'
import MascotLayer from '../components/MascotLayer'
import useStickyBottom from '../hooks/useStickyBottom'

// Hero and About as one stacked pair. The hero scrolls until its bottom meets
// the bottom of the screen and pins; from that moment About slides up over it,
// with no pause in between. The mascot lives on the About portrait (see MascotLayer).
export default function Landing() {
  const heroRef = useRef(null)
  const top = useStickyBottom(heroRef)

  return (
    <div>
      <MascotLayer />

      <div ref={heroRef} style={{ top }} className="sticky z-0">
        <Hero />
      </div>

      {/* the shadow is the elevation cue: this layer sits above the hero */}
      <div className="relative z-10 rounded-t-[2.5rem] bg-white shadow-[0_-24px_60px_-24px_rgba(9,31,92,0.28)]">
        <About />
      </div>
    </div>
  )
}
