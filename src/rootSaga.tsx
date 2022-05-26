import { all } from 'redux-saga/effects';

function* helloSaga() {
  console.log('Hello Saga');
}

export function* rootSaga() {
  console.log('Root Saga');
  yield all([
    helloSaga(),
  ]);
}
