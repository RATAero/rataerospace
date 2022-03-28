importScripts('cache-polyfill.js');

self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('airhorner').then(function(cache) {
     return cache.addAll([
       '/',
       './word/main.e65ce0a5.js.download',
       '/index.html?homescreen=1',
       '/index.html',
       '/?homescreen=1',
     ]);
   })
 );
});
self.addEventListener('fetch', function(event) {
    console.log(event.request.url);
   
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
   });