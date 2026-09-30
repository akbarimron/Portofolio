import { useState } from 'react'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import DocumentDialog from '../components/DocumentDialog'
import useFileExists from '../hooks/useFileExists'
import { useLang } from '../i18n/context'
import { at } from '../lib/motion'

function DocumentRow({ doc, index, onPreview }) {
  const { t } = useLang()
  const status = useFileExists(doc.file)
  const ready = status === 'yes'
  const btn = 'inline-flex min-h-11 items-center rounded-full px-6 font-medium transition-colors'

  return (
    <Reveal as="li" delay={at(index)} className="grid items-center gap-5 border-b border-mist py-8 md:grid-cols-[1fr_auto]">
      <div>
        <h3 className="text-2xl font-semibold text-ink">{doc.title}</h3>
        <p className="mt-1 max-w-md text-body">{doc.text}</p>
        {status === 'no' && (
          <p className="mt-2 text-sm text-body">{t('docs.missing', { file: doc.file })}</p>
        )}
      </div>
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          disabled={!ready}
          onClick={() => onPreview(doc)}
          className={`${btn} bg-ink text-canvas hover:bg-royal disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-ink`}
        >
          {t('docs.preview')}
        </button>
        {ready ? (
          <a href={doc.file} download={doc.download} className={`${btn} border border-ink/25 text-ink hover:border-ink`}>
            {t('docs.download')}
          </a>
        ) : (
          <span aria-disabled="true" className={`${btn} border border-ink/25 text-ink opacity-40`}>{t('docs.download')}</span>
        )}
      </div>
    </Reveal>
  )
}

export default function Documents() {
  const { t, c: { documents } } = useLang()
  const [open, setOpen] = useState(null)

  return (
    <section id="documents" className="border-t border-mist py-24">
      <div className="wrap">
        <SectionHeading title={t('docs.title')} />
        <ul className="mt-10 border-t border-mist">
          {documents.map((d, i) => <DocumentRow key={d.id} doc={d} index={i} onPreview={setOpen} />)}
        </ul>
      </div>
      {open && <DocumentDialog doc={open} onClose={() => setOpen(null)} />}
    </section>
  )
}
