var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/fitness', function(req, res) {
  res.render('fitness', { title: 'Leo Rong - Fitness Blog' });
});

module.exports = router;
