/*
 * Only Cloz — service worker (makes the site installable as a PWA).
 *
 * Deliberately conservative: requests always go to the network first, so an
 * online visitor gets exactly the latest deployed site. The cache is only a
 * fallback used when the network is unreachable.
 *
 * Only same-origin GET page navigations and static files (scripts, styles,
 * images, fonts) are handled. Everything else — API calls, form submissions,
 * EmailJS, Google Fonts, … — is never intercepted and stays with the browser.
 */
const VERSION = 'v1'
const PAGE_CACHE = `onlycloz-pages-${VERSION}`
const ASSET_CACHE = `onlycloz-assets-${VERSION}`
const OFFLINE_PAGE = '/'
const MAX_ASSETS = 60
const STATIC_DESTINATIONS = ['script', 'style', 'image', 'font']

self.addEventListener('install', () => {
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const current = [PAGE_CACHE, ASSET_CACHE]
    const names = await caches.keys()
    await Promise.all(
      names
        .filter((name) => name.startsWith('onlycloz-') && !current.includes(name))
        .map((name) => caches.delete(name)),
    )
    if (self.registration.navigationPreload) {
      await self.registration.navigationPreload.enable()
    }
    await self.clients.claim()
  })())
})

self.addEventListener('fetch', (event) => {
  const { request } = event
  if (request.method !== 'GET') return
  if (request.cache === 'only-if-cached' && request.mode !== 'same-origin') return
  if (new URL(request.url).origin !== self.location.origin) return

  if (request.mode === 'navigate') {
    event.respondWith(handleNavigation(event))
  } else if (STATIC_DESTINATIONS.includes(request.destination) && !request.headers.has('range')) {
    event.respondWith(handleAsset(event))
  }
})

async function handleNavigation(event) {
  try {
    const response = (await event.preloadResponse) || (await fetch(event.request))
    const type = response.headers.get('content-type') || ''
    if (response.ok && response.type === 'basic' && type.includes('text/html')) {
      const copy = response.clone()
      // SPA: every route serves the same index.html, one offline copy is enough.
      event.waitUntil(caches.open(PAGE_CACHE).then((cache) => cache.put(OFFLINE_PAGE, copy)))
    }
    return response
  } catch (error) {
    const cached = await caches.match(OFFLINE_PAGE, { cacheName: PAGE_CACHE })
    if (cached) return cached
    throw error
  }
}

async function handleAsset(event) {
  const { request } = event
  try {
    const response = await fetch(request)
    if (response.ok && response.type === 'basic') {
      event.waitUntil(putAsset(request, response.clone()))
    }
    return response
  } catch (error) {
    const cached = await caches.match(request, { cacheName: ASSET_CACHE })
    if (cached) return cached
    throw error
  }
}

async function putAsset(request, response) {
  const cache = await caches.open(ASSET_CACHE)
  await cache.put(request, response)
  // Keys come back oldest first: drop the oldest ones beyond the cap.
  const keys = await cache.keys()
  await Promise.all(keys.slice(0, Math.max(0, keys.length - MAX_ASSETS)).map((key) => cache.delete(key)))
}
