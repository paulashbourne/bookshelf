import Book from '../models/book';

/**
 * Load book and append to req.
 */
function load(req, res, next, id) {
  Book.get(id)
    .then((book) => {
      req.book = book; // eslint-disable-line no-param-reassign
      return next();
    })
    .catch(e => next(e));
}

/**
 * Get book
 * @returns {Book}
 */
function get(req, res) {
  return res.json(req.book);
}

/**
 * Create new book
 * @property {string} req.body.bookname - The bookname of book.
 * @property {string} req.body.mobileNumber - The mobileNumber of book.
 * @returns {Book}
 */
function create(req, res, next) {
  const book = new Book({
    bookname: req.body.bookname,
    mobileNumber: req.body.mobileNumber
  });

  book.save()
    .then(savedBook => res.json(savedBook))
    .catch(e => next(e));
}

/**
 * Update existing book
 * @property {string} req.body.bookname - The bookname of book.
 * @property {string} req.body.mobileNumber - The mobileNumber of book.
 * @returns {Book}
 */
function update(req, res, next) {
  const book = req.book;
  book.bookname = req.body.bookname;
  book.mobileNumber = req.body.mobileNumber;

  book.save()
    .then(savedBook => res.json(savedBook))
    .catch(e => next(e));
}

/**
 * Get book list.
 * @property {number} req.query.skip - Number of books to be skipped.
 * @property {number} req.query.limit - Limit number of books to be returned.
 * @returns {Book[]}
 */
function list(req, res, next) {
  const { limit = 50, skip = 0 } = req.query;
  Book.list({ limit, skip })
    .then(books => res.json(books))
    .catch(e => next(e));
}

/**
 * Delete book.
 * @returns {Book}
 */
function remove(req, res, next) {
  const book = req.book;
  book.remove()
    .then(deletedBook => res.json(deletedBook))
    .catch(e => next(e));
}

export default { load, get, create, update, list, remove };
