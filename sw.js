const CACHE='figi-mobile-neon-20261028-static-v2';const ASSETS=['./','./index.html','./Figi_Mobile.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./figi_neon_3.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('figi-mobile-neon-20261028-static-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||new URL(e.request.url).origin!==self.location.origin)return;e.respondWith(caches.match(e.request).then(res=>res||fetch(e.request))) });
