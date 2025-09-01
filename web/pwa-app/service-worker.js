const CACHE_NAME = "pwa-cache-v1";
const FILES_TO_CACHE = [
  "/william-w.se/web/pwa-app/",
  "/william-w.se/web/pwa-app/index.html",
  "/william-w.se/web/pwa-app//styles.css",
  "/william-w.se/web/pwa-app//script.js",
  "/william-w.se/web/pwa-app//manifest.json",
  "/william-w.se/web/pwa-app//icons/s.png"
];

// Install Service Worker & Cache Files
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Activate & Clean Old Caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) return caches.delete(cache);
        })
      )
    )
  );
  self.clients.claim();
});

// Serve Cached Files
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

