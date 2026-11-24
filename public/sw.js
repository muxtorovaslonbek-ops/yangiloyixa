const CACHE_VERSION = "eduuni-pwa-v1";
const STATIC_CACHE = `${CACHE_VERSION}-static`;
const RUNTIME_CACHE = `${CACHE_VERSION}-runtime`;

const CORE_PRECACHE_URLS = [
  "/",
  "/manifest.json",
  "/favicon.svg",
  "/favicon.ico",
  "/apple-touch-icon.png",
  "/pwa-192x192.png",
  "/pwa-512x512.png",
  "/pwa-maskable-512x512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(STATIC_CACHE)
      .then((cache) => cache.addAll(CORE_PRECACHE_URLS))
      .catch(() => undefined)
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key !== STATIC_CACHE && key !== RUNTIME_CACHE)
            .map((key) => caches.delete(key)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;

  // Only handle GET requests and bypass Range requests (video/audio/PDF streaming)
  if (request.method !== "GET" || request.headers.has("range")) {
    return;
  }

  const url = new URL(request.url);

  // Skip unsupported schemes (chrome-extension:, data:, etc.)
  if (url.protocol !== "http:" && url.protocol !== "https:") {
    return;
  }

  // Skip large media streams (.mp4/.webm/.mp3) to avoid filling cache quota
  if (/\.(mp4|webm|ogg|mp3|wav)$/i.test(url.pathname)) {
    return;
  }

  // 1. HTML navigation requests: Network-First with cached app-shell fallback
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response && response.ok) {
            const copy = response.clone();
            caches.open(STATIC_CACHE).then((cache) => cache.put("/", copy)).catch(() => undefined);
          }
          return response;
        })
        .catch(async () => {
          const cached = await caches.match(request);
          if (cached) return cached;
          return (await caches.match("/")) || new Response("Offline", { status: 503 });
        }),
    );
    return;
  }

  // 2. Google Fonts: Cache-First
  if (
    url.hostname === "fonts.googleapis.com" ||
    url.hostname === "fonts.gstatic.com"
  ) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached;
        return fetch(request).then((response) => {
          if (response && (response.ok || response.type === "opaque")) {
            const copy = response.clone();
            caches.open(RUNTIME_CACHE).then((cache) => cache.put(request, copy)).catch(() => undefined);
          }
          return response;
        });
      }),
    );
    return;
  }

  // 3. Same-origin static assets (JS, CSS, images, icons, JSON corpus): Stale-While-Revalidate
  if (
    url.origin === self.location.origin &&
    /\.(js|mjs|css|png|jpg|jpeg|webp|svg|ico|woff2?|json)$/i.test(url.pathname)
  ) {
    event.respondWith(
      caches.match(request).then((cached) => {
        const networkFetch = fetch(request)
          .then((response) => {
            if (response && response.ok) {
              const copy = response.clone();
              caches.open(RUNTIME_CACHE).then((cache) => cache.put(request, copy)).catch(() => undefined);
            }
            return response;
          })
          .catch(() => cached);

        return cached || networkFetch;
      }),
    );
  }
});
