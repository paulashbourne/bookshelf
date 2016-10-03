import * as React from 'react';

import store from '../store';
import * as actions from '../actions/index';

import '../css/home.css';

interface HomeProps {
  books: any[]
}

class HomeView extends React.Component<HomeProps, {}> {

  private onBookClick = () => {
    store.dispatch(actions.views.book('Book!'));
  }

  renderBook(book, key) {
    let style = {
      backgroundImage: `url('${book.thumbnail}')`
    }
    return (
      <div key={`book-${key}`} className="home__book" onClick={this.onBookClick}>
        <div className="home__book__preview" style={style}>
        </div>
        <div className="home__book__info">
          <div className="home__book__info--top">
            <span className="home__book__title">
              {book.title}
            </span>
            <span className="home__book__author">
              {book.authors[0]}
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
    let bookElems = [];
    let books = this.props.books || [];
    for (let i = 0; i < books.length; i++) {
      let b = books[i];
      bookElems.push(this.renderBook(b, i));
    }

    return (
      <div>
        {bookElems}
      </div>
    );
  }
}

export default HomeView;
