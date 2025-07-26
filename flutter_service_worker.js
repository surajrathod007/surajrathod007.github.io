'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"android-chrome-192x192.png": "0809ea5f17a7337526fc9e59ab21f63a",
"android-chrome-512x512.png": "d2a6c1524e3ce358d2b4b48ee6f6c738",
"apple-touch-icon.png": "1443d430cae03355e81777153e3debd2",
"assets/AssetManifest.bin": "5975d02bef79202aa830355a40868418",
"assets/AssetManifest.bin.json": "54720e38247e1a1dfa6cd4e4c0610002",
"assets/AssetManifest.json": "d51b4c1fd59bf335c47d79562a575fbb",
"assets/assets/fonts/EBGaramond-Regular.ttf": "f8a5f8a90eb3d8a867293e2a965540d0",
"assets/assets/fonts/OpenSauceOne-Light.ttf": "65ed7bc92b2fcc77bd219914d1493bac",
"assets/assets/icons/about_me_filled.png": "c307c927678a74a79c63d8dcf39a8781",
"assets/assets/icons/android.png": "b6ff1cba1afce07b699bdc5c2399ce5d",
"assets/assets/icons/contact.png": "63b8b3d42442fc19dee8cbea5f23f129",
"assets/assets/icons/email.png": "775dfe7f630b37076c29d0e16e21ffcf",
"assets/assets/icons/file_sharing.png": "6e31309c76effa8bbc45ab545e53fc43",
"assets/assets/icons/firestore.png": "1dc03535900f97d9b3ab80359cd952d0",
"assets/assets/icons/flutter_logo.png": "e1dacf68c8e19e3d28ae7f678e75e7cc",
"assets/assets/icons/github.png": "3d4c7482f267f5accbb7461766f3f790",
"assets/assets/icons/google_play.png": "dc6d34239efe6e011b684db3a8376c9b",
"assets/assets/icons/jetpack_compose.png": "64c5b107c9d27df9975b934cddca2e81",
"assets/assets/icons/kalyani_icon_black.png": "5acfc80e3e4ff264818745c907b3c5db",
"assets/assets/icons/ktor.png": "4c72be6bc52165ae4c1f7a9decf9b8d0",
"assets/assets/icons/linkedin.png": "d604727cedcd27fcc981ffdb1f318a66",
"assets/assets/icons/local_buddy.png": "41d56e5dbabf2f3ef66b6765896021a9",
"assets/assets/icons/love.png": "5a5fb0d693d41ac6bba95243fcb7bafd",
"assets/assets/icons/mann.png": "22b9f54190f6484eebd7c4e964c850c3",
"assets/assets/icons/postgress.png": "4b14fafa02e83ea1aaace843c24963a4",
"assets/assets/icons/projects.png": "8a143b80da49dac779573004ff3c0025",
"assets/assets/icons/routa.png": "629b158f99d3eb1000564d889b0a1c32",
"assets/assets/icons/sculptsoft_logo.jpg": "433a6c6ef2f3a59fa9e9e40a2dac518f",
"assets/assets/icons/skandika.png": "fda9fe6c37054576d03538b267f5300b",
"assets/assets/icons/slider.png": "7bfac2ff56e6605284cedfd8de5ce04f",
"assets/assets/icons/typescript.png": "6f359042b48abfd5168bd46b78a79899",
"assets/assets/icons/vsi.png": "6338fba43e2f52eca56425a5f43a5a02",
"assets/assets/icons/work.png": "2af4f231a72bbae3434e32fe1aaa0157",
"assets/assets/images/suraj.jpg": "a3a46aeed24cb04ca6e67034902c208c",
"assets/FontManifest.json": "c7619d640e7121bc716d73471ea7fd2c",
"assets/fonts/Doner-MediumText.otf": "7c1bf162449ec67a6e7349dc8bc23ac6",
"assets/fonts/Doner-RegularText.otf": "6e312fb01bcb36d35ae2a5ce2ddff0b5",
"assets/fonts/Doner-SemiBoldText.otf": "ff9aaccbcc3a13b7a120e2b38065fd4f",
"assets/fonts/Gotham-Bold.otf": "92ab8603f1cd43d0de15482236890449",
"assets/fonts/gothamBook.otf": "6f8eacd611b2414da7d46d7fba0b02e8",
"assets/fonts/gothamLight.otf": "abecb72d9dfe0232c072f0e0f95c4dec",
"assets/fonts/gothamMedium.otf": "39b5ff14a54114e9ae92136578a0e2d3",
"assets/fonts/MaterialIcons-Regular.otf": "dd8d2f4f483938452ed69c651b88ebab",
"assets/fonts/suraj_icons.otf": "eb14445a7103c8b0763430532b5d761d",
"assets/loading.json": "9a2a3b17402e1dd4c11ab6c9c37cb5dc",
"assets/mainLoader.lottie": "e61d196517c8aa6d65181e027cfb8bf5",
"assets/NOTICES": "98aace3de90f68420bcb17a48aac69a4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/video/slider_demo.mp4": "84bd562800966c59b3a0577d603e53ad",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon-16x16.png": "06f907ae3f88d34146414fb5ce743ec8",
"favicon-32x32.png": "65c7ff5ff38a1953205f5559fcd3a393",
"favicon.ico": "b193e9d2afcbe9124d7a3bdea624f785",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "b15d961fb10d7a525968554c6b326083",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ca0deb221aab398eabf896ee39eb0140",
"/": "ca0deb221aab398eabf896ee39eb0140",
"main.dart.js": "fc489ce7c9b49985ec1b9d4400c5cb60",
"manifest.json": "d97634842653460dc35e94bc05ee6e0c",
"site.webmanifest": "053100cb84a50d2ae7f5492f7dd7f25e",
"version.json": "c6d067c614ef21921654b36de18235f2"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
  for (var resourceKey of Object.keys(RESOURCES)) {
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
