import * as React from 'react';

import store from '../store';
import * as actions from '../actions/index';

import '../css/home.css';

interface HomeProps {}

class HomeView extends React.Component<HomeProps, {}> {

  private onBookClick = () => {
    store.dispatch(actions.views.book('Book!'));
  }

  renderBook(book, key) {
    return (
      <div key={`book-${key}`} className="home__book" onClick={this.onBookClick}>
        <div className="home__book__preview">
        </div>
        <div className="home__book__info">
          <div className="home__book__info--top">
            <span className="home__book__title">
              Harry Potter: The Philosophers Stone
            </span>
            <span className="home__book__author">
            J.K. Rowling
            </span>
          </div>
          <div className="home__book__info--bottom">
            Owned by Andy Zhang and John Salaveria
          </div>
        </div>
      </div>
    );
  }

  render() {
    let books = [];
    for (let i = 0; i < 10; i++) {
      books.push(this.renderBook(null, i));
    }

    return (
      <div>
        {books}
      </div>
    );
  }
}

export default HomeView;
