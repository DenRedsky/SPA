import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { RouterProvider, useRoute } from 'react-router5';
import { polyfills } from 'services';

import store from './store';
import { router, PAGES } from './router';

import Main from './pages/main';
import About from './pages/about';

import './globalStyles';

polyfills();

function App() {
  const { route } = useRoute();

  if (route.name === PAGES.ABOUT) {
    return <About />;
  }

  return <Main />;
}

App.propTypes = {

  /** Инстанс роута */
  route: PropTypes.shape({

    /** Название роута */
    name: PropTypes.string.isRequired

  }).isRequired
};

ReactDOM.render(
  <Provider store={ store }>
    <RouterProvider router={ router }>
      <App />
    </RouterProvider>
  </Provider>,
  document.getElementById('app')
);
