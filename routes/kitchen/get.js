var express = require('express');
var router = express.Router();
const fs = require('fs');
path = require('path')

configFile1 = path.join(__dirname, '../../kitchen.json')

fs.access(configFile1, fs.F_OK, (err) => {
    if (err) {
        console.error(err)
        console.log("Kitchen.json does not exist!")
        return
    }
    console.log("Kitchen.json exists!")
    //file exists
})

var kitchen1 = { Id: 1, Manufacturer: "Dan Kuchen", Model: "Granada", Color1: "FliederWeiss", Color2: "Bergamo", Picture: "1.jpg" }
var kitchen2 = { Id: 2, Manufacturer: "Dan Kuchen", Model: "Granada", Color1: "FliederWeiss", Color2: "WeissKristall", Color3: "Altfichte", Picture: "2.jpg" }
var kitchen3 = { Id: 3, Manufacturer: "Dan Kuchen", Model: "Silbermond", Color1: "FliederWeiss", Color2: "Bergamo", Color3: "Cerros", Picture: "3.jpg" }
var kitchen4 = { Id: 4, Manufacturer: "Dan Kuchen", Model: "Silbermond", Color1: "Kashmir", Color2: "Bergamo", Color3: "Glasrckwand", Picture: "4.jpg" }
var kitchen5 = { Id: 5, Manufacturer: "Dan Kuchen", Model: "Silbermond", Color1: "Fliederweiss", Color2: "Safran", Picture: "5.jpg" }
var kitchen6 = { Id: 6, Manufacturer: "Dan Kuchen", Model: "Silbermond", Color1: "Jasmin", Color2: "Cerros", Picture: "6.jpg" }
var kitchen7 = { Id: 7, Manufacturer: "Dan Kuchen", Model: "Silbermond", Color1: "Fliederweiss", Color2: "MarmorGrau", Picture: "7.jpg" }
var kitchen8 = { Id: 8, Manufacturer: "Dan Kuchen", Model: "Toplux", Color1: "FliederWeiß", Color2: "Ulme", Picture: "8.jpg" }
var kitchen9 = { Id: 9, Manufacturer: "Dan Kuchen", Model: "Toplux", Color1: "American Walnuss", Color2: "FliederWeiß", Color3: "WeißKristall", Picture: "9.jpg" }
var kitchen10 = { Id: 10, Manufacturer: "Dan Kuchen", Model: "Toplux", Color1: "FliederWeiss", Color2: "American Walnuss", Color3: "Schwarz", Picture: "10.jpg" }
var kitchen11 = { Id: 11, Manufacturer: "Dan Kuchen", Model: "LaCorte", Color1: "Beton", Color2: "FliederWeiß", Color3: "Cerros", Color4: "Bergamo", Color5: "WeißKristall", Picture: "11.jpg" }
var kitchen12 = { Id: 12, Manufacturer: "Dan Kuchen", Model: "LaCorte", Color1: "FliederWeiß", Color2: "Coro", Color3: "Altfichte", Picture: "12.jpg" }
var kitchen13 = { Id: 13, Manufacturer: "Dan Kuchen", Model: "LaCorte", Color1: "Beton", Color2: "Bergamo", Picture: "13.jpg" }
var kitchen14 = { Id: 14, Manufacturer: "Dan Kuchen", Model: "LaCorte", Color1: "Cerros", Color2: "FliederWeiß", Color3: "Safran", Picture: "14.jpg" }

var data = {}
data.table = []
data.table.push(kitchen1)
data.table.push(kitchen2)
data.table.push(kitchen3)
data.table.push(kitchen4)
data.table.push(kitchen5)
data.table.push(kitchen6)
data.table.push(kitchen7)
data.table.push(kitchen8)
data.table.push(kitchen9)
data.table.push(kitchen10)
data.table.push(kitchen11)
data.table.push(kitchen12)
data.table.push(kitchen13)
data.table.push(kitchen14)

fs.writeFile(configFile1, JSON.stringify(data), function (err) {
    if (err) throw err;
    console.log('complete 1,2,3,4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14');
}
);


/* GET kitchen listing. */
router.get('/kitchen', function (req, res, next) {
    fs.readFile(configFile1, function (err, data) {
        if (err) {
            console.log(err);
        }
        let kitchens = JSON.parse(data);
        console.log(kitchens);
        console.log(configFile1)
        res.send(kitchens);
    })

});

module.exports = router;
