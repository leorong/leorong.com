var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('professional', { title: 'Leo Rong - Professonal Portfolio' });
});

module.exports = router;
