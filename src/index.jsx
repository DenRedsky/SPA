import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { RouterProvider, useRoute } from 'react-router5';
import { polyfills, sw } from 'services';

import store from './store';
import { router, PAGES } from './router';

import Main from './pages/main';
import About from './pages/about';

import './globalStyles';

sw();
polyfills();

function App() {
  const { route } = useRoute();

  if (route.name === PAGES.ABOUT) {
    return <About />;
  }

  return <Main />;
}

ReactDOM.render(
  <Provider store={ store }>
    <RouterProvider router={ router }>
      <App />
    </RouterProvider>
  </Provider>,
  document.getElementById('app')
);

if (process.env.NODE_ENV !== 'production') {
  module?.hot?.accept();
}
