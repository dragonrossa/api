

var express = require('express');
var router = express.Router();
const fs = require('fs');
path = require('path')

configFile4 = path.join(__dirname, '../../users2.json'),


  router.delete('/users/:id', function (req, res) {
    console.log("I will delete this " + req.params.id)
    fs.readFile(configFile4, function (err, data) {
      if (err) {
        console.log(err);

      }

      let student = JSON.parse(data);

      for (var i = 0; i < student.table.length; i++) {
        if (req.params.id == student.table[i].id) {
          res.send("ID: " + student.table[i].id +
            "<br>Name: " + student.table[i].name +
            "<br>Initials: " + student.table[i].initials +
            "<br>Eye color: " + student.table[i].eyeColor +
            "<br>Age: " + student.table[i].age +
            "<br>Guid: " + student.table[i].guid +
            "<br>Email: " + student.table[i].email);
          delete student.table[i].id;
          delete student.table[i].name;
          delete student.table[i].initials;
          delete student.table[i].eyeColor;
          delete student.table[i].age;
          delete student.table[i].guid;
          delete student.table[i].email;
          console.log(student)

          fs.writeFile(configFile4, JSON.stringify(student), function (err) {
            if (err) throw err;
            console.log('Write new file after we deleted object with ID ' +  req.params.id);
        }
        );

        }
      }

    

    })
    // res.send('Got a DELETE request')
  })


module.exports = router;



