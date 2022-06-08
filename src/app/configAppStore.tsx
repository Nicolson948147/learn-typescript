import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import authReducer from 'features/auth/Login/authSlice';
import dashboardReducer from 'features/dashboard/dashboardSlice';

import { rootSaga } from '../rootSaga';

const configAppStore = (initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware];

  const store = configureStore({
    reducer: {
      auth: authReducer,
      dashboard: dashboardReducer,
    },
    middleware: [
      ...getDefaultMiddleware({ thunk: false, serializableCheck: false }),
      ...middlewares,
    ],
    preloadedState: initialState,
    devTools: process.env.NODE_ENV !== 'production',
  });

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configAppStore;
