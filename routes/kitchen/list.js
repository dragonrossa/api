var express = require('express');
var router = express.Router();
const fs = require('fs');
path = require('path')

configFile4 = path.join(__dirname, '../../kitchen2.json'),

    router.get('/kitchen/:id', function (req, res) {

        console.log('Request Id:', req.params.id);
        fs.readFile(configFile4, function (err, data) {
            if (err) {
                console.log(err);

            }

            let kitchen = JSON.parse(data);


            //DOBAR - ne briši

           

            res.writeHead(200, {'Content-Type': 'text/plain;; charset=utf-8'});
            
            

             for (var i = 0; i < kitchen.table.length; i++) {
                if (req.params.id == kitchen.table[i].id) {
                    
                        var kitchen_user = "\nID: " + kitchen.table[i].id +
                            "\nManufacturer: " + kitchen.table[i].manufacturer +
                            "\nModel: " + kitchen.table[i].model +
                            "\nPicture: " + kitchen.table[i].picture + "\n";

                    
                }

            }

            res.write(kitchen_user)

            
            for (var i = 0; i < kitchen.table.length; i++) {
                if (req.params.id == kitchen.table[i].id) {
                    for (var j = 0; j < kitchen.table[i].color.color.length; j++) {
                        var color = []
                        color.push(kitchen.table[i].color.color[j].id + ": "+kitchen.table[i].color.color[j].type)
                        color.forEach(element => {
                            res.write(element + "\n")
                        });

                    }}}

                    for (var i = 0; i < kitchen.table.length; i++) {
                        if (req.params.id == kitchen.table[i].id) {
                            for (var j = 0; j < kitchen.table[i].detail.detail.length; j++) {
                                var detail = []
                                detail.push(kitchen.table[i].detail.detail[j].description)
                                detail.forEach(element => {
                                    res.write(element + "\n")
                                });
        
                            }}}
        
            res.end('\n');
        })
    })

module.exports = router;