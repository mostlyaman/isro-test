const staticDevCoffee = "leaflet_map-v1"
const assets = [
  "/",
  "/index.html",
  "/styles.css",
  "/main.js",
  "/icon.png",
  "/node_modules/leaflet/dist/leaflet.js",
  "/node_modules/jszip/dist/jszip.min.js",
  "/node_modules/leaflet-omnivore/leaflet-omnivore.min.js",
  "/node_modules/shpjs/dist/shp.js",
  "/node_modules/togeojson/togeojson.js",
  "https://api.mapbox.com/mapbox.js/plugins/leaflet-image/v0.0.4/leaflet-image.js",
  "https://html2canvas.hertzen.com/dist/html2canvas.min.js"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})