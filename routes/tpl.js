var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/home', function(req, res) {
  res.render('tpl/home');
});

module.exports = router;
