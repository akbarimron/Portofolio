import SafeImage from './ui/SafeImage'
import { images } from '../data/images'
import { coverOf } from '../data/covers'

// `copy` marks the duplicated second set of the loop: hidden from assistive
// tech and skipped by Tab, so each link is announced and focusable only once.
export default function MarqueeCard({ card, copy = false }) {
  return (
    <li className={`shrink-0 ${card.w}`} aria-hidden={copy || undefined}>
      <a
        href={card.href}
        tabIndex={copy ? -1 : undefined}
        aria-label={`Lihat ${card.label}`}
        className="group relative block h-[22rem] overflow-hidden rounded-2xl md:h-[24rem]"
      >
        <SafeImage
          src={images[card.cat ? coverOf(card.cat) : card.image]}
          alt={`Cuplikan ${card.label}`}
          eager={!copy}
          className="absolute inset-0"
          imgClassName="transition-transform duration-700 ease-emph group-hover:scale-105"
        />
        <span className="absolute bottom-3 left-3 rounded-md bg-white/95 px-2.5 py-1 text-sm font-medium text-ink">
          {card.label}
        </span>
      </a>
    </li>
  )
}
