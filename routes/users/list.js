

var express = require('express');
var router = express.Router();
const fs = require('fs');
path = require('path')

configFile4 = path.join(__dirname, '../../users23.json')
console.log(configFile4)

    router.get('/users/:id', function (req, res) {

        console.log('Request Id:', req.params.id);
        fs.readFile(configFile4, function (err, data) {
            if (err) {
                console.log(err);
                
            }
            
            let student = JSON.parse(data);

             for (var i = 0; i < student.table.length; i++) {
                 if (req.params.id == student.table[i].id) {
                     console.log(student.table[i].id, student.table[i].age)
                     res.send("ID: " + student.table[i].id +
                         "<br>Name: " + student.table[i].name +
                         "<br>Initials: " + student.table[i].initials +
                         "<br>Eye color: " + student.table[i].eyeColor +
                         "<br>Age: " + student.table[i].age +
                         "<br>Guid: " + student.table[i].guid +
                         "<br>Email: " + student.table[i].email);
                 }
             }


        })

    })


module.exports = router;