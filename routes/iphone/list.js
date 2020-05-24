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

                    var iphone_phone = "ID: " + iphone.phone[i].id +
                        "\nName: " + iphone.phone[i].name +
                        "\nReleased: " + iphone.phone[i].released +
                        "\nWeight: " + iphone.phone[i].weight +
                        "\nThickness: " + iphone.phone[i].thickness +
                        "\nGuid: " + iphone.phone[i].guid +
                        "\nOS: " + iphone.phone[i].os +
                        "\nStorage: " + iphone.phone[i].storage +
                        "\nSize: " + iphone.phone[i].size +
                        "\nCamera: " + iphone.phone[i].camera +
                        "\nMemory-Card Slot: " + iphone.phone[i].memory.card_slot +
                        "\nMemory-Internal: " + iphone.phone[i].memory.internal +
                        "\nBattery: " + iphone.phone[i].battery.title + "\n";



                    var iphone_phone2 = "Speed: " + iphone.phone[i].network.Speed +
                        "\nLaunch:\nAnnounced: " + iphone.phone[i].launch.announced +
                        "\nStatus: " + iphone.phone[i].launch.status +
                        "\nBody:\nDimensions: " + iphone.phone[i].body.dimension +
                        "\nWeight: " + iphone.phone[i].body.weight +
                        "\nBuild: " + iphone.phone[i].body.build + "\n";

                    console.log(iphone.phone[i].battery)

                    phone_json = iphone.phone[i]

                    var iphone_phone3 = "Display: " + iphone.phone[i].display.type +
                        "\nSize: " + iphone.phone[i].display.size +
                        "\nResolution: " + iphone.phone[i].display.resolution + "\n";
                    var iphone_phone4 = "Platform: " + iphone.phone[i].platform.OS +
                        "\nChipset: " + iphone.phone[i].platform.Chipset +
                        "\nCPU: " + iphone.phone[i].platform.CPU +
                        "\nGPU: " + iphone.phone[i].platform.GPU + "\n"
                    var iphone_phone5 = "Features: " + iphone.phone[i].main_camera.features +
                        "\nVideo: " + iphone.phone[i].main_camera.video + "\n"
                    var iphone_phone6 = "Features: " + iphone.phone[i].selfie_camera.features +
                        "\nVideo: " + iphone.phone[i].selfie_camera.video + "\n"
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
                for (var j = 0; j < iphone.phone[i].battery.charging.length; j++) {

                    var battery = []
                    battery.push(iphone.phone[i].battery.charging[j].title)
                    battery.forEach(element => {
                        res.write(element + "\n")
                    });
                }
                if (req.params.id == iphone.phone[i].id) {
                    //Technology
                    res.write("Technology:\n")
                    for (var j = 0; j < iphone.phone[i].network.technology.length; j++) {

                        var technology = []
                        technology.push(iphone.phone[i].network.technology[j].title);
                        technology.forEach(element => {
                            res.write(element + "\n")
                        });

                    }
                }
                //2G Bands
                res.write("2G Bands:\n")
                for (var j = 0; j < iphone.phone[i].network.TwoG_bands.length; j++) {

                    var TwoG_bands = []
                    TwoG_bands.push(iphone.phone[i].network.TwoG_bands[j].title)
                    TwoG_bands.forEach(element => {
                        res.write(element + "\n")
                    });
                }
                //3G Bands
                res.write("3G Bands:\n")
                for (var j = 0; j < iphone.phone[i].network.ThreeG_bands.length; j++) {

                    var ThreeG_bands = []
                    ThreeG_bands.push(iphone.phone[i].network.ThreeG_bands[j].title)
                    ThreeG_bands.forEach(element => {
                        res.write(element + "\n")
                    });
                }
                //4G Bands
                res.write("4G Bands:\n")
                for (var j = 0; j < iphone.phone[i].network.FourG_bands.length; j++) {

                    var FourG_bands = []
                    FourG_bands.push(iphone.phone[i].network.FourG_bands[j].title)
                    FourG_bands.forEach(element => {
                        res.write(element + "\n")
                    });
                }

                res.write(iphone_phone2)
                //SIM
                res.write("SIM:\n")
                for (var j = 0; j < iphone.phone[i].body.SIM.length; j++) {
                    var SIM = []
                    SIM.push(iphone.phone[i].body.SIM[j].title)
                    SIM.forEach(element => {
                        res.write(element + "\n")
                    });
                }

                res.write(iphone_phone3)

                //Protection
                res.write("Protection:\n")
                for (var j = 0; j < iphone.phone[i].display.protection.length; j++) {
                    var protection = []
                    protection.push(iphone.phone[i].display.protection[j].title)
                    protection.forEach(element => {
                        res.write(element + "\n")
                    });
                }

                res.write(iphone_phone4)

                //Main camera - triple camera
                res.write("Triple camera:\n")
                for (var j = 0; j < iphone.phone[i].main_camera.triple.length; j++) {
                    var main_camera = []
                    main_camera.push(iphone.phone[i].main_camera.triple[j].title)
                    main_camera.forEach(element => {
                        res.write(element + "\n")
                    });
                }

                res.write(iphone_phone5)

                //Selfie camera
                res.write("Selfie camera:\n")
                for (var j = 0; j < iphone.phone[i].selfie_camera.dual.length; j++) {
                    var selfie_camera = []
                    selfie_camera.push(iphone.phone[i].selfie_camera.dual[j].title)
                    selfie_camera.forEach(element => {
                        res.write(element + "\n")
                    });
                }

                res.write(iphone_phone6)
                res.write(iphone_phone7)

                //Features - sensors
                res.write("Features - sensors:\n")
                for (var j = 0; j < iphone.phone[i].features.sensors.length; j++) {
                    var sensors = []
                    sensors.push(iphone.phone[i].features.sensors[j].title)
                    sensors.forEach(element => {
                        res.write(element + "\n")
                    });
                }

                res.write(iphone_phone8)
                //Tests - performance
                res.write("Tests - performance:\n")
                for (var j = 0; j < iphone.phone[i].tests.performance.length; j++) {
                    var performance = []
                    performance.push(iphone.phone[i].tests.performance[j].title)
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