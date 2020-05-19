

var express = require('express');
var router = express.Router();
const fs = require('fs');
path = require('path')

configFile3 = path.join(__dirname, '../../users2.json')
configFile4 = path.join(__dirname, '../../users23.json'),

    router.put('/users/:id', function (req, res) {

       
        var user5 = { name: "Sabina Zidic", initials: "SZ", id: req.params.id, eyeColor: "icy blue", age: 32, guid: "47ddeaed-7c1c-9eda-4fdd-deed11e66e4e", email: "sabinaz@gmail.com" }
        

        fs.readFile(configFile3, function (err, data) {
            if (err) {
                console.log(err);
                
            }
            let student = JSON.parse(data);
            student.table.push(user5)

            fs.writeFile(configFile4, JSON.stringify(student), function (err) {
                if (err) throw err;
                console.log('complete 5');
            }
            );

           console.log(student.table[0].id)
        })

       

        // var sampleObject = { id: 1, name: "rosana" };

        // fs.writeFile("./object.json", JSON.stringify(sampleObject, null, 4), (err) => {
        //     if (err) { console.error(err); return; };
        //     console.log("File has been created");
        // });



        res.send(user5)
    })


module.exports = router;