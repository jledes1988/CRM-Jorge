// Service Worker CRM-JORGE
// Estrategia: Network First con fallback a cache
// Cada vez que hay internet, carga la version mas reciente automaticamente

const CACHE = 'crm-jorge-v2';
const ARCHIVOS = [
  '/CRM-Jorge/',
  '/CRM-Jorge/index.html'
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
  // Llamadas al Apps Script: siempre van a la red
  if(e.request.url.includes('script.google.com')) {
    e.respondWith(
      fetch(e.request).catch(function() {
        return new Response(JSON.stringify({ok:false,error:'sin_conexion'}), {
          headers: {'Content-Type': 'application/json'}
        });
      })
    );
    return;
  }

  // Todo lo demas: Network First
  // Intenta la red primero, si falla usa cache
  // Asi siempre se carga la version mas reciente cuando hay internet
  e.respondWith(
    fetch(e.request).then(function(response) {
      // Si la respuesta es valida, guardarla en cache y devolverla
      if(response && response.ok) {
        var copia = response.clone();
        caches.open(CACHE).then(function(c) { c.put(e.request, copia); });
      }
      return response;
    }).catch(function() {
      // Sin internet: servir desde cache
      return caches.match(e.request).then(function(cached) {
        return cached || caches.match('/CRM-Jorge/index.html');
      });
    })
  );
});
