var express = require('express');
var router = express.Router();

config = "http://localhost:3000"

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'main API page',
    route1: __dirname + '\\kitchen', 
    route2: __dirname + '\\users', 
    config1: config + "/kitchen",
    config2: config + "/users",
    config3: config + "/phones",
    config4: config + "/test"
    // link:"www.test.com"

  });
});

module.exports = router;
