import { all } from 'redux-saga/effects';
import { authSaga } from './features/auth/Login/authSaga';

function* helloSaga() {
  console.log('Hello Saga');
}

export function* rootSaga() {
  console.log('Root Saga');
  yield all([
    helloSaga(),
    authSaga(),
  ]);
}
