/* eslint-disable no-restricted-globals */
import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

// Precache all of the assets generated by the build process.
// Their URLs are injected into the manifest variable below.
precacheAndRoute(self.__WB_MANIFEST);

// Set up a StaleWhileRevalidate strategy for all other requests.
registerRoute(
  ({ request }) => true,
  new StaleWhileRevalidate()
); 