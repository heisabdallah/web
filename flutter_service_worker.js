'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "967739854995b4aec6608428ec04a2c2",
"index.html": "a70be5f7e725fe88aa6c8124ac1d2353",
"/": "a70be5f7e725fe88aa6c8124ac1d2353",
"main.dart.js": "73e84d5aba9b3592c0066359674ad42d",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "6c38b73650a9fddab40f0d414dc0c256",
"icons/Icon-192.png": "977b5eaa5527057a97903cd18b760a63",
"icons/Icon-maskable-192.png": "977b5eaa5527057a97903cd18b760a63",
"icons/Icon-maskable-512.png": "13cb005b28e4a18682d12c9aacef29eb",
"icons/Icon-512.png": "13cb005b28e4a18682d12c9aacef29eb",
"manifest.json": "c68d13e30ced4fa92b05ddb679ad0b79",
".git/config": "ed79fdc2b9e045461ce1af0e5c123f60",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/04/54635dc09cbad8fb345a44e0ffa53b6aced6fd": "40c96988f44760814f409d5bc5dee606",
".git/objects/6a/7b02e2bbd231448d4cbbb03f18b61a0f449ea8": "5a1e95997189f5c856582f2208b49243",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/58/ab4b215ee2dd0b72b686c1d8ec0eeefec817b6": "bf0b7eeb3a86d5e7a81c4e9860b2ae4b",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/93/9d4595e52c4671f7e1f4362d63605a1f906f0c": "eaca4ded87df1b5f1916dfda239bf385",
".git/objects/94/ac79d6e4c1599ce44f210c8f61e3687c461a0c": "36508b6da92d76605d3f2b206000ac99",
".git/objects/60/8bb6288f3e3545650536fd0ec3b6c0da273b97": "3fd0f2a1c0d0b61141cb1e7329b93814",
".git/objects/5a/c4ada2d65ffbe080f3d1765a39ff237f033ef9": "4ce4283121c82be3a22db3764c073806",
".git/objects/b5/b79a1681e703c4750a49a99218f3ef0ff8a4a5": "1c2e477be897f9dafa8ce5a8e8da295a",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/b3/50a95afb3563074bc8468b68516b4d48bf543d": "bf7dc2ee149f7196456c42755a5df99b",
".git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
".git/objects/a5/8131ebc983e3c2d12f0f4b734dd0a57da406dc": "0ef0111fa3ae640bfe4c7a23718facb2",
".git/objects/ae/85d5f5a7f8729322c0e35257a83f67ce3486b3": "221059dce85f224bbbbc6ec01ecda3b4",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/c7/e3878a516d9a5647365aac05a1274629feb562": "8abbca85087dc1341d244885210a2d5f",
".git/objects/c9/a02ef5d107bcb57c2881e25e7b5398d7c60f71": "67f4f2290530e0e3b1cca82840a32322",
".git/objects/fc/16de5bb338c5acc178cfdc444a4956087dd6be": "9b25bc98894e2d04e3b7c94fd864aab1",
".git/objects/80/65b060953109dd11c7a494040767229eca5dbd": "04d7a9f5af7fb0887141b2ed8f918b99",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/4c/e961ea80fa40ee725ce30a04641e3e86e2f619": "dd2e25bc72c7a95013068761f2d83861",
".git/objects/00/aeef72a2b3bb4f49f7ebac375271a66ff93380": "8d6a909fe62366f53a80e341db54785b",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/3a/8fe626d5328d8de63a8e5a3c903ed87f803455": "7502066867dcb49df45b96432eb65cfd",
".git/objects/37/3981311cd60d8c8399be8a762c0fd7c8578494": "dc65b6c17f58de624dcba6602041e151",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/6c/2efd22a94feedef73b412e25f338f2c0b8735a": "5f734936da8028ed4d964a2bbf62ca13",
".git/objects/99/fe40e4cc130b174c8cab7547acf4bf74898b89": "40f5d8d0334a21f35667c73b2a5845b0",
".git/objects/52/4e7b49ddf69bf44fd405f92e9325d927f4fd2a": "4bc82a27a1ae785e4591ecc807760974",
".git/objects/0a/bf172faee6a683c37baedfabc500a80cd30a65": "3577ea1c4684da5ddc8984d363f4bbaf",
".git/objects/90/be89081854d21d934fa600cd457b119b188836": "1b9293ce77c80cb406f36e85241adf97",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/aa/5a5f9c1c26ea54b3f4471c5f8f5b655620c5b8": "84f34c47b35175413cd32076c7a98de1",
".git/objects/b0/bba59b38ce570a5e3f118c459ab59de7a94fb6": "7ca33aee5d5b8783fb76fdf3ab04c9c1",
".git/objects/a1/5791a297421883333be5981053129b7e62bf5e": "31f69a83e55421b9488472b31707b9e8",
".git/objects/f7/351d7a14d7ad5615f7d6fcd8f9121726cd35cd": "4b4740087564c45dec85556b1eefd6c7",
".git/objects/f1/efd1f950a709fab2e4a09e839078b31fbaa5c0": "b9d21730c9124bd039732f484d7739aa",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/e0/18be956c77e05decd3b3db37309aa5fa68dd4a": "1856f04b4904b1c99ddb5094b489103d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/1e/a95ce6e6c8b2e669e243074fbc48671be9a55a": "208959ea37b8f25685ba12c81ec08c98",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/24/afca917c31511e78d8adc5bc1c778fda42a729": "b8c6136b3148ae00eb1ca536cb6494f4",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/25/2b9019faa8f6e7ef2fe09c7cc94b0efcf41be4": "9dc5def24df2c972a02c327179e5222f",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b3e3a7aca36b03c7f445ffbb57f9fb36",
".git/logs/refs/heads/main": "b3e3a7aca36b03c7f445ffbb57f9fb36",
".git/logs/refs/remotes/origin/HEAD": "24027f964e3c06799e8ab06698d132c6",
".git/logs/refs/remotes/origin/main": "385e21bdef32b4abf596a578ec6ee1fb",
".git/description": "2acd09b29bb283caae7e9a440a744486",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "b3e2e53b88d6400e3f7aca4624e43270",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "b3e2e53b88d6400e3f7aca4624e43270",
".git/index": "886547608aa4a4b34aba3f2f8cb71ac2",
".git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
".git/FETCH_HEAD": "13aa691f0c336857244be793f9ad08ab",
"assets/AssetManifest.json": "87512c4e78e0bd212d869bf2522f882d",
"assets/NOTICES": "57ccc7a11a0762eabf85ae95756a6c4c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/lib/models/exercise_model.dart": "15836d14eb779c13aa7096101dc5810d",
"assets/AssetManifest.bin": "2d453b65b0cc37adeb5d96ba71f6f089",
"assets/fonts/MaterialIcons-Regular.otf": "b54bfe2014a5eb74730f6bf7b355f699",
"assets/assets/images/cat.jpg": "ebe03a456caf39141964084ab10ea850",
"assets/assets/images/mountains.jpg": "773623a26e674e5c61aee7e60fece637",
"assets/assets/images/4.jpg": "56b8ec3674770ba32e8b6bc14650654f",
"assets/assets/images/6.jpg": "a2b824e7cf58b3485804919c6c8bf63c",
"assets/assets/images/2.jpg": "dfcfc8a8ed52e4aece7efd9d50111250",
"assets/assets/images/3.jpg": "2bbb3da2c2ada829efb846b3395b98ba",
"assets/assets/images/1.jpg": "59fb19771262f4987186ef88cb86ee8e",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
