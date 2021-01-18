import React from 'react';

const AboutBundle = React.lazy(() => import(
  /* webpackChunkName: 'about' */
  /* webpackPrefetch: 1 */
  './about'
));

export default () => (
  <React.Suspense fallback={ null }>
    <AboutBundle />
  </React.Suspense>
);
