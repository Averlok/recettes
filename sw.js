// Service Worker minimal pour valider les critères PWA d'Android
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Laisse passer les requêtes normalement
  event.respondWith(fetch(event.request));
});
