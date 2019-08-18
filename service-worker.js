---
---

importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([
  {
    "url": "assets/css/style.css",
    "revision": "7ae2686727899de1c788d0122bbeaf6a"
  },
  {
    "url": "css/rules.css",
    "revision": "eeccf35739c4990da5d43ee40c69571e"
  },
  {
    "url": "css/style.css",
    "revision": "80d32f6686e977e9093a34bb6cced4c7"
  },
  {
    "url": "index.html",
    "revision": "a4b81b90b7c69e9e50f9a7798f175baf"
  },
  {
    "url": "js/script.js",
    "revision": "794f955dcb6170f584ed963c94cbddcb"
  },
  {
    "url": "manifest.json",
    "revision": "a89daf3806c9518eb50b8a0c227fb76a"
  },
  {
    "url": "rules.html",
    "revision": "b39344b30b656c9bdae5228b6c2f9850"
  },
  {
    "url": "img/en_flag.svg",
    "revision": "2e9c71c7514c4036f0122b1bdc202c17"
  },
  {
    "url": "img/si_flag.svg",
    "revision": "c7f8bb0d07a3e1a92d9374be4bab1192"
  }
]);

// Cache all images for 30 days
workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|webp|svg)$/,
  new workbox.strategies.CacheFirst({
    cacheName: 'images',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60,
      }),
    ],
  })
);

// Cache the Google Fonts stylesheets with a stale-while-revalidate strategy.
workbox.routing.registerRoute(
  /^https:\/\/fonts\.googleapis\.com/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'google-fonts-stylesheets',
  })
);

// Cache the underlying font files with a cache-first strategy for 1 year.
workbox.routing.registerRoute(
  /^https:\/\/fonts\.gstatic\.com/,
  new workbox.strategies.CacheFirst({
    cacheName: 'google-fonts-webfonts',
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200],
      }),
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
        maxEntries: 30,
      }),
    ],
  })
);
