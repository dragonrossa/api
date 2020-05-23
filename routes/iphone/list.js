var express = require('express');
var router = express.Router();
const fs = require('fs');
path = require('path')

configFile = path.join(__dirname, '../../iphone.json'),

    router.get('/phones/:id', function (req, res) {

        console.log('Request Id:', req.params.id);
        fs.readFile(configFile, function (err, data) {
            if (err) {
                console.log(err);

            }

            let iphone = JSON.parse(data);


            res.writeHead(200, { 'Content-Type': 'text/plain;; charset=utf-8' });



            for (var i = 0; i < iphone.phone.length; i++) {
                if (req.params.id == iphone.phone[i].id) {

                    var iphone_phone = "\nID: " + iphone.phone[i].id +
                        "\nName: " + iphone.phone[i].name +
                        "\nReleased: " + iphone.phone[i].released +
                        "\nWeight: " + iphone.phone[i].weight +
                        "\nThickness:" + iphone.phone[i].thickness +
                        "\nGuid" + iphone.phone[i].guid +
                        "\nOS" + iphone.phone[i].os +
                        "\nStorage" + iphone.phone[i].storage +
                        "\nSize" + iphone.phone[i].size +
                        "\nCamera" + iphone.phone[i].camera +
                        "\nMemory" + iphone.phone[i].memory +
                        "\nBattery" + iphone.phone[i].battery +
                        "\n";


                }

            }

            res.write(iphone_phone)


            // for (var i = 0; i < kitchen.table.length; i++) {
            //     if (req.params.id == kitchen.table[i].id) {
            //         for (var j = 0; j < kitchen.table[i].color.color.length; j++) {
            //             var color = []
            //             color.push(kitchen.table[i].color.color[j].id + ": "+kitchen.table[i].color.color[j].type)
            //             color.forEach(element => {
            //                 res.write(element + "\n")
            //             });

            //         }}}

            //         for (var i = 0; i < kitchen.table.length; i++) {
            //             if (req.params.id == kitchen.table[i].id) {
            //                 for (var j = 0; j < kitchen.table[i].detail.detail.length; j++) {
            //                     var detail = []
            //                     detail.push(kitchen.table[i].detail.detail[j].description)
            //                     detail.forEach(element => {
            //                         res.write(element + "\n")
            //                     });

            //                 }}}

            res.end('\n');
        })
    })

module.exports = router;