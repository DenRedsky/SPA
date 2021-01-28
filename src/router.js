import createRouter from 'router5';
import browserPlugin from 'router5-plugin-browser';
import store from './store';

export const PAGES = {
  MAIN: 'main',
  ABOUT: 'about'
};

const path = '/webpack-react-redux-saga-router-stylus/';

const routes = [
  { name: PAGES.MAIN, path: `${ path }${ PAGES.MAIN }` },
  { name: PAGES.ABOUT, path: `${ path }${ PAGES.ABOUT }` }
];

export const router = createRouter(routes, { defaultRoute: PAGES.MAIN });

const onRoute = () => (to, from, done) => {
  done();

  if (to.name === PAGES.MAIN) {
    store.dispatch({ type: 'ROUTING/ON_MAIN_ROUTE' });
  }
};

router.useMiddleware(onRoute);
router.usePlugin(browserPlugin());
router.start();
