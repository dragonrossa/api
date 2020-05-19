

var express = require('express');
var router = express.Router();
const fs = require('fs');
path = require('path')

configFile3 = path.join(__dirname, '../users23.json'),

   
router.delete('/users/:id', function (req, res) {
    res.send('Got a DELETE request')
  })


module.exports = router;