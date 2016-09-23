var express = require('express');
var router = express.Router();

/* GET users listing. */
/* /api/users/ */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* POST user */
router.post('/', function(req, res, next) {
});

module.exports = router;
