import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { RouterProvider, Route } from 'react-router5';
import { polyfills } from 'services';

import store from './store';
import { router, PAGES } from './router';

import Main from './pages/main';
import About from './pages/about';

import './globalStyles';

polyfills();

function App({ route }) {
  switch (route.name) {
    case PAGES.ABOUT:
      return <About />;
    default:
      return <Main />;
  }
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
      <Route>{({ route }) => <App route={ route } />}</Route>
    </RouterProvider>
  </Provider>,
  document.getElementById('app')
);
