var express = require('express');
var router = express.Router();
path = require('path')

   
router.get('/kitchen/download/:id', function (req, res) {
    pictures = path.join(__dirname, '../../public/images/'+req.params.id+'.jpg')
    res.download(pictures);
    console.log(pictures)
    console.log("Got a download request for " + req.params.id)
    
  })


module.exports = router;