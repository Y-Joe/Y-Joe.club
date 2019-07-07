/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "337e75d292d12bcc073672d6a1ed2c7d"
  },
  {
    "url": "accumulate/index.html",
    "revision": "42ba98afff17e09e44be7376daffa2b2"
  },
  {
    "url": "algorithm/index.html",
    "revision": "b630803bb2cb67f72aa0a0986e281f5d"
  },
  {
    "url": "assets/css/0.styles.47b1b307.css",
    "revision": "9bb6b9f88c684f84f2eb3ace755e382e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.98367a11.js",
    "revision": "b9e64e4b8bcf6f277589f527a33a03f9"
  },
  {
    "url": "assets/js/11.8c1efc73.js",
    "revision": "a5b13f92d1145ad037fc4670c5aaedab"
  },
  {
    "url": "assets/js/2.57cf611f.js",
    "revision": "ac3c07dd1687b332f8d66d63c115fd6c"
  },
  {
    "url": "assets/js/3.0f7cbb0c.js",
    "revision": "0de56dd325a3b21aea5a600b7916d0e1"
  },
  {
    "url": "assets/js/4.b7afb31f.js",
    "revision": "4011a70c75518da2abe7f5cdc0257077"
  },
  {
    "url": "assets/js/5.d8d508ff.js",
    "revision": "e0425890d51fde3e96bf1ebe91d19b71"
  },
  {
    "url": "assets/js/6.3251a4de.js",
    "revision": "5d136b5ce1b3eb29a5c8dc4d2ce01b0e"
  },
  {
    "url": "assets/js/7.c89bb309.js",
    "revision": "c2de218eb95559c8727456038b0cbd0e"
  },
  {
    "url": "assets/js/8.111f514d.js",
    "revision": "352ec6c41e08e95fa1bdc1654429a822"
  },
  {
    "url": "assets/js/9.7a1d011e.js",
    "revision": "c4ddba22eabd9a445e2e6c9c896f5ec5"
  },
  {
    "url": "assets/js/app.4eac6ec9.js",
    "revision": "640cebe1d5b33a6c8b58581ac81573a9"
  },
  {
    "url": "guide.html",
    "revision": "2081ac3c85ec870046668177fe1f7ac3"
  },
  {
    "url": "images/photo.jpg",
    "revision": "b5415f60ad178999e0d83dbefd4441fa"
  },
  {
    "url": "images/wx.jpg",
    "revision": "744af56983dd0517378a88e27a62bfee"
  },
  {
    "url": "index.html",
    "revision": "9241f40ec62392c73d492dacf7c49fc6"
  },
  {
    "url": "others/index.html",
    "revision": "5a2e443463f2bcf0ca90eb4fa2b20e96"
  },
  {
    "url": "project/index.html",
    "revision": "c2e50d99ac50b8084f0a3dad2557bfc7"
  },
  {
    "url": "Untitled.html",
    "revision": "714345eccf2d1b3f4ebe9428bf04f8b5"
  },
  {
    "url": "wx/index.html",
    "revision": "c4be13d0639fc57abe16e2e51e85379c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
