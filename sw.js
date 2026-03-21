// Strategy:
//   - App shell (index.html)  → cache-first
//   - CDN assets               → stale-while-revalidate
//   - Firebase / auth / DB     → network-only (never cache tokens)

const SW_VERSION  = 'ft-v1.2';
const SHELL_CACHE = SW_VERSION + '-shell';
const CDN_CACHE   = SW_VERSION + '-cdn';

const SHELL_ASSETS = [
  '/Finance-Tracker/',
  '/Finance-Tracker/index.html',
  '/Finance-Tracker/manifest.json',
  '/Finance-Tracker/icon-192.png',
  '/Finance-Tracker/icon-1024.jpg',
];

const CDN_ORIGINS = [
  'cdnjs.cloudflare.com',
  'fonts.googleapis.com',
  'fonts.gstatic.com',
  'www.gstatic.com',
  'www.google.com',
];

const FIREBASE_HOSTS = [
  'firebaseapp.com',
  'firebasedatabase.app',
  'firebaseio.com',
  'googleapis.com',
  'gstatic.com/firebasejs',
  'identitytoolkit',
  'securetoken',
];

// ── Install: pre-cache the app shell ──
self.addEventListener('install', e => {
  console.log('[SW] Installing ft-v5...');
  self.skipWaiting();
  e.waitUntil(
    caches.open(SHELL_CACHE).then(cache => {
      console.log('[SW] Caching shell assets');
      // addAll fails if ANY asset 404s — use individual puts to be resilient
      return Promise.allSettled(
        SHELL_ASSETS.map(url =>
          fetch(url).then(res => {
            if (res.ok) return cache.put(url, res);
          }).catch(err => console.warn('[SW] Could not cache:', url, err))
        )
      );
    })
  );
});

// ── Activate: purge stale caches ──
self.addEventListener('activate', e => {
  console.log('[SW] Activating ft-v5...');
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys
          .filter(k => k !== SHELL_CACHE && k !== CDN_CACHE)
          .map(k => {
            console.log('[SW] Deleting old cache:', k);
            return caches.delete(k);
          })
      ))
      .then(() => self.clients.claim())
  );
});

// ── Fetch: route by origin ──
self.addEventListener('fetch', e => {
  // Only handle GET requests
  if (e.request.method !== 'GET') return;

  const url = new URL(e.request.url);

  // Firebase / auth / DB → always network, never cache tokens
  const isFirebase = FIREBASE_HOSTS.some(h => url.hostname.includes(h) || url.pathname.includes(h));
  if (isFirebase) return;

  // CDN assets → stale-while-revalidate
  const isCDN = CDN_ORIGINS.some(o => url.hostname.includes(o));
  if (isCDN) {
    e.respondWith(
      caches.open(CDN_CACHE).then(async cache => {
        const cached = await cache.match(e.request);
        const networkFetch = fetch(e.request)
          .then(res => {
            if (res && res.ok) cache.put(e.request, res.clone());
            return res;
          })
          .catch(() => cached);
        return cached || networkFetch;
      })
    );
    return;
  }

  // Same-origin (app shell) → cache-first with network fallback
  if (url.origin === self.location.origin) {
    e.respondWith(
      caches.match(e.request)
        .then(cached => {
          if (cached) {
            // Serve cached, update in background
            fetch(e.request).then(res => {
              if (res && res.ok) {
                caches.open(SHELL_CACHE).then(c => c.put(e.request, res));
              }
            }).catch(() => {});
            return cached;
          }
          // Not cached — fetch and cache
          return fetch(e.request)
            .then(res => {
              if (res && res.ok) {
                const clone = res.clone();
                caches.open(SHELL_CACHE).then(c => c.put(e.request, clone));
              }
              return res;
            })
            .catch(() => caches.match('./index.html'));
        })
    );
  }
});

// ── Message handler ──
self.addEventListener('message', e => {
  if (e.data && e.data.type === 'SKIP_WAITING') self.skipWaiting();
});
