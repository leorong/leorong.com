var express = require('express');
var router = express.Router();

/* GET home page - Professional Portfolio */
router.get('/', function(req, res) {
  res.render('professional', { title: 'Leo Rong - Professonal Portfolio' });
});

router.get('/professional', function(req, res) {
  res.render('professional', { title: 'Leo Rong - Professonal Portfolio' });
});

/* GET fitness page - Fitness Blog */
router.get('/fitness', function(req, res) {
  res.render('fitness', { title: 'Leo Rong - Fitness Blog' });
});

/* GET home page - Photography Portfolio */
router.get('/photography', function(req, res) {
  res.render('photography', { title: 'Leo Rong - Photography Portfolio' });
});

module.exports = router;
