import { useState } from 'react'
import { useLang } from '../../i18n/context'

// Image with an explicit loading and error state. The remote images can expire,
// so a broken one must say so instead of leaving an empty box.
// The caller sets positioning (relative / absolute) and size.
// `fallback` is a second source tried once when `src` fails (or loads as a tiny placeholder,
// which is what YouTube serves for a missing maxresdefault). `instant` skips the fade-in, for a
// layer that is stacked on top of another: its backdrop stays solid, so a transparent picture
// never shows the one beneath it.
export default function SafeImage({ src, fallback, alt, className = '', imgClassName = '', eager = false, instant = false }) {
  const [status, setStatus] = useState('loading')
  const [failed, setFailed] = useState(false)
  const { t } = useLang()
  // a caller-supplied object-fit replaces the default; two conflicting classes would be resolved by CSS order, not by intent
  const fit = /object-(contain|fill|none|scale-down)/.test(imgClassName) ? '' : 'object-cover'
  const shown = failed && fallback ? fallback : src

  const fail = () => {
    if (fallback && !failed) setFailed(true)
    else setStatus('error')
  }

  return (
    <div className={`overflow-hidden bg-mist ${className}`}>
      {status !== 'error' && (
        <img
          src={shown}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={(e) => (fallback && !failed && e.currentTarget.naturalWidth <= 120 ? fail() : setStatus('ready'))}
          onError={fail}
          className={`h-full w-full ${fit} ${instant ? '' : `transition-opacity duration-500 ${status === 'ready' ? 'opacity-100' : 'opacity-0'}`} ${imgClassName}`}
        />
      )}
      {status === 'error' && (
        <div role="img" aria-label={alt} className="grid h-full w-full place-items-center p-4 text-center text-sm text-body">
          {t('image.error')}
          <br />
          {t('image.errorHint')}
        </div>
      )}
    </div>
  )
}
