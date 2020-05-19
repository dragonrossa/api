var express = require('express');
var router = express.Router();
const fs = require('fs');
path = require('path')

configFile1 = path.join(__dirname, '../users2.json')

fs.access(configFile1, fs.F_OK, (err) => {
  if (err) {
    console.error(err)
    console.log("Users2.json does not exist!")
    return
  }
console.log("Users2.json exists!")
  //file exists
})

var user1 = { name: "Ivana Ivic", initials: "II", id: "1", eyeColor: "blue", age: 27, guid: "459085d1-bb17-4e8e-a671", email: "ivanai@gmail.com" }
var user2 = { name: "Marko Maric", initials: "MM", id: "2", eyeColor: "blue", age: 28, guid: "a6f3177f-dfed-4129-86d0-1752f0248876", email: "markom@gmail.com" }
var user3 = { name: "Lovro Lovric", initials: "LL", id: "3", eyeColor: "green", age: 30, guid: "eecf8d71-0d2b-4579-a0fd-ac005525473a", email: "lovrol@gmail.com"}
var user4 = { name: "Matej Matejic", initials: "MM", id: "4", eyeColor: "brown", age: 31, guid: "76ddeaed-3c3c-4eda-8fdd-deed23e14e2e", email: "matejm@gmail.com"}

var data = {}
data.table = []
    data.table.push(user1)
    data.table.push(user2)
    data.table.push(user3)
    data.table.push(user4)
   // data.table.push(user5)
fs.writeFile(configFile1, JSON.stringify(data), function (err) {
    if (err) throw err;
    console.log('complete 1,2,3,4');
}
);


/* GET users listing. */
router.get('/', function(req, res, next) {
  fs.readFile(configFile1, function(err, data) {
      if (err){
          console.log(err);
      }
      let student = JSON.parse(data);
      console.log(student);
      console.log(configFile1)
      res.send(student);
  })
  
});

module.exports = router;
