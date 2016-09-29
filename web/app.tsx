import * as ReactDOM from 'react-dom';
import * as React from 'react';

import AppView from './views/app';


import reducer from './reducers/index';
import * as actions from './actions/index';


ReactDOM.render(
  <AppView></AppView>,
  document.getElementById('app')
);
