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
 * @property {string} req.body.volumeId - The Google volumeId of the book.
 * @property {string} req.body.ownerId - The id of user who owns of book.
 * @property {string} req.body.heldById - The id of user who currently holds the book.
 * @returns {Book}
 */
function create(req, res, next) {
  const book = new Book({
    volumeId: req.body.volumeId,
    ownerId: req.body.ownerId,
    heldById: req.body.heldById,
  });

  book.save()
    .then(savedBook => res.json(savedBook))
    .catch(e => next(e));
}

/**
 * Update existing book
 * @property {string} req.body.volumeId - The volumeId of book.
 * @property {string} req.body.ownerId - The id of user who owns of book.
 * @property {string} req.body.heldById - The id of user who currently holds the book.
 * @returns {Book}
 */
function update(req, res, next) {
  const book = req.book;
  book.volumeId = req.body.volumeId;
  book.ownerId = req.body.ownerId;
  book.heldById = req.body.heldById;

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
  const { limit = 50, skip = 0, ownerId  } = req.query;

  Book.list({ limit, skip, ownerId })
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
