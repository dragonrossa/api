

var express = require('express');
var router = express.Router();
const fs = require('fs');
path = require('path')

configFile3 = path.join(__dirname, '../users23.json'),

    router.get('/users/:id', function (req, res) {

        console.log('Request Id:', req.params.id);
        fs.readFile(configFile3, function (err, data) {
            if (err) {
                console.log(err);
                
            }
            
            let student = JSON.parse(data);

          // console.log(student.table[0].id)
        //    console.log(student.table[1].id)
        //    console.log(student.table[2].id)
        //    console.log(student.table[3].id)
        //    console.log(student.table[4].id)


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


           // console.log(configFile23)


        })


        // res.status(404).send('Sorry, cant find that')

        // res.send('USER ' + req.params.id)
    })


module.exports = router;