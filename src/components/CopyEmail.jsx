import { useEffect, useState } from 'react'
import { CheckIcon, CopyIcon, ExternalIcon } from './ui/Icons'
import { profile } from '../data/profile'
import { useLang } from '../i18n/context'

export default function CopyEmail() {
  const { t } = useLang()
  const [state, setState] = useState('idle') // idle | copied | failed

  useEffect(() => {
    if (state === 'idle') return
    const t = setTimeout(() => setState('idle'), 2200)
    return () => clearTimeout(t)
  }, [state])

  async function copy() {
    try {
      await navigator.clipboard.writeText(profile.email)
      setState('copied')
    } catch {
      setState('failed')
    }
  }

  return (
    <div className="mt-8 space-y-4">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <a href={`mailto:${profile.email}`} className="text-xl font-medium underline decoration-sky decoration-2 underline-offset-8 hover:text-mist">
          {profile.email}
        </a>
        <button
          type="button"
          onClick={copy}
          className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-canvas/30 px-4 text-sm font-medium transition-colors hover:bg-canvas/10"
        >
          {state === 'copied' ? <CheckIcon /> : <CopyIcon />}
          {state === 'copied' ? t('copy.copied') : t('copy.copy')}
        </button>
        <span aria-live="polite" className="text-sm text-mist">
          {state === 'failed' && t('copy.failed')}
        </span>
      </div>
      <a
        href={profile.links.Instagram}
        target="_blank"
        rel="noreferrer"
        className="inline-flex min-h-11 items-center gap-2 text-lg font-medium hover:text-mist"
      >
        {t('copy.instagram', { user: profile.instagram })} <ExternalIcon />
      </a>
    </div>
  )
}
