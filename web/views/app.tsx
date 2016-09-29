import * as React from 'react';

import HomeView from './home.tsx';

import '../css/base.css';

interface AppProps {}

class AppView extends React.Component<AppProps, {}> {

  renderNav() {
    return (
      <div className="nav">
        <a className="nav__home" href="/">
          Home
        </a>
      </div>
    );
  }

  render() {
    // TODO: Add a bunch of things here such as a navigation tab or whaatever
    return (
      <div>
        {this.renderNav()}
        <div className="container">
          <HomeView />
        </div>
      </div>
    );
  }
}

export default AppView;
