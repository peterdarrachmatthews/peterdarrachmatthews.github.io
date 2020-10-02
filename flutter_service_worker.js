'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "2d94acbebd01f05075650a4f29547469",
".git/config": "dd40b1d77b193e56991f894661519dc9",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "cc0e8de482056167140c495588589d57",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8d70fb58d0cd67900d93fc1a91d39944",
".git/logs/refs/heads/master": "8d70fb58d0cd67900d93fc1a91d39944",
".git/objects/02/dd422cfdad2c491f10d8e71a961de188e40564": "63484fcbe061539a13cc992878b06c9c",
".git/objects/0e/3082f70754fbcdce44125a9ddbc282a0c95075": "6e41f45fb5b309cde3979f85ecf4be7a",
".git/objects/0e/e3ce727abe332ebe77b27322126eefd79bf8a4": "57c5ae574017eb4c6c78925e110acf94",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/17/e26407d29125033e952bb6e2dcb4b9ea4808e2": "1eef2f90dff8ef754c98981991069d3d",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/28/d37c7b07fd9237ff5a80f7ba37cc298ff94a32": "2083e9dfcc861bdf4d4721518ad09942",
".git/objects/29/5ad4712bbeb17e683c576586e6401038e626e2": "1aefa29d6c14753bd8219c8d26e28efc",
".git/objects/2d/afaec1affdf12d5225d40c859f74de55e755cd": "3c8dcd92a7e76dd140abc151c58f865d",
".git/objects/2f/ede68225560d46a526f50668d9aa1b2067f498": "6fc0741990c89aafd2e6efc5d1a7b1a7",
".git/objects/35/e4cf75ac42df203aa49a325efab12908d0be03": "743f2a3b673225500b72559b4de8e394",
".git/objects/3b/031fd4c79fe936a94da824bc5d0d605dc937b4": "143487524b9c72cec36b1f33e9594c92",
".git/objects/42/512f208b6177e6eadf55ff9567ec8ee28bc11e": "899836354e594ac7264952944a85e12d",
".git/objects/44/4289fd917516463ea0a0b830cf94527daa0d9d": "eccf8c87a8d4bbafc120bdca81ff61ae",
".git/objects/45/4ce4b40a386c97829f10e1c75025e42115bc8c": "9563962654e737b79b1858b750dd9582",
".git/objects/4c/02c3178f648db6761c2191adfe15747fbbeb5a": "971e77c11a30cbd31ae6abc9bd4ea8a6",
".git/objects/4e/e8f14c38345112b08b51935b5088b69d2b253b": "a6af2899cfd5b6d7258241426888a969",
".git/objects/50/502ccbd864f97b19c953c7843c6efad9f163f0": "7b8d42f8b2354b46069b75f37f116e82",
".git/objects/57/2c2139ac5b35b4e6e22b00fc7df2b2a1acbb0a": "3bd61d67e53fe6058a1661a91cb0ac41",
".git/objects/66/8d791b4070fe69032ff11ca5c53eecb7e982af": "35b85a5517907317f972d93620d840df",
".git/objects/67/57978198f755438b8d6abb558c3faed5b96781": "971b887d471afcbe35c6b4896bc1875b",
".git/objects/6b/4c2c4a6c6f8e6b3dd11138bf2d09bf4ff0dc2f": "0291c7d8af5b0efce4b35683d03b17cd",
".git/objects/73/709117a8a00df918b7c320a6886da4142b0b0b": "14055971314a787961ebd2b7ff81a351",
".git/objects/73/fc6003ecd6f46793c5912515e2f3d6c38114fe": "364b6e3f28765593d2f121024fee967c",
".git/objects/77/34ae6f56c0586a1e849f6f4c0b4bed25e85b27": "ae5023e331bc86c70f4a4af5bf2110b8",
".git/objects/7a/9284ac4daf5ed1889f2d8c5dff69757fff8af4": "0cfa3dc3195e7b1c5137853b091fc583",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/84/484a53683976aafb3ea015dbe74884c4dedf8c": "1e9c541e4d8fc031e4a8fd8ba6fc4096",
".git/objects/84/abb02bdbea9c4a9e43290e5b349eba7aa32f38": "cd53b1283005e626faf98e09e7b78ae7",
".git/objects/88/308111c104300c14015b143326362e8f3bf1d8": "cc6bd2789a7c2503c835a60efeeea749",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/9341e163a9114a720145c53e90c8e7b13cb601": "2f78c266482b81791f1a91a47d70e65b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/94/2ef985d8a74c0e08e63d3fe5e2263b05ba1e13": "ea555dbb5d3737c27e7f1a8ab44314af",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/98/62b8c6c3d5daa2bf9448fb673d9356ab97c895": "b008630aa02f61d807c3427e1748ea0c",
".git/objects/9e/246c51bf3ff648a7fbc4e4a40e64b54f841f97": "fbbef3b1adbc7fe2cb44ca5cbd0a8e3a",
".git/objects/a2/7895fff0bb5bcb9fc96f36564c1063b31e7531": "8e46d154c5e780ee70e1b3f14b01e9e6",
".git/objects/a6/ffdfcfef00380b2710f6051c64edd31eacea9f": "01694c04d6d22fb631fa9eab1f96f141",
".git/objects/a8/f0d4c8837132c8d892d7b6b64c7d7bfc806c6e": "35406fa57b933707e90758386ca1a109",
".git/objects/ad/56a9f3498a83b26afdee866dde22bbfa5d7d23": "88013fca724a9d93ca146f82a49a33fd",
".git/objects/b6/44b1f37ce7eb800be33dd732b8e67d1bb7989a": "0073b4e74487f169ff110fe7b5cb740d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c6/d92f539d8ee01d7cddbc7afceeaea258986663": "55c8549e05e1cb0db75622d535b23fb1",
".git/objects/c7/5098b91ed19243c236f4b3817427d8991b7784": "d8edeb92f35d386a9928a09607bbbbda",
".git/objects/ca/806ea31366c0ae21f4c5b347c8db24e3493fd5": "5973f8d070932a6014041b0b97e8ae94",
".git/objects/ce/bbc401974c1b230b11066d50ed77c68473524d": "0e26ecd202e1e034d83803a842c7ed4d",
".git/objects/d0/a5912947ceb27505c2661b95b18352688a4b73": "5c7526ce1c2c2423ec7c6459cc90b530",
".git/objects/d1/8b41e8132f14c7b2a8949c4aafae891b96a86a": "136ff877e2536e8d965d63016a671850",
".git/objects/d3/326657ced66f7449c1bc2aad90ab5acc54ef4a": "606292b1e0e70c69737f9fe77a4e8f86",
".git/objects/dd/17690486fe0682f65715f18326b840ab57780a": "f74d8ce33213ee6436201fbb410f243c",
".git/objects/e2/2469b74b8f876a3dbd73c115706e1363e71869": "a5125fdcf588549b9d71d9a9dc172174",
".git/objects/e5/84bcb652c99c299347c77b9d9cda07a1fa92a7": "6a1373eaa82d5daac7275955e8f9709c",
".git/objects/ea/d6b9cfa451b570d288a6eba23ed36fd4d88108": "d93c9e68a73070ac526f646e3c466faf",
".git/objects/ec/5b370189c4c30de6980365b6449255a68ad2ce": "970b6fdcc00fc22eaf63b688128fa2b4",
".git/objects/ed/1e6138bba8e418c77fbc11190e50eae918cd93": "cf4457caa4a075f6652e01b518e4f2e0",
".git/objects/ef/7b81d44ce463fbd51782e1801069fda59ecf89": "8a55a2a63d221861ae7f92abfd536047",
".git/objects/f8/c1df1b051dd0ba55298306ce97032ca8200ed4": "c6dfb833c96e178dad8948c5cee92f58",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/fc/58ca38fd16791d68e392caeada2ef94edb7d9b": "1ea9f315868aa599b262dc7bd8beb584",
".git/objects/ff/7f08af34127cda1724f4e71a7ed31de0b86c5b": "43f4722322e1bcae3e3dd77c9866d4b8",
".git/ORIG_HEAD": "b3e2d64073e4309368672d5b66610037",
".git/refs/heads/master": "feda783a94c13a2f344f405cd001a761",
"assets/AssetManifest.json": "9744e16bf1ca2b7dffb30b6746d8a582",
"assets/FontManifest.json": "62c02e4b94f662a16e991f16314abf84",
"assets/fonts/Calibri-Italic.ttf": "aff043d440c38fcd00de4aa8e4ab94cf",
"assets/fonts/Calibri-Regular.ttf": "5d7c31b284ddb01fc1cbae0edc9ec210",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/NOTICES": "53597e0b7f3e4bbe237939e3a037493c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "a3254f0bb95f5275c86358645fce38ff",
"/": "a3254f0bb95f5275c86358645fce38ff",
"main.dart.js": "3fc050611b479c941289c82cb8a6d076",
"manifest.json": "6faef745a1f646982dbcc8130a730c97"
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
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
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
    return self.skipWaiting();
  }

  if (event.message === 'downloadOffline') {
    downloadOffline();
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
