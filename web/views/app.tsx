import { connect } from 'react-redux'
import * as React from 'react';
import * as actions from '../actions/index';

import selector from '../selectors/index.ts';

import store from '../store';

import HomeView from './home.tsx';

import '../css/base.css';

interface AppProps {
  books: any[]
}

class AppView extends React.Component<AppProps, {}> {

  componentDidMount() {
    store.dispatch(actions.books.load());
  }

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
    let view = null;

    return (
      <div>
        {this.renderNav()}
        <div className="container">
          <HomeView books={this.props.books} />
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  books: state.books
})

const ConnectedAppView = connect(
  mapStateToProps
)(AppView);

export default ConnectedAppView;
