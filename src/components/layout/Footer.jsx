import { useLang } from '../../i18n/context'
import { ExternalIcon } from '../ui/Icons'

export default function Footer() {
  const { t, c: { profile } } = useLang()
  const links = Object.entries(profile.links).filter(([, href]) => href)

  return (
    <footer className="border-t border-mist bg-ice/50">
      <div className="wrap flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold">{profile.first} {profile.last}</p>
          <p className="mt-1 text-sm text-body">
            {t('footer.built', { year: new Date().getFullYear() })}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          {links.map(([name, href]) => (
            <a key={name} href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 py-2 text-body hover:text-ink">
              {name} <ExternalIcon />
            </a>
          ))}
          <a href="#top" className="py-2 font-medium text-royal hover:text-ink">{t('footer.top')}</a>
        </div>
      </div>
    </footer>
  )
}
