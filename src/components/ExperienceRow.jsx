import { motion } from 'motion/react'
import { ease, dur } from '../lib/motion'

// The whole row is one click target (invisible button on top) that opens the detail dialog.
export default function ExperienceRow({ item, onOpen }) {
  return (
    <motion.li
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: dur.base, ease }}
      className="group relative grid gap-x-8 gap-y-2 border-b border-mist py-7 transition-colors hover:bg-ice/60 md:grid-cols-12 md:px-4"
    >
      <p className="font-medium text-royal md:col-span-3">{item.meta}</p>
      <div className="md:col-span-4">
        <h3 className="text-xl font-semibold text-ink transition-transform duration-300 group-hover:translate-x-1">{item.title}</h3>
        <p className="mt-1 text-sm text-body">{item.org}</p>
      </div>
      <div className="md:col-span-5">
        <p className="leading-relaxed text-body">{item.text}</p>
        <p className="mt-2 text-sm font-medium text-royal underline decoration-sky decoration-2 underline-offset-4">Lihat detail</p>
      </div>
      <button
        type="button"
        onClick={() => onOpen(item)}
        aria-label={`Lihat detail ${item.title}`}
        className="absolute inset-0 z-10 cursor-pointer"
      />
    </motion.li>
  )
}
