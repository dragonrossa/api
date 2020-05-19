

var express = require('express');
var router = express.Router();
const fs = require('fs');
path = require('path')

router.delete('/kitchen/:id', function (req, res) {
    res.send('Got a DELETE request')

    fs.unlink(path.join(__dirname, '../../public/images/' + req.params.id + '.jpg'), function (err) {
        if (err) { 
            return console.error 
        }
        console.log("Picture with ID " + req.params.id + " has been deleted")
    })  
})


module.exports = router;