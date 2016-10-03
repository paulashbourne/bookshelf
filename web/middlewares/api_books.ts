import * as $ from 'jquery';

import store from '../store';
import * as actions from '../actions/index';

let hasLoaded = false;

export default function getBooks() {
  return (next) => (action) => {
    if (!hasLoaded) {
      let p = new Promise(function(resolve, reject) {
        $.get('/api/search?q=Gayle%20Laakmann%20McDowell&field=author&limit=1', function(data) {
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
