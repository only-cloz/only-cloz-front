/** Registers the PWA service worker — production builds only, after the page has loaded. */
export function registerServiceWorker() {
  if (!import.meta.env.PROD || !('serviceWorker' in navigator)) return

  const register = () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {
      // A failed registration only disables installation; the site keeps working.
    })
  }

  if (document.readyState === 'complete') register()
  else window.addEventListener('load', register, { once: true })
}
