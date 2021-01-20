import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { getUsers } from 'api';

function* fetchUser() {
  const value = yield axios(getUsers)
    .then(({ data }) => {
      const user = data[0];

      return { name: user.name, email: user.email };
    });

  yield put({ type: 'USER/SET_USER', value });
}

export default [
  takeLatest('USER/GET_USER', fetchUser)
];
