import { useState } from 'react'

// Image with an explicit loading and error state. The remote images can expire,
// so a broken one must say so instead of leaving an empty box.
// The caller sets positioning (relative / absolute) and size.
export default function SafeImage({ src, alt, className = '', imgClassName = '', eager = false }) {
  const [status, setStatus] = useState('loading')
  // a caller-supplied object-fit replaces the default; two conflicting classes would be resolved by CSS order, not by intent
  const fit = /object-(contain|fill|none|scale-down)/.test(imgClassName) ? '' : 'object-cover'

  return (
    <div className={`overflow-hidden bg-mist ${className}`}>
      {status !== 'error' && (
        <img
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={() => setStatus('ready')}
          onError={() => setStatus('error')}
          className={`h-full w-full ${fit} transition-opacity duration-500 ${status === 'ready' ? 'opacity-100' : 'opacity-0'} ${imgClassName}`}
        />
      )}
      {status === 'error' && (
        <div role="img" aria-label={alt} className="grid h-full w-full place-items-center p-4 text-center text-sm text-body">
          Gambar tidak dapat dimuat.
          <br />
          Ganti sumbernya di src/data/images.js
        </div>
      )}
    </div>
  )
}
