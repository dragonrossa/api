

var express = require('express');
var router = express.Router();
path = require('path')

   
router.post('/kitchen/:id', function (req, res) {
    pictures = path.join(__dirname, '../../public/images/'+req.params.id+'.jpg')
    res.sendFile(pictures);
    console.log("Got a download request for " + req.params.id)
    console.log(pictures)
    
  })


module.exports = router;

