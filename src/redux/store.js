import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import rootReducers from './rootReducers';

const middlewares = [logger];

export const store = createStore(rootReducers, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
