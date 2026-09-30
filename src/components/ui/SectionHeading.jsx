import SplitWords from './SplitWords'

// Title only. No numbering or eyebrow: the section name is the heading itself.
export default function SectionHeading({ title, dark = false, className = '' }) {
  return (
    <h2 className={`text-[clamp(2rem,4.6vw,3.5rem)] font-semibold leading-[1.05] tracking-tight ${dark ? '' : 'text-ink'} ${className}`}>
      <SplitWords text={title} />
    </h2>
  )
}
