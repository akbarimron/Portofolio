import { useState } from 'react'
import Modal from './ui/Modal'
import Gallery from './ui/Gallery'
import { ExternalIcon } from './ui/Icons'

const linkCls = 'inline-flex min-h-11 items-center gap-1 rounded-lg px-3 text-sm font-medium text-royal hover:bg-ice'

// Preview of one project: media on the left; role, description, highlights and
// technology on the right. Arrow keys step through the media.
export default function ProjectDialog({ project: p, onClose }) {
  const [index, setIndex] = useState(0)
  const works = p.shots ?? [{ type: 'image', image: p.image, title: p.title }]
  const links = p.links ?? []

  const onKeyDown = (e) => {
    if (works.length < 2) return
    if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % works.length)
    if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + works.length) % works.length)
  }

  return (
    <Modal
      wide
      title={p.title}
      subtitle={[p.role, p.period].filter(Boolean).join(' | ')}
      onClose={onClose}
      onKeyDown={onKeyDown}
      actions={links.map((l) => (
        <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className={linkCls}>
          {l.label} <ExternalIcon />
        </a>
      ))}
    >
      <div className="overflow-y-auto p-5 md:p-6">
        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          <Gallery works={works} index={index} onSelect={setIndex} />
          <div>
            <p className="leading-relaxed text-body">{p.text}</p>

            {p.highlights && (
              <>
                <h4 className="mt-6 text-sm font-medium text-royal">Yang dikerjakan</h4>
                <ul className="mt-2 divide-y divide-mist border-y border-mist">
                  {p.highlights.map((h) => <li key={h} className="py-2.5 leading-snug text-ink">{h}</li>)}
                </ul>
              </>
            )}

            <h4 className="mt-6 text-sm font-medium text-royal">Teknologi</h4>
            <dl className="mt-2 space-y-3">
              {Object.entries(p.stackGroups ?? { Teknologi: p.stack ?? [] }).map(([group, items]) => (
                <div key={group}>
                  <dt className="text-xs text-body">{group}</dt>
                  <dd>
                    <ul className="mt-1 flex flex-wrap gap-2">
                      {items.map((s) => <li key={s} className="rounded-md bg-ice px-2.5 py-1 text-sm text-ink">{s}</li>)}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </Modal>
  )
}
