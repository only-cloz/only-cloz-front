import { useSyncExternalStore } from 'react'

// Chromium-only event, not part of the TypeScript DOM typings.
interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>
}

/**
 * - standalone: currently running as the installed app
 * - available:  the browser offers its native install prompt
 * - installed:  app installed from this browser, site opened in a normal tab
 * - manual:     no native prompt (iOS, Firefox, …) → "Add to Home screen"
 */
export type InstallStatus = 'standalone' | 'available' | 'installed' | 'manual'

const INSTALLED_KEY = 'pwa-installed'
const standaloneQuery = window.matchMedia('(display-mode: standalone)')

let deferredPrompt: BeforeInstallPromptEvent | null = null
let installed = readInstalledFlag()
const listeners = new Set<() => void>()

function readInstalledFlag() {
  try {
    return localStorage.getItem(INSTALLED_KEY) === '1'
  } catch {
    return false
  }
}

function setInstalled(value: boolean) {
  installed = value
  try {
    if (value) localStorage.setItem(INSTALLED_KEY, '1')
    else localStorage.removeItem(INSTALLED_KEY)
  } catch {
    // Storage unavailable (private mode): the in-memory value is enough.
  }
}

function emit() {
  listeners.forEach((listener) => listener())
}

window.addEventListener('beforeinstallprompt', (event) => {
  // Keep Chrome's automatic mini-infobar quiet: installing is only offered from the footer.
  event.preventDefault()
  deferredPrompt = event as BeforeInstallPromptEvent
  // The browser only offers the prompt when the app is not (or no longer) installed.
  setInstalled(false)
  emit()
})

window.addEventListener('appinstalled', () => {
  deferredPrompt = null
  setInstalled(true)
  emit()
})

// Optional call: older Safari versions have no addEventListener on MediaQueryList.
standaloneQuery.addEventListener?.('change', emit)

function getStatus(): InstallStatus {
  if (standaloneQuery.matches || (navigator as Navigator & { standalone?: boolean }).standalone) {
    return 'standalone'
  }
  if (deferredPrompt) return 'available'
  if (installed) return 'installed'
  return 'manual'
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}

export function useInstallStatus() {
  return useSyncExternalStore(subscribe, getStatus)
}

/** Opens the browser's native install dialog; the user confirms or dismisses it. */
export async function promptInstall() {
  const event = deferredPrompt
  if (!event) return
  deferredPrompt = null // a prompt event can only be used once
  try {
    await event.prompt()
    await event.userChoice
  } catch {
    // The event is no longer valid: the footer falls back to the manual hint.
  }
  emit()
}
