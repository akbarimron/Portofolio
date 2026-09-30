import { useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import { CloseIcon } from './Icons'
import { ease, dur } from '../../lib/motion'

// Native <dialog>: focus is trapped, Esc closes, and the page behind becomes
// inert without extra code. `actions` sit next to the close button.
export default function Modal({ title, subtitle, actions, onClose, onKeyDown, wide = false, children }) {
  const ref = useRef(null)

  useEffect(() => {
    const d = ref.current
    // StrictMode runs this effect twice in dev: don't reopen, and don't call
    // close() on cleanup (its `close` event would unmount the dialog right away).
    if (!d.open) d.showModal()
    document.documentElement.style.overflow = 'hidden'
    return () => {
      document.documentElement.style.overflow = ''
    }
  }, [])

  return (
    <dialog
      ref={ref}
      aria-labelledby="modal-title"
      onClose={onClose}
      onKeyDown={onKeyDown}
      onClick={(e) => e.target === ref.current && ref.current.close()}
      className="m-0 h-dvh max-h-none w-dvw max-w-none bg-transparent p-3 backdrop:bg-ink-deep/80 md:p-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: dur.base, ease }}
        className={`mx-auto flex max-h-full w-full flex-col overflow-hidden rounded-3xl bg-white text-ink-deep ${wide ? 'max-w-6xl' : 'max-w-5xl'}`}
      >
        <header className="flex items-start justify-between gap-4 border-b border-mist p-5 md:p-6">
          <div>
            <h3 id="modal-title" className="text-2xl font-semibold text-ink">{title}</h3>
            {subtitle && <p className="mt-1 text-sm text-body">{subtitle}</p>}
          </div>
          <div className="flex shrink-0 items-center gap-2">
            {actions}
            <button
              type="button"
              autoFocus
              onClick={() => ref.current.close()}
              aria-label="Tutup"
              className="grid size-11 place-items-center rounded-lg hover:bg-ice"
            >
              <CloseIcon />
            </button>
          </div>
        </header>
        {children}
      </motion.div>
    </dialog>
  )
}
