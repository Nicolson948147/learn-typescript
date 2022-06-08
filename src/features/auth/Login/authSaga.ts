import { PayloadAction } from '@reduxjs/toolkit';
import {
  call, delay, fork, put, take,
} from 'redux-saga/effects';
import getLocalStorageItem from 'helpers/getLocalStorageItem';
import { ACCESS_TOKEN } from 'constants/auth';
import { authActions, LoginPayload, LogoutPayload } from './authSlice';

function* handleLogin(payload: LoginPayload) {
  try {
    yield delay(2000);
    localStorage.setItem(ACCESS_TOKEN, `tokentestne_${payload.username}`);
    yield put(authActions.loginSuccess({
      id: 1,
      name: `hihi la ${payload.username} day`,
    }));
    if (payload.navigate) {
      payload.navigate('/admin/dashboard');
    }
  } catch (error) {
    yield put(authActions.loginFailed('hihi'));
    if (payload.navigate) {
      payload.navigate('/login');
    }
  }
}

function* handleLogout(payload: LogoutPayload) {
  localStorage.removeItem(ACCESS_TOKEN);
  if (payload.navigate) {
    payload.navigate('/login');
  }
}

function* watchLoginFlow() {
  while (true) {
    const accessToken = Boolean(getLocalStorageItem(ACCESS_TOKEN));

    if (!accessToken) {
      const action: PayloadAction<LoginPayload> = yield take(authActions.login.type);
      yield fork(handleLogin, action.payload);
    }

    const actionLogout: PayloadAction<LoginPayload> = yield take(authActions.logout.type);
    yield call(handleLogout, actionLogout.payload);
  }
}

export function* authSaga() {
  yield fork(watchLoginFlow);
}
