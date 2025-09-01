const CACHE_NAME = "pwa-cache-v3";
const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/styles.css",
  "/script.js",
  "/manifest.json",
  "icons/s.png"
];

// Install Service Worker & Cache Files
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );
  self.skipWaiting();
});

// Activate & Cleanup Old Caches
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
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});

// Handle Manual Push Notifications (still works if triggered)
self.addEventListener("push", (event) => {
  const data = event.data ? event.data.text() : "🔔 New Notification!";
  event.waitUntil(
    self.registration.showNotification("PWA Notifications", {
      body: data,
      icon: "icons/s.png"
    })
  );
});

// 🟢 Automatic Notifications — every 30 seconds
setInterval(() => {
  self.registration.showNotification("⏰ Reminder!", {
    body: "This is an automatic notification 🚀",
    icon: "icons/s.png"
  });
}, 30000);
