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
                phone_json = iphone.phone[i]
                if (req.params.id == phone_json.id) {
                    var iphone_phone = "ID: " + phone_json.id +
                        "\nName: " + phone_json.name +
                        "\nReleased: " + phone_json.released +
                        "\nWeight: " + phone_json.weight +
                        "\nThickness: " + phone_json.thickness +
                        "\nGuid: " + phone_json.guid +
                        "\nOS: " + phone_json.os +
                        "\nStorage: " + phone_json.storage +
                        "\nSize: " + phone_json.size +
                        "\nCamera: " + phone_json.camera +
                        "\nMemory-Card Slot: " + phone_json.memory.card_slot +
                        "\nMemory-Internal: " + phone_json.memory.internal +
                        "\nBattery: " + phone_json.battery.title + "\n";



                    var iphone_phone2 = "Speed: " + phone_json.network.Speed +
                        "\nLaunch:\nAnnounced: " + phone_json.launch.announced +
                        "\nStatus: " + phone_json.launch.status +
                        "\nBody:\nDimensions: " + phone_json.body.dimension +
                        "\nWeight: " + phone_json.body.weight +
                        "\nBuild: " + phone_json.body.build + "\n";

                    console.log(phone_json.battery)

                    

                    var iphone_phone3 = "Display: " + phone_json.display.type +
                        "\nSize: " + phone_json.display.size +
                        "\nResolution: " + phone_json.display.resolution + "\n";
                    var iphone_phone4 = "Platform: " + phone_json.platform.OS +
                        "\nChipset: " + phone_json.platform.Chipset +
                        "\nCPU: " + phone_json.platform.CPU +
                        "\nGPU: " + phone_json.platform.GPU + "\n"
                    var iphone_phone5 = "Features: " + phone_json.main_camera.features +
                        "\nVideo: " + phone_json.main_camera.video + "\n"
                    var iphone_phone6 = "Features: " + phone_json.selfie_camera.features +
                        "\nVideo: " + phone_json.selfie_camera.video + "\n"
                    var iphone_phone7 = "Sound: " + phone_json.sound.loudspeaker +
                        "\nJack 3_5mm: " + phone_json.sound.jack_3_5mm +
                        "\nWLAN:" + phone_json.comms.WLAN +
                        "\nBluetooth: " + phone_json.comms.Bluetooth +
                        "\nGPS:" + phone_json.comms.GPS +
                        "\nNFC:" + phone_json.comms.NFC +
                        "\nRadio: " + phone_json.comms.Radio +
                        "\nUSB:" + phone_json.comms.USB +
                        "\n";

                    var iphone_phone8 = "Misc: Colors:" + phone_json.misc.colors +
                        "\nModels: " + phone_json.misc.models +
                        "\nSAR: " + phone_json.misc.SAR +
                        "\nSAR_EU: " + phone_json.misc.SAR_EU +
                        "\nPrice: " + phone_json.misc.Price + "\n"

                    var iphone_phone9 = "Display:" + phone_json.tests.display + 
                    "\nCamera: " + phone_json.tests.camera + 
                    "\nLoudspeaker: " + phone_json.tests.loudspeaker +
                    "\nAudio quality: " + phone_json.tests.audio_quality +
                    "\nBattery life: " + phone_json.tests.battery_life + "\n"

                }

            }

            res.write(iphone_phone)



            for (var i = 0; i < iphone.phone.length; i++) {
                //Battery charging
                res.write("Batter charging:\n")
                for (var j = 0; j < phone_json.battery.charging.length; j++) {

                    var battery = []
                    battery.push(phone_json.battery.charging[j].title)
                    battery.forEach(element => {
                        res.write(element + "\n")
                    });
                }
                if (req.params.id == phone_json.id) {
                    //Technology
                    res.write("Technology:\n")
                    for (var j = 0; j < phone_json.network.technology.length; j++) {

                        var technology = []
                        technology.push(phone_json.network.technology[j].title);
                        technology.forEach(element => {
                            res.write(element + "\n")
                        });

                    }
                }
                //2G Bands
                res.write("2G Bands:\n")
                for (var j = 0; j < phone_json.network.TwoG_bands.length; j++) {

                    var TwoG_bands = []
                    TwoG_bands.push(phone_json.network.TwoG_bands[j].title)
                    TwoG_bands.forEach(element => {
                        res.write(element + "\n")
                    });
                }
                //3G Bands
                res.write("3G Bands:\n")
                for (var j = 0; j < phone_json.network.ThreeG_bands.length; j++) {

                    var ThreeG_bands = []
                    ThreeG_bands.push(phone_json.network.ThreeG_bands[j].title)
                    ThreeG_bands.forEach(element => {
                        res.write(element + "\n")
                    });
                }
                //4G Bands
                res.write("4G Bands:\n")
                for (var j = 0; j < phone_json.network.FourG_bands.length; j++) {

                    var FourG_bands = []
                    FourG_bands.push(phone_json.network.FourG_bands[j].title)
                    FourG_bands.forEach(element => {
                        res.write(element + "\n")
                    });
                }

                res.write(iphone_phone2)
                //SIM
                res.write("SIM:\n")
                for (var j = 0; j < phone_json.body.SIM.length; j++) {
                    var SIM = []
                    SIM.push(phone_json.body.SIM[j].title)
                    SIM.forEach(element => {
                        res.write(element + "\n")
                    });
                }

                res.write(iphone_phone3)

                //Protection
                res.write("Protection:\n")
                for (var j = 0; j < phone_json.display.protection.length; j++) {
                    var protection = []
                    protection.push(phone_json.display.protection[j].title)
                    protection.forEach(element => {
                        res.write(element + "\n")
                    });
                }

                res.write(iphone_phone4)

                //Main camera - triple camera
                res.write("Triple camera:\n")
                for (var j = 0; j < phone_json.main_camera.triple.length; j++) {
                    var main_camera = []
                    main_camera.push(phone_json.main_camera.triple[j].title)
                    main_camera.forEach(element => {
                        res.write(element + "\n")
                    });
                }

                res.write(iphone_phone5)

                //Selfie camera
                res.write("Selfie camera:\n")
                for (var j = 0; j < phone_json.selfie_camera.dual.length; j++) {
                    var selfie_camera = []
                    selfie_camera.push(phone_json.selfie_camera.dual[j].title)
                    selfie_camera.forEach(element => {
                        res.write(element + "\n")
                    });
                }

                res.write(iphone_phone6)
                res.write(iphone_phone7)

                //Features - sensors
                res.write("Features - sensors:\n")
                for (var j = 0; j < phone_json.features.sensors.length; j++) {
                    var sensors = []
                    sensors.push(phone_json.features.sensors[j].title)
                    sensors.forEach(element => {
                        res.write(element + "\n")
                    });
                }

                res.write(iphone_phone8)
                //Tests - performance
                res.write("Tests - performance:\n")
                for (var j = 0; j < phone_json.tests.performance.length; j++) {
                    var performance = []
                    performance.push(phone_json.tests.performance[j].title)
                    performance.forEach(element => {
                        res.write(element + "\n")
                    });
                }


            }
            res.write(iphone_phone9)


            res.end('\n');
        })
    })

module.exports = router;