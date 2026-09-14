import { useState } from 'react'
import { Check, Smartphone } from 'lucide-react'
import { useI18n } from '../../i18n'
import { promptInstall, useInstallStatus } from '../../pwa/installPrompt'

const LINK_COLOR = '#22D3EE'

export default function InstallAppButton() {
  const { t } = useI18n()
  const status = useInstallStatus()
  const [showHint, setShowHint] = useState(false)

  // Already running as the installed app: nothing to show.
  if (status === 'standalone') return null

  const installed = status === 'installed'
  const Icon = installed ? Check : Smartphone

  const handleClick = () => {
    if (status === 'available') void promptInstall()
    else setShowHint(true)
  }

  return (
    <div className="mt-5">
      <button
        type="button"
        onClick={handleClick}
        disabled={installed}
        className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200 disabled:cursor-default disabled:opacity-60"
        style={{ color: LINK_COLOR }}
        onMouseEnter={e => { if (!installed) e.currentTarget.style.color = '#FFFFFF' }}
        onMouseLeave={e => { e.currentTarget.style.color = LINK_COLOR }}
      >
        <Icon size={15} />
        {installed ? t.footer.appInstalled : t.footer.installApp}
      </button>

      {showHint && !installed && (
        <p className="mt-2.5 text-xs leading-relaxed text-white/40" role="status">
          {t.footer.installHint}
        </p>
      )}
    </div>
  )
}
