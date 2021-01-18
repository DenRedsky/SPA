import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { getUsers } from 'api';

function* fetchUser() {
  const { value } = yield axios(getUsers).then(({ data }) => {
    console.log(data);
    debugger;
  });

  yield put({ type: 'USER/SET_USER', value });
}

export default [
  takeLatest('USER/GET_USER', fetchUser)
];
