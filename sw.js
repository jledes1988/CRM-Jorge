const CACHE = 'crm-jorge-v1';
const ARCHIVOS = [
  '/CRM-Jorge/',
  '/CRM-Jorge/index.html'
];

// Instalar: guardar archivos en cache
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE).then(function(c) {
      return c.addAll(ARCHIVOS);
    })
  );
  self.skipWaiting();
});

// Activar: limpiar caches viejos
self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k) { return k !== CACHE; })
            .map(function(k) { return caches.delete(k); })
      );
    })
  );
  self.clients.claim();
});

// Fetch: servir desde cache si no hay internet
self.addEventListener('fetch', function(e) {
  // Las llamadas al Apps Script siempre van a la red (son la sincronizacion)
  if (e.request.url.includes('script.google.com')) {
    e.respondWith(
      fetch(e.request).catch(function() {
        // Si no hay internet, devuelve error controlado
        return new Response(JSON.stringify({ok:false,error:'sin_conexion'}), {
          headers: {'Content-Type': 'application/json'}
        });
      })
    );
    return;
  }

  // Todo lo demas: cache primero, red como fallback
  e.respondWith(
    caches.match(e.request).then(function(cached) {
      if (cached) return cached;
      return fetch(e.request).then(function(response) {
        // Guardar en cache para proxima vez
        if (response && response.ok) {
          var copia = response.clone();
          caches.open(CACHE).then(function(c) { c.put(e.request, copia); });
        }
        return response;
      }).catch(function() {
        // Sin internet y sin cache: devolver el HTML principal
        return caches.match('/CRM-Jorge/index.html');
      });
    })
  );
});
