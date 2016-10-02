import express from 'express';
import validate from 'express-validation';
import paramValidation from '../../config/param-validation';
import bookCtrl from '../controllers/book';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  /** GET /api/books - Get list of books */
  .get(bookCtrl.list)

  /** POST /api/books - Create new book */
  .post(validate(paramValidation.createBook), bookCtrl.create);

router.route('/:bookId')
  /** GET /api/books/:bookId - Get book */
  .get(bookCtrl.get)

  /** PUT /api/books/:bookId - Update book */
  .put(validate(paramValidation.updateBook), bookCtrl.update)

  /** DELETE /api/books/:bookId - Delete book */
  .delete(bookCtrl.remove);

/** Load book when API with bookId route parameter is hit */
router.param('bookId', bookCtrl.load);

export default router;
