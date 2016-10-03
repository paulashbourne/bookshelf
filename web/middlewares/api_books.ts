import * as $ from 'jquery';

import store from '../store';
import * as actions from '../actions/index';

let hasLoaded = false;

const URL = '/api/search?q=Rowling&field=author&limit=10';

export default function getBooks() {
  return (next) => (action) => {
    if (!hasLoaded) {
      let p = new Promise(function(resolve, reject) {
        $.get(URL, function(data) {
          resolve(data);
          hasLoaded = true;
        }).fail(function() {
          reject('Error.');
        });
      });

      p.then(function(val) {
        store.dispatch(actions.books.setBooks(val));
      }).catch(function(reason) {
        console.log(reason);
      });
    }

    return next(action);
  }
}
