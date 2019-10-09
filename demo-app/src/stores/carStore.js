import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { carReducer } from '../reducers/carReducer';

export const carStore = createStore(
  carReducer,
  composeWithDevTools(applyMiddleware(thunk))
);