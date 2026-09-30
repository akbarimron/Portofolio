import Modal from './ui/Modal'
import { ExternalIcon } from './ui/Icons'
import { useLang } from '../i18n/context'

// PDF preview. Desktop browsers render the PDF inline; phones often cannot,
// so "Buka di tab baru" is always offered as well.
export default function DocumentDialog({ doc, onClose }) {
  const { t } = useLang()
  const btn = 'inline-flex min-h-11 items-center gap-1 rounded-lg px-3 text-sm font-medium text-royal hover:bg-ice'

  return (
    <Modal
      wide
      title={doc.title}
      subtitle={t('docs.dialog')}
      onClose={onClose}
      actions={
        <>
          <a href={doc.file} target="_blank" rel="noreferrer" className={btn}>{t('docs.newTab')} <ExternalIcon /></a>
          <a href={doc.file} download={doc.download} className={btn}>{t('docs.get')}</a>
        </>
      }
    >
      <iframe
        src={`${doc.file}#view=FitH`}
        title={t('docs.iframe', { title: doc.title })}
        className="h-[75dvh] w-full bg-ice"
      />
    </Modal>
  )
}
