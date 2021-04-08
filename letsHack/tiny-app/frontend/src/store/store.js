import { configureStore, getDefaultMiddleware }  from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { questionReducer } from '../reducers/questionReducer';

export const configureAppStore = preloadedState => {
  const store = configureStore({
    reducer: questionReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware()
      .concat(process.env.MODE_ENV !== 'production' ? logger : []),
    preloadedState
  })

  return store;
}