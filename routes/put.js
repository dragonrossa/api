

var express = require('express');
var router = express.Router();
const fs = require('fs');
path = require('path')

configFile1 = path.join(__dirname, '../users2.json')
configFile2 = path.join(__dirname, '../users23.json'),

    router.put('/users/:id', function (req, res) {

         //res.send('Got a PUT request at /user/'+ req.params.id)

       
        var user5 = { name: "Sabina Zidic", initials: "SZ", id: req.params.id, eyeColor: "icy blue", age: 32, guid: "47ddeaed-7c1c-9eda-4fdd-deed11e66e4e", email: "sabinaz@gmail.com" }
        

        //fs.writeFileSync('file.json', JSON.stringify(user));

        // fs.writeFile("file.json", JSON.stringify(user1, null, 4), (err) => {
        //     if (err) { console.error(err); return; };
        //     console.log("File has been created");
        // });

        // fs.appendFile("file.json", JSON.stringify(user2, null, 4), (err) => {
        //     if (err) { console.error(err); return; };
        //     console.log("File2 has been created");
        // });



        // var data = {}
        // data.table = []
        // for (i = 0; i < 26; i++) {
        //     var obj = {
        //         id: i,
        //         square: i * i
        //     }
        //     data.table.push(obj)
        //     var obj2 = {
        //         id: 27,
        //         square: 27 * 27
        //     }
        //     data.table.push(obj2)
        // }
        // fs.writeFile("input.json", JSON.stringify(data), function (err) {
        //     if (err) throw err;
        //     console.log('complete');
        // }
        // );

        fs.readFile(configFile1, function (err, data) {
            if (err) {
                console.log(err);
                
            }
            let student = JSON.parse(data);
            student.table.push(user5)

            fs.writeFile(configFile2, JSON.stringify(student), function (err) {
                if (err) throw err;
                console.log('complete 5');
            }
            );

           console.log(student.table[0].id)
        })

        // var data = {}
        // data.table = []
        //     // data.table.push(user1)
        //     // data.table.push(user2)
        //     // data.table.push(user3)
        //     // data.table.push(user4)
        //     data.table.push(user5)
        // fs.writeFile(configFile2, JSON.stringify(data), function (err) {
        //     if (err) throw err;
        //     console.log('complete 5');
        // }
        // );


        // fs.writeFile(configFile,user,function(err,data){
        //     if (err){
        //      return console.log(err)
        //     }
        // })

        // fs.appendFile('message.txt', 'data to append\n', function (err) {
        //     if (err) throw err;
        //     console.log('Saved!');
        //   });

        //   fs.appendFile(configFile, '\n' + JSON.stringify(user) + '\n', function (err) {
        //     if (err) throw err;
        //     console.log('Saved!');
        //   });


        // var obj = {
        //     table: []
        //  };

        //   fs.readFile(configFile, 'utf8', function readFileCallback(err, data){
        //     if (err){
        //         console.log(err);
        //     } else {
        //     obj = JSON.parse(data); //now it an object
        //     obj.table.push({"name":"Sabina Zidic","initials":"SZ","id":req.params.id,"eyeColor":"icy blue","age":"32","guid":"47ddeaed-7c1c-9eda-4fdd-deed11e66e4e","email":"sabinaz@gmail.com"}); //add some data
        //     json = JSON.stringify(obj); //convert it back to json
        //     fs.writeFile(configFile, json, 'utf8', callback); // write it back 
        // }});

        var sampleObject = { id: 1, name: "rosana" };

        fs.writeFile("./object.json", JSON.stringify(sampleObject, null, 4), (err) => {
            if (err) { console.error(err); return; };
            console.log("File has been created");
        });



        res.send(user5)
    })


module.exports = router;