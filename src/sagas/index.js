import { all } from 'redux-saga/effects';

import user from './user';
import posts from './posts';
import routing from './routing';

export default function* rootSaga() {
  yield all([
    ...user,
    ...posts,
    ...routing
  ]);
}
