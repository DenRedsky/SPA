import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { getPosts } from 'api';

function* fetchPosts() {
  const value = yield axios(getPosts)
    .then(({ data }) => data.map(item => ({ body: item.body, title: item.title })));

  yield put({ type: 'POSTS/SET_POSTS', value });
}

export default [
  takeLatest('POSTS/GET_POSTS', fetchPosts)
];
