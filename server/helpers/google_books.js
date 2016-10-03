import gbooks from 'google-books-search';

/* Takes a volume from Google Books and transforms it how we like it */
var transformVolume = function(volume) {
  volume.volumeId = volume.id;
  return volume;
}

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
    gbooks.search(query, options, function(error, results) {
      if (error)
        callback(error, results);
      else
        callback(null, results.map(transformVolume));
    });
  }

  static lookup(volumeId, callback) {
    gbooks.lookup(volumeId, function(error, result) {
      if (error)
        callback(error, result);
      else
        callback(null, transformVolume(result));
    });
  }
}
