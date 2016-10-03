import { createStore, applyMiddleware } from 'redux';

import reducer from './reducers/index';
import middleware from './middlewares/index';

export default createStore(
  reducer,
  applyMiddleware(...middleware)
);
