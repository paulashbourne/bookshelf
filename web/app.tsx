import * as ReactDOM from 'react-dom';
import * as React from 'react';

import AppView from './views/app';

import reducer from './reducers/index';

ReactDOM.render(
  <AppView></AppView>,
  document.getElementById('app')
);
