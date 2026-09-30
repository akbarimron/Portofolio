const base = { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true }

export const MenuIcon = () => (
  <svg {...base}><path d="M4 8h16M4 16h16" /></svg>
)
export const CloseIcon = () => (
  <svg {...base}><path d="M6 6l12 12M18 6L6 18" /></svg>
)
// Marks links that leave the site.
export const ExternalIcon = () => (
  <svg {...base} width={14} height={14}><path d="M7 17L17 7M9 7h8v8" /></svg>
)
export const CheckIcon = () => (
  <svg {...base}><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
)
export const CopyIcon = () => (
  <svg {...base}><rect x="9" y="9" width="11" height="11" rx="2" /><path d="M5 15V6a2 2 0 012-2h9" /></svg>
)
