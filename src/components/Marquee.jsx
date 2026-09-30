import { useState } from 'react'
import MarqueeCard from './MarqueeCard'
import { cards } from '../data/marquee'

// Full-bleed strip that slides right to left in a seamless loop: two identical
// sets side by side, moved by exactly one set width (-50%).
// Hover or keyboard focus pauses it, and the button gives a permanent pause.
// With prefers-reduced-motion it becomes a plain horizontally scrollable row.
export default function Marquee() {
  const [paused, setPaused] = useState(false)
  const set = 'flex shrink-0 gap-4 pr-4'

  return (
    <div>
      <div className="overflow-hidden motion-reduce:overflow-x-auto">
        <div
          style={paused ? { animationPlayState: 'paused' } : undefined}
          className="flex w-max animate-[marquee_70s_linear_infinite] hover:[animation-play-state:paused] focus-within:[animation-play-state:paused] motion-reduce:animate-none"
        >
          <ul className={set} aria-label="Cuplikan proyek dan karya">
            {cards.map((c) => <MarqueeCard key={c.label} card={c} />)}
          </ul>
          <ul className={`${set} motion-reduce:hidden`} aria-hidden="true">
            {cards.map((c) => <MarqueeCard key={c.label} card={c} copy />)}
          </ul>
        </div>
      </div>
      <div className="wrap mt-4 flex justify-end motion-reduce:hidden">
        <button
          type="button"
          aria-pressed={paused}
          onClick={() => setPaused((v) => !v)}
          className="min-h-11 rounded-lg px-3 text-sm font-medium text-body hover:text-ink"
        >
          {paused ? 'Putar gerakan' : 'Jeda gerakan'}
        </button>
      </div>
    </div>
  )
}
