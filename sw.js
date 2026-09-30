// Service Worker corrigé
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Laisse le navigateur charger la page directement depuis le réseau
  event.respondWith(
    fetch(event.request).catch(() => {
      // Évite le blocage en cas d'erreur de réseau
      return new Response("Erreur de connexion");
    })
  );
});

