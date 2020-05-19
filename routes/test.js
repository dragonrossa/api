//var express = require('express');
//var router = express.Router();
const fs = require('fs');
path = require('path')

configFile = path.join(__dirname, '../users2.json')

var data1 = [{"name": "Ivana Ivic", "initials": "II","id": "1","eyeColor": "blue","age": "27","guid": "459085d1-bb17-4e8e-a671","email": "ivanai@gmail.com"},{"name": "Ivana Ivic", "initials": "II","id": "1","eyeColor": "blue","age": "27","guid": "459085d1-bb17-4e8e-a671","email": "ivanai@gmail.com"}, {"name": "Ivana Ivic", "initials": "II","id": "1","eyeColor": "blue","age": "27","guid": "459085d1-bb17-4e8e-a671","email": "ivanai@gmail.com"}]
var data2 = [{"name":"placeHolder","section":"right"},{"name":"Overview","section":"left"},{"name":"ByFunction","section":"left"},{"name":"Time","section":"left"},{"name":"allFit","section":"left"},{"name":"allbMatches","section":"left"},{"name":"allOffers","section":"left"},{"name":"allInterests","section":"left"},{"name":"allResponses","section":"left"},{"name":"divChanged","section":"right"}];

    // router.put('/users/:id', function (req, res) {

    //    // res.send('Got a PUT request at /user/'+ req.params.id)

    //     //res.send({msg:'hello'});

    //     var user = { 
    //         "name": "Sabina Zidic",
    //         "initials": "SZ",
    //         "id": req.params.id,
    //         "eyeColor":"icy blue",
    //         "age":"32",
    //         "guid": "47ddeaed-7c1c-9eda-4fdd-deed11e66e4e",
    //         "email":"sabinaz@gmail.com"
    //     }

    // fs.writeFile(configFile,user,function(err,data){
    //     if (err){
    //      return console.log(err)
    //     }
    // })

    // fs.appendFile('message.txt', 'data to append\n', function (err) {
    //     if (err) throw err;
    //     console.log('Saved!');
    // });

    fs.readFile(configFile, function (err, data1) {
        if (err) { return console.log(err); }
        // JSON.parse(data).forEach(element => {
        //   console.log(element[element.length-1])  
        // });
        // var a = ["a", "b", "EMAIL"];
        // var js = JSON.stringify(a);
        // console.log(js);

        // var a1 = JSON.parse(js);
        // console.log(a1[a1.length - 2]);
        //console.log(JSON.parse(data));

        //var str = JSON.parse(data1);
        // var pos = str.indexOf('}'); // 0

        // if (pos !== -1) {
        //     console.log('Found at location ' + pos);
        // }

    });

    var data = data1
var index = -1;
var val = "blue"
var filteredObj = data.find(function(item, i){
  if(item.name === val){
    index = i;
    return i;
  }
});

console.log(index, filteredObj);

var book = new Array();

var booktemp = {
   "id" : "po-0167",
   "date" : new Date(1980, 2, 24),
   "quantity" : 1,
   "amount" : 4,
   "title" : "A Book About Nothing"
};  

book.push(booktemp); 

console.log(book)

//           fs.appendFile(configFile, '\n' + JSON.stringify(user) + '\n', function (err) {
//             if (err) throw err;
//             console.log('Saved!');
//           });



//         res.send(user)
//     })


// module.exports = router;