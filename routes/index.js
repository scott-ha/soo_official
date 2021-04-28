var express = require('express');
var router = express.Router();

/* Main Page */
// /
router.get('/', function(req, res, next) {
  res.render('main/page');
});

/* Price Page */
// /price
router.get('/price', function(req, res, next) {
  res.render('price/page');
});

/* Works Page */
// /works
router.get('/works', function(req, res, next) {
  res.render('works/page');
});

/* Works Page */
// /works
router.get('/solution', function(req, res, next) {
  res.render('solution/page');
});

/* Works Page */
// /works
router.get('/contents', function(req, res, next) {
  res.render('contents/page');
});

/* Works Page */
// /works
router.get('/solution', function(req, res, next) {
  res.render('contents/page');
});

module.exports = router;
