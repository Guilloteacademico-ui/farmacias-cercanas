/* ═══════════════════════════════════════════
   Service Worker — Farmacias Cercanas
   Cache básico para funcionamiento offline
═══════════════════════════════════════════ */

const CACHE_NAME = 'farmacias-v1';

const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  'https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
];

/* Instalación: pre-cachear assets estáticos */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS).catch(() => {});
    })
  );
  self.skipWaiting();
});

/* Activación: limpiar caches viejos */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

/* Fetch: cache-first para assets, network-first para API */
self.addEventListener('fetch', event => {
  const url = event.request.url;

  // Overpass API y tiles del mapa — siempre red
  if (url.includes('overpass-api.de') || url.includes('carto') || url.includes('openstreetmap')) {
    event.respondWith(fetch(event.request).catch(() => new Response('', { status: 503 })));
    return;
  }

  // Assets — cache first
  event.respondWith(
    caches.match(event.request).then(cached => {
      return cached || fetch(event.request).then(response => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        return response;
      });
    }).catch(() => caches.match('/index.html'))
  );
});
