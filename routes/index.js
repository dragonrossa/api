var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'main API page',
    route1: __dirname + '\\kitchen', 
    route2: __dirname + '\\users', 

  });
});

module.exports = router;
