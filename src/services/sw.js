/* global ENV */

import { ROUTE_PATH } from 'constants';

export default function sw() {
  if (('serviceWorker' in navigator) && ENV !== 'dev') {
    window.addEventListener('load', () => navigator.serviceWorker.register(`${ ROUTE_PATH }/service-worker.js`)
      .then(registration => console.info('SW registered: ', registration))
      .catch(registrationError => console.warn('SW registration failed: ', registrationError)));
  }
}
