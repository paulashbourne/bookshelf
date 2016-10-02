import express from 'express';
import GoogleBooks from '../helpers/google_books';

const router = express.Router(); // eslint-disable-line new-cap

/** GET /api/search - Search books from Google Books */
router.get('/', (req, res) =>
  let {q, field, offset, limit} = req.query;
  GoogleBooks.search(q, {field, offset, limit}, function(err, results) {
    if (err)
      res.send(err);
    res.json(results);
  });
);

export default router;
