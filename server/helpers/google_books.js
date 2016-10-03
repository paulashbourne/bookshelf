import gbooks from 'google-books-search';

export default class GoogleBooks {

  static search(query, {field = 'title', offset = 0, limit = 10}, callback) {
    let options = {
      field,
      offset,
      limit,
      type: 'books',
      order: 'relevance',
      lang: 'en',
    };
    gbooks.search(query, options, callback);
  }

  static lookup(volumeId, callback) {
    gbooks.lookup(volumeId, callback);
  }
}
