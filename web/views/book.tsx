import * as React from 'react';

import store from '../store';
import * as actions from '../actions/index';

import '../css/book.css';

interface BookProps {}

class BookView extends React.Component<BookProps, {}> {

  private onBookClick = () => {
    store.dispatch(actions.views.book('Book!'));
  }

  render() {
    return (
      <div className="book">
        Some book...
      </div>
    );
  }
}

export default BookView;
