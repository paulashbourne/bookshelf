import * as React from 'react';

import '../css/home.css';

interface HomeProps {}

class HomeView extends React.Component<HomeProps, {}> {
  renderBook(book) {
    return (
      <div className="home__book">
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
      books.push(this.renderBook(null));
    }

    return (
      <div>
        {books}
      </div>
    );
  }
}

export default HomeView;
