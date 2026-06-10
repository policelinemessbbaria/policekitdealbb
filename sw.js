const CACHE_NAME = 'police-phonebook-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

// ইনস্টল এবং ফাইল ক্যাশে করা
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// অফলাইনে ফাইলগুলো ডাটাবেস থেকে দেখানো
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      return cachedResponse || fetch(e.request);
    })
  );
});
