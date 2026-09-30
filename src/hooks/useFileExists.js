import { useEffect, useState } from 'react'

// 'checking' | 'yes' | 'no'. The dev server and many hosts answer 200 with
// index.html for a missing path, so the content type has to say PDF too.
export default function useFileExists(url) {
  const [status, setStatus] = useState('checking')

  useEffect(() => {
    let alive = true
    fetch(url, { method: 'HEAD' })
      .then((r) => alive && setStatus(r.ok && /pdf/i.test(r.headers.get('content-type') || '') ? 'yes' : 'no'))
      .catch(() => alive && setStatus('no'))
    return () => { alive = false }
  }, [url])

  return status
}
