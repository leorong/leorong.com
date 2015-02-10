var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/photography', function(req, res) {
  res.render('photography', { title: 'Leo Rong - Photography Portfolio' });
});

module.exports = router;