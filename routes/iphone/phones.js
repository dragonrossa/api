var express = require('express');
var router = express.Router();
const fs = require('fs');
path = require('path')

configFile = path.join(__dirname, '../../iphone.json')

fs.access(configFile, fs.F_OK, (err) => {
    if (err) {
        console.error(err)
        console.log("Iphone.json does not exist!")
        return
    }
    console.log("Iphone.json exists!")
    //file exists
})

var phone1 = {
    id: 1, name: "Apple iPhone 11 Pro Max",
    released: "2019, September 20",
    weight: "226g", thickness: "8.1mm",
    guid: "459085d1-bb17-4e8e-a671",
    os: "iOS 13, up to iOS 13.4",
    storage: "64GB/256GB/512GB storage, no card slot",
    size: "6.5'' - 1242x2688 pixels",
    camera: "12MP, 2160p",
    memory: "4GB RAM, Apple A13 Bionic",
    battery: "3969mAh, Li-lon",
    network: {
        technology: [
            {
                id: "1",
                title: "GSM/CDMA/HSPA/EVDO/LTE"
            }
        ]
    },
    launch: {
        announced: [
            {
                id: "1",
                title: "2019, September 10"
            }
        ],
        status:[{
            id:"1",
            title:"Available. Released 2019, September 20"
        }]
    }

}
// var user2 = { name: "Marko Maric", initials: "MM", id: "2", eyeColor: "blue", age: 28, guid: "a6f3177f-dfed-4129-86d0-1752f0248876", email: "markom@gmail.com" }
// var user3 = { name: "Lovro Lovric", initials: "LL", id: "3", eyeColor: "green", age: 30, guid: "eecf8d71-0d2b-4579-a0fd-ac005525473a", email: "lovrol@gmail.com"}
// var user4 = { name: "Matej Matejic", initials: "MM", id: "4", eyeColor: "brown", age: 31, guid: "76ddeaed-3c3c-4eda-8fdd-deed23e14e2e", email: "matejm@gmail.com"}

var data = {}
data.phone = []
data.phone.push(phone1)
// data.table.push(user2)
// data.table.push(user3)
// data.table.push(user4)
// data.table.push(user5)
fs.writeFile(configFile, JSON.stringify(data), function (err) {
    if (err) throw err;
    console.log('complete 1 - iphone.json');
}
);


/* GET users listing. */
router.get('/phones', function (req, res, next) {
    fs.readFile(configFile, function (err, data) {
        if (err) {
            console.log(err);
        }
        let phones = JSON.parse(data);
        console.log(phones);
        console.log(configFile)
        res.send(phones);
    })

});

module.exports = router;
