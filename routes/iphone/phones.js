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

var phone = {
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
        ],
        TwoG_bands: [
            {
                id: "1",
                title: "GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2 (dual-SIM) - for China, CDMA 800 / 1900"
            }
        ],
        ThreeG_bands: [
            {
                id: "1",
                title: "HSDPA 850 / 900 / 1700(AWS) / 1900 / 2100, CDMA2000 1xEV-DO"
            }
        ],
        FourG_bands: [
            {
                id: "1",
                title: "	1, 2, 3, 4, 5, 7, 8, 11, 12, 13, 17, 18, 19, 20, 21, 25, 26, 28, 29, 30, 32, 34, 38, 39, 40, 41, 42, 46, 48, 66 - A2218"
            },
            {
                id: "2",
                title: "1, 2, 3, 4, 5, 7, 8, 12, 13, 14, 17, 18, 19, 20, 25, 26, 29, 30, 34, 38, 39, 40, 41, 42, 46, 48, 66, 71 - A2161"
            },
            {
                id: "3",
                title: "1, 2, 3, 4, 5, 7, 8, 12, 13, 14, 17, 18, 19, 20, 25, 26, 29, 30, 34, 38, 39, 40, 41, 42, 46, 48, 66, 71 - A2220"
            }
        ],
        Speed: "HSPA 42.2/5.76 Mbps, LTE-A 1.6 Gbps DL, EV-DO Rev.A 3.1 Mbps"

    },
    launch: {
        announced: "2019, September 10",
        status: "Available. Released 2019, September 20"

    },
    body: {
        dimension: "158 x 77.8 x 8.1 mm (6.22 x 3.06 x 0.32 in)",
        weight: "226 g (7.97 oz)",
        build: "Glass front (Gorilla Glass), glass back (Gorilla Glass), stainless steel frame",
        SIM: [{
            id: "1",
            title: "Single SIM (Nano-SIM and/or eSIM) or Dual SIM (Nano-SIM, dual stand-by) - for China"
        },
        {
            id: "2",
            title: "IP68 dust/water resistant (up to 4m for 30 mins)"
        },
        {
            id: "3",
            title: "Apple Pay (Visa, MasterCard, AMEX certified)"
        },
        ]
    },
    display: {
        type: "Super Retina XDR OLED capacitive touchscreen, 16M colors",
        size: "6.5 inches, 102.9 cm2 (~83.7% screen-to-body ratio)",
        resolution: "1242 x 2688 pixels, 19.5:9 ratio (~458 ppi density)",
        protection: [
            {
                id: "1",
                title: "Scratch-resistant glass, oleophobic coating"
            },
            {
                id: "2",
                title: "800 nits max brightness (advertised)"
            },
            {
                id: "3",
                title: "Dolby Vision"
            },
            {
                id: "4",
                title: "HDR10"
            },
            {
                id: "5",
                title: "Wide color gamut"
            },
            {
                id: "6",
                title: "True-tone"
            },
            {
                id: "7",
                title: "120Hz touch-sensing"
            }

        ]
    },
    platform: {
        OS: "iOS 13, upgradable to iOS 13.4",
        Chipset: "Apple A13 Bionic (7 nm+)",
        CPU: "Hexa-core (2x2.65 GHz Lightning + 4x1.8 GHz Thunder)",
        GPU: "Apple GPU (4-core graphics)"
    },
    memory: {
        card_slot: "No",
        internal: "64GB 4GB RAM, 256GB 4GB RAM, 512GB 4GB RAM NVMe"
    },
    main_camera: {
        triple: [
            {
                id: "1",
                title: "12 MP, f/1.8, 26mm (wide), 1/2.55'', 1.4µm, dual pixel PDAF, OIS"
            },
            {
                id: "2",
                title: "12 MP, f/2.0, 52mm (telephoto), 1/3.4'', 1.0µm, PDAF, OIS, 2x optical zoom"
            },
            {
                id: "3",
                title: "12 MP, f/2.4, 13mm (ultrawide)"
            },
        ],
        features: "Quad-LED dual-tone flash, HDR (photo/panorama)",
        video: "4K@24/30/60fps, 1080p@30/60/120/240fps, HDR, stereo sound rec."
    },
    selfie_camera: {
        dual: [{
            id: "1",
            title: "12 MP, f/2.2, 23mm (wide)"
        }, {
            id: "2",
            title: "SL 3D, (depth/biometrics sensor)"
        }
        ],
        features: "HDR",
        video: "4K@24/30/60fps, 1080p@30/60/120fps, gyro-EIS"
    },
    sound: {
        loudspeaker: "Yes, with stereo speakers",
        jack_3_5mm: "No"
    },
    comms: {
        WLAN: "Wi-Fi 802.11 a/b/g/n/ac/ax, dual-band, hotspot",
        bluetooth: "5.0, A2DP, LE",
        GPS: "Yes, with A-GPS, GLONASS, GALILEO, QZSS",
        NFC: "Yes",
        Radio: "No",
        USB: "2.0, proprietary reversible connector"
    },
    features: {
        sensors: [
            {
                id: "1",
                title: "Face ID, accelerometer, gyro, proximity, compass, barometer"
            },
            {
                id: "2",
                title: "Siri natural language commands and dictation"
            }
        ]
    },
    battery: {
        title: "	Non-removable Li-Ion 3969 mAh battery (15.04 Wh)",
        charging: [
            {
                id: "1",
                title: "Fast charging 18W, 50% in 30 min (advertised)"
            },
            {
                id: "2",
                title: "USB Power Delivery 2.0"
            },
            {
                id: "3",
                title: "Qi wireless charging"
            }

        ],
        talk_time: "Up to 20 h (multimedia)",
        music_play: "Up to 80 h"
    },
    misc: {
        colors: "Space Gray, Silver, Gold, Midnight Green (matte colors)",
        models: "A2218, A2161, A2220",
        SAR: "1.16 W/kg (head), 1.17 W/kg (body)   ",
        SAR_EU: "0.95 W/kg (head), 0.99 W/kg (body)    ",
        Price: "€ 1,159.00 / $ 1,029.99 / £ 989.00 / ₹ 117,100"
    },
    tests: {
        performance: [{
            id: "1",
            title: "AnTuTu: 459713 (v7), 536883 (v8)"
        },
        {
            id: "2",
            title: "GeekBench: 13870 (v4.4), 3503 (v5.1)"
        },
        {
            id: "3",
            title: "GFXBench: 57fps (ES 3.1 onscreen)"
        }
        ],
        display: "Contrast ratio: Infinite (nominal)",
        camera: "Photo / Video",
        loudspeaker: "Voice 71dB / Noise 74dB / Ring 79dB",
        audio_quality: "Noise -94.3dB / Crosstalk -81.5dB",
        battery_life: "Endurance rating 102h"
    }

}

var data = {}
data.phone = []
data.phone.push(phone)
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
