import { precacheAndRoute } from 'workbox-precaching';
import { clientsClaim } from 'workbox-core';

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

clientsClaim();

// Precache files. The __WB_MANIFEST will be replaced by Workbox CLI with the actual precache manifest.
precacheAndRoute(self.__WB_MANIFEST);