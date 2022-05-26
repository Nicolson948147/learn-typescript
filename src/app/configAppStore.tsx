import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { rootSaga } from '../rootSaga';

const configAppStore = (initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware];

  const store = configureStore({
    reducer: {},
    middleware: [...getDefaultMiddleware({ thunk: false, }), ...middlewares],
    preloadedState: initialState,
    devTools: process.env.NODE_ENV !== 'production',
  });

  sagaMiddleware.run(rootSaga);

  return store;
}

export default configAppStore;