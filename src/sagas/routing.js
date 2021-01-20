import { put, takeLatest, all } from 'redux-saga/effects';

function* onMainRoute() {
  yield all([
    put({ type: 'POSTS/GET_POSTS' }),
    put({ type: 'USER/GET_USER' })
  ]);
}

export default [
  takeLatest('ROUTING/ON_MAIN_ROUTE', onMainRoute)
];
