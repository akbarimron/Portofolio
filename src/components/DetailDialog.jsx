import { useState } from 'react'
import Modal from './ui/Modal'
import Gallery from './ui/Gallery'

// Detail pop-up for an organisation role, an assistantship or an award.
// `detail` comes from data/details.js. Proofs flagged `dummy` are stand-in
// pictures, and the dialog says so.
export default function DetailDialog({ title, subtitle, detail, onClose }) {
  const [index, setIndex] = useState(0)
  const proofs = detail.proofs ?? []
  const hasDummy = proofs.some((p) => p.dummy)

  const onKeyDown = (e) => {
    if (proofs.length < 2) return
    if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % proofs.length)
    if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + proofs.length) % proofs.length)
  }

  return (
    <Modal wide title={title} subtitle={subtitle} onClose={onClose} onKeyDown={onKeyDown}>
      <div className="overflow-y-auto p-5 md:p-6">
        <div className={`grid gap-8 ${proofs.length ? 'lg:grid-cols-[1.2fr_1fr]' : ''}`}>
          <div className="order-2 lg:order-1">
            {detail.paragraphs.map((p) => <p key={p} className="mb-3 max-w-2xl leading-relaxed text-body">{p}</p>)}

            {detail.points?.length > 0 && (
              <>
                <h4 className="mt-6 text-sm font-medium text-royal">Rincian</h4>
                <ul className="mt-2 divide-y divide-mist border-y border-mist">
                  {detail.points.map((t) => <li key={t} className="py-2.5 leading-snug text-ink">{t}</li>)}
                </ul>
              </>
            )}

            <dl className="mt-6 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {Object.entries(detail.facts).map(([k, v]) => (
                <div key={k}>
                  <dt className="text-xs text-body">{k}</dt>
                  <dd className="font-medium text-ink">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          {proofs.length > 0 && (
            <div className="order-1 lg:order-2">
              <h4 className="mb-3 text-sm font-medium text-royal">Bukti dan dokumentasi</h4>
              <Gallery works={proofs} index={index} onSelect={setIndex} />
              {hasDummy && (
                <p className="mt-3 rounded-lg bg-ice p-3 text-sm leading-relaxed text-body">
                  Gambar berlabel "Contoh sementara" adalah pengganti. Foto dan dokumen asli belum dipasang.
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </Modal>
  )
}
