import express from 'express';
import GoogleBooks from '../helpers/google_books';

const router = express.Router(); // eslint-disable-line new-cap

/** GET /api/search - Search books from Google Books */
router.get('/', (req, res) => {
  let {q, field, offset, limit} = req.query;
  GoogleBooks.search(q, {field, offset, limit}, function(error, results) {
    if (error)
      res.send(error);
    res.json(results);
  });
});

router.get('/:volumeId', (req, res) => {
  GoogleBooks.lookup(req.params.volumeId, function(error, result) {
    if (error)
      res.send(error);
    res.json(result);
  });
});

export default router;
