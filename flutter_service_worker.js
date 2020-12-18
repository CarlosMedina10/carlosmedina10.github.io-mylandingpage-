'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "62e7973065a037a65b3ebfb8d6619be9",
"assets/FontManifest.json": "3ee9f0ca9fc3f340d8986145d82ea462",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/images/1-min.jpg": "082e6d5cb62fd8b90f69bea70eec8c53",
"assets/images/1.png": "7ef9029b8999366033fbf76fcb8f6380",
"assets/images/2-min.jpg": "5101cd086013f719984e32e522042922",
"assets/images/2.png": "f73db5a6ab3aea8ad6331fca71088a32",
"assets/images/3-min.jpg": "3a2cf7d97d489924db29700f3dfc279a",
"assets/images/3.png": "46c19ba5fa3d35ccd30b727109aef9fb",
"assets/images/4-min.jpg": "2aa6016532ff6b14601a070adc700a25",
"assets/images/4.png": "d0d392227998520aa823db10d6c5e3af",
"assets/images/5-min.jpg": "febc7ecc434441008592c64ba86d756d",
"assets/images/6-min.jpg": "453da3800ca36fcc5c6801e19d29eacf",
"assets/images/7-min.jpg": "9529daa90715a3f801ad61dbfbf0ac1a",
"assets/images/8-min.jpg": "de9d41cb249973f516e531633e660523",
"assets/images/B99A0068.JPG": "287120a5b0a13e4b16cb42fc7c2bec3a",
"assets/images/Conocenos.png": "62db13c7510024494a05b941e7263108",
"assets/images/Conocenos2.png": "f17d1dcfc9a391dd672c0fe2bd24aebf",
"assets/images/Dise%25C3%25B1oFondo.png": "8bc61e02b8f2296be9903ae6d4680e5f",
"assets/images/Dise%25C3%25B1oFondo2.png": "0be990b248abf477aa35dc335ce5ef3b",
"assets/images/ImagenApp.png": "10d0f789c4e5a4ce37be28d9ed508380",
"assets/images/images/pic1.png": "c10e560f7bcb46d1d3469f0f44bce467",
"assets/images/images/pic2.jfif": "efec7cab3c86f19f0fe94596f11032f4",
"assets/images/images/pic3.jfif": "8e40c9ea21a0f6425e7fe5291d0b575f",
"assets/images/images/pic4.jfif": "2149b7b68ec45a734415bc339f316e47",
"assets/images/images/pic5.jfif": "73cb0d7841ffbc1789941b262a03c56b",
"assets/images/images/pic6.jfif": "895b30bffa5abb7487d6290ba588fe86",
"assets/images/images/pic7.jfif": "6f9e27183a1714835ffa5178965e97db",
"assets/images/images/pic8.jfif": "27110ca2968ea2fa4e8cde2c88d491f7",
"assets/images/images/pic9.jfif": "d96215b02e4b77a44f2e765ab5a303f7",
"assets/images/LogoEntrenaAppFondoNegro.png": "059b5490b22e917f92417aa53b9afbde",
"assets/images/pic1.png": "c10e560f7bcb46d1d3469f0f44bce467",
"assets/images/pic2.jfif": "efec7cab3c86f19f0fe94596f11032f4",
"assets/images/pic3.jfif": "8e40c9ea21a0f6425e7fe5291d0b575f",
"assets/images/pic4.jfif": "2149b7b68ec45a734415bc339f316e47",
"assets/images/pic5.jfif": "73cb0d7841ffbc1789941b262a03c56b",
"assets/images/pic6.jfif": "895b30bffa5abb7487d6290ba588fe86",
"assets/images/pic7.jfif": "6f9e27183a1714835ffa5178965e97db",
"assets/images/pic8.jfif": "27110ca2968ea2fa4e8cde2c88d491f7",
"assets/images/pic9.jfif": "d96215b02e4b77a44f2e765ab5a303f7",
"assets/images/R1.PNG": "f1b40ce734c9ecef39589c7167df9a4e",
"assets/images/R2.PNG": "adbd113877c227f5db68d99d279e5abb",
"assets/images/R3.PNG": "ed9050940351291ee220e880a0a092e1",
"assets/images/R4.PNG": "43ac7248f032c121f395c074421435c1",
"assets/images/R5.PNG": "50594d3c452777dca3fd13f36a2576aa",
"assets/images/R6.PNG": "a0c70d43b38ad9ff8057b1fb355cd2d5",
"assets/images/R7.PNG": "6663d4f4bebd774930008229308fae38",
"assets/images/R8.PNG": "066b290a483282300484536bee1ed937",
"assets/images/R9.PNG": "cb5f6c25bd3508c74d6083eddb737851",
"assets/images/_DSC4000.jpg": "fb8494b8f94a7d3771d9597fd6c267ec",
"assets/NOTICES": "f1495d5f93efea9eac8f5e6a29485f20",
"assets/packages/community_material_icon/fonts/materialdesignicons-webfont.ttf": "b0fd91bb29dcb296a9a37f8bda0a2d85",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "14f7f70cfe14393c45de97ffbc3a13ca",
"/": "14f7f70cfe14393c45de97ffbc3a13ca",
"main.dart.js": "d2f319621362c37ecb9fa8590b39cf81",
"manifest.json": "0089411bc5b774df64a88856498b670a",
"version.json": "4504cc183d33f949e922095d705197ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
