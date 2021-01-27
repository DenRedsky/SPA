import { StaleWhileRevalidate } from 'workbox-strategies';
import { offlineFallback } from 'workbox-recipes';
import { registerRoute } from 'workbox-routing';
import { precacheAndRoute } from 'workbox-precaching';
import { skipWaiting, clientsClaim } from 'workbox-core';

skipWaiting();
clientsClaim();

// eslint-disable-next-line no-restricted-globals
precacheAndRoute(self.__WB_MANIFEST);

registerRoute(/https:\/\/jsonplaceholder.typicode.com/, new StaleWhileRevalidate());

offlineFallback();
