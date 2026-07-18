// Service Worker CRM-JORGE
// Estrategia: Network First con fallback a cache
// Cada vez que hay internet, carga la version mas reciente automaticamente

const CACHE = 'crm-jorge-v3'; // subir el numero en cada cambio de este archivo
const ARCHIVOS = [
  '/CRM-Jorge/',
  '/CRM-Jorge/index.html',
  '/CRM-Jorge/estilos.css',
  '/CRM-Jorge/app.js'
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE).then(function(c) {
      return c.addAll(ARCHIVOS);
    })
  );
  self.skipWaiting(); // activar inmediatamente sin esperar
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k) { return k !== CACHE; })
            .map(function(k) { return caches.delete(k); })
      );
    })
  );
  self.clients.claim(); // tomar control de todas las pestanas abiertas
});

self.addEventListener('fetch', function(e) {
  // Firebase (Firestore/Auth) maneja su propio offline: no interceptar ni cachear
  if (e.request.url.includes('googleapis.com') || e.request.url.includes('gstatic.com')) {
    return; // el navegador lo resuelve directo
  }

  // Todo lo demas: Network First
  // Intenta la red primero, si falla usa cache
  // Asi siempre se carga la version mas reciente cuando hay internet
  e.respondWith(
    fetch(e.request).then(function(response) {
      if (response && response.ok) {
        var copia = response.clone();
        caches.open(CACHE).then(function(c) { c.put(e.request, copia); });
      }
      return response;
    }).catch(function() {
      return caches.match(e.request).then(function(cached) {
        return cached || caches.match('/CRM-Jorge/index.html');
      });
    })
  );
});
