import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import store from './store';

import AppView from './views/app';

import reducer from './reducers/index';

ReactDOM.render(
  <Provider store={store}>
    <AppView></AppView>
  </Provider>,
  document.getElementById('app')
);
