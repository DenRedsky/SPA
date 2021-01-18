import React from 'react';

const MainBundle = React.lazy(() => import(
  /* webpackChunkName: 'main' */
  /* webpackPrefetch: 10 */
  './main'
));

export default () => (
  <React.Suspense fallback={ null }>
    <MainBundle />
  </React.Suspense>
);
