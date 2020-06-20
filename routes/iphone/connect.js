const { Pool } = require('pg')
 const pool = new Pool({
     user: 'rosana',
     host: 'localhost',
     database: 'Api_DB',
     password: 'testing4546.',
     port: 5432
 })

// const pool = new Pool({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'postgres',
//     password: '********',
//     port: 5432
// })


database = "Api_DB"

//database is in docker - port 5432

//Example of SELECT on test1 database

// pool.query('SELECT id, name, lastname FROM test1 as Result', (err, res) => {
//     //console.log(err, res)
//       if (err) { 
//        console.log(err) }
//     console.log("ID of this user is " + res.rows[0].id + " and name of this user is " + res.rows[0].name + res.rows[0].lastname)
//     pool.end()
// })


try {

    //promises

    function tablePerformance() {
        return new Promise(resolve => {
            resolve

            pool.query('CREATE TABLE performance ( \
            id SERIAL PRIMARY KEY, \
            title varchar(50))', function (err, res) {
                if (err) {
                    console.log(err)
                }
                setTimeout(() => {
                    resolve("Table performance created!");
                }, 1000);
               
            })
        })


    }

    function tableCharging() {
        return new Promise(resolve => {
            resolve

            pool.query('CREATE TABLE charging( \
            id SERIAL PRIMARY KEY, \
            title varchar(150) \
            )', function (err, res) {
                if (err) {
                    console.log(err)
                }
                setTimeout(() => {
                    resolve("Table charging created!");
                }, 1000);
               
            })
        })


    }

    function tableDual() {
        return new Promise(resolve => {
            resolve
            pool.query('CREATE TABLE dual( \
            id SERIAL PRIMARY KEY, \
            title varchar(150) \
            )', function (err, res) {
                if (err) {
                    console.log(err)
                }
                setTimeout(() => {
                    resolve("Table dual created!");
                }, 1000);
               
            })
        })

    }

    function tableFourG_bands() {
        return new Promise(resolve => {
            resolve

            pool.query('CREATE TABLE fourG_bands( \
            id SERIAL PRIMARY KEY, \
            title varchar(150) \
            )', function (err, res) {
                if (err) {
                    console.log(err)
                }
                setTimeout(() => {
                    resolve("Table fourG_bands created!");
                }, 1000);
               
            })
        })


    }

    function tableProtection() {
        return new Promise(resolve => {
            resolve

            pool.query('CREATE TABLE protection( \
        id SERIAL PRIMARY KEY, \
        title varchar(150) \
        )', function (err, res) {
                if (err) {
                    console.log(err)
                }
                setTimeout(() => {
                    resolve("Table protection created!");
                }, 1000);
                
            })
        })


    }

    function tableSensors() {
        return new Promise(resolve => {
            resolve

            pool.query('CREATE TABLE sensors( \
        id SERIAL PRIMARY KEY, \
        title varchar(150) \
        )', function (err, res) {
                if (err) {
                    console.log(err)
                }
                setTimeout(() => {
                    resolve("Table sensors created!");
                }, 1000);
                
            })
        })


    }

    function tableSim() {
        return new Promise(resolve => {
            resolve

            pool.query('CREATE TABLE sim( \
            id SERIAL PRIMARY KEY, \
            title varchar(150) \
            )', function (err, res) {
                if (err) {
                    console.log(err)
                }
                setTimeout(() => {
                    resolve("Table sim created!");
                }, 1000);
               
            })
        })


    }

    function tableTechnology() {
        return new Promise(resolve => {
            resolve

            pool.query('CREATE TABLE technology( \
        id SERIAL PRIMARY KEY, \
        title varchar(150) \
        )', function (err, res) {
                if (err) {
                    console.log(err)
                }
                setTimeout(() => {
                    resolve("Table technology created!");
                }, 1000);
                
            })
        })


    }

    function tableThreeG_bands() {
        return new Promise(resolve => {
            resolve

            pool.query('CREATE TABLE threeG_bands( \
        id SERIAL PRIMARY KEY, \
        title varchar(150) \
        )', function (err, res) {
                if (err) {
                    console.log(err)
                }
                setTimeout(() => {
                    resolve("Table threeG_bands created!");
                }, 1000);
               
            })
        })


    }

    function tableTriple() {
        return new Promise(resolve => {
            resolve
            pool.query('CREATE TABLE triple( \
            id SERIAL PRIMARY KEY, \
            title varchar(150) \
            )', function (err, res) {
                if (err) {
                    console.log(err)
                }
                setTimeout(() => {
                    resolve("Table triple created!");
                }, 1000);
                
            })
        })


    }

    function tableTwoG_bands() {
        return new Promise(resolve => {
            resolve

            pool.query('CREATE TABLE twoG_bands( \
            id SERIAL PRIMARY KEY, \
            title varchar(150) \
            )', function (err, res) {
                if (err) {
                    console.log(err)
                }
                setTimeout(() => {
                    resolve("Table twoG_bands created!");
                }, 1000);
               
            })
        })


    }

    // tables with foreign keys
    function tableTests() {
        return new Promise(resolve => {
            resolve
            pool.query('CREATE TABLE tests ( \
                id SERIAL PRIMARY KEY, \
                performanceid int, \
                FOREIGN KEY (performanceid) REFERENCES performance(id), \
                display varchar(150), \
                camera varchar(150), \
                loudspeaker varchar(150), \
                audio_quality varchar(150), \
                battery_life varchar(150) \
                )', function (err, res) {
                if (err) {
                    console.log(err)
                }
                setTimeout(() => {
                    resolve("Table tests created!");
                }, 1000);
            })

        })
    }
    function tableBattery() {
        return new Promise(resolve => {
            resolve
            pool.query('CREATE TABLE battery ( \
                id SERIAL PRIMARY KEY, \
                title varchar(150), \
                chargingid int, \
                FOREIGN KEY (chargingid) REFERENCES charging(id), \
                talk_time varchar(150), \
                music_play varchar(150) \
                )', function (err, res) {
                if (err) {
                    console.log(err)
                }
                setTimeout(() => {
                    resolve("Table battery created!");
                }, 1000);
            })

        })
    }


    function tableMisc() {
        return new Promise(resolve => {
            resolve
            pool.query('CREATE TABLE misc ( \
                id SERIAL PRIMARY KEY, \
                colors varchar(150), \
                models varchar(150), \
                sar varchar(150), \
                sar_eu varchar(150), \
                price varchar(100) \
                )', function (err, res) {
                if (err) {
                    console.log(err)
                }
                setTimeout(() => {
                    resolve("Table misc created!");
                }, 1000);
            
            })

        })
    }


    function tableFeatures() {
        return new Promise(resolve => {
            resolve
            pool.query('CREATE TABLE features( \
                id SERIAL PRIMARY KEY, \
                sensorsid int, \
                FOREIGN KEY (sensorsid) REFERENCES sensors(id) \
                )', function (err, res) {
                if (err) {
                    console.log(err)
                }
                setTimeout(() => {
                    resolve("Table features created!");
                }, 1000);
                
            })

        })
    }

    function tableComms() {
        return new Promise(resolve => {
            resolve
            pool.query('CREATE TABLE comms( \
                id SERIAL PRIMARY KEY, \
                wlan varchar(150), \
                bluetooth varchar(150), \
                gps varchar(150), \
                nfc varchar(150), \
                radio varchar(150), \
                usb varchar(150) \
                )', function (err, res) {
                if (err) {
                    console.log(err)
                }
                setTimeout(() => {
                    resolve("Table comms created!");
                }, 1000);
               
            })

        })
    }

    function tableSound() {
        return new Promise(resolve => {
            resolve
            pool.query('CREATE TABLE sound( \
                id SERIAL PRIMARY KEY, \
                loudspeaker varchar(150), \
                jack_3_5mm varchar(20) \
                )', function (err, res) {
                if (err) {
                    console.log(err)
                }
                setTimeout(() => {
                    resolve("Table sound created!");
                }, 1000);
               
            })

        })
    }



    function tableSelfieCamera() {
        return new Promise(resolve => {
            resolve
            pool.query('CREATE TABLE selfie_camera( \
                id SERIAL PRIMARY KEY, \
                dualid int, \
                FOREIGN KEY (dualid) REFERENCES dual(id), \
                features varchar(150), \
                video varchar(150) \
                )', function (err, res) {
                if (err) {
                    console.log(err)
                }
                setTimeout(() => {
                    resolve("Table selfie_camera created!");
                }, 1000);
               
            })

        })
    }



    function tableMainCamera() {
        return new Promise(resolve => {
            resolve
            pool.query('CREATE TABLE main_camera( \
                id SERIAL PRIMARY KEY, \
                tripleid int, \
                FOREIGN KEY (tripleid) REFERENCES triple(id), \
                features varchar(150), \
                video varchar(150) \
                )', function (err, res) {
                if (err) {
                    console.log(err)
                }
                setTimeout(() => {
                    resolve("Table main_camera created!");
                }, 1000);
               
            })

        })
    }

    function tableMemory() {
        return new Promise(resolve => {
            resolve
            pool.query('CREATE TABLE memory ( \
                id SERIAL PRIMARY KEY, \
                cardslot varchar(20), \
                internal varchar(250) \
                )', function (err, res) {
                if (err) {
                    console.log(err)
                }
                setTimeout(() => {
                    resolve("Table memory created!");
                }, 1000);
               
            })

        })
    }

    function tablePlatform() {
        return new Promise(resolve => {
            resolve
            pool.query('CREATE table platform ( \
                id SERIAL PRIMARY KEY, \
                os varchar(100), \
                chipset varchar(150), \
                cpu varchar(150), \
                gpu varchar(150) \
                )', function (err, res) {
                if (err) {
                    console.log(err)
                }
                setTimeout(() => {
                    resolve("Table platform created!");
                }, 1000);
                
            })

        })
    }



    function tableDisplay() {
        return new Promise(resolve => {
            resolve
            pool.query('CREATE TABLE display( \
                id SERIAL PRIMARY KEY, \
                type varchar(150), \
                size varchar(150), \
                resolution varchar(150), \
                protectionid int, \
                FOREIGN KEY (protectionid) REFERENCES protection(id) \
                )', function (err, res) {
                if (err) {
                    console.log(err)
                }
                setTimeout(() => {
                    resolve("Table display created!");
                }, 1000);
               
            })

        })
    }



    function tableBody() {
        return new Promise(resolve => {
            resolve
            pool.query('CREATE TABLE body ( \
                id SERIAL PRIMARY KEY, \
                dimension varchar(150), \
                weight varchar(150), \
                build varchar(100), \
                simid int, \
                FOREIGN KEY (simid) REFERENCES sim(id) \
                )', function (err, res) {
                if (err) {
                    console.log(err)
                }
                setTimeout(() => {
                    resolve("Table body created!");
                }, 1000);
                
            })

        })
    }

    function tableLaunch() {
        return new Promise(resolve => {
            resolve
            pool.query('CREATE TABLE launch ( \
                id SERIAL PRIMARY KEY, \
                announced varchar(150), \
                status varchar(150) \
                )', function (err, res) {
                if (err) {
                    console.log(err)
                }
                setTimeout(() => {
                    resolve("Table launch created!");
                }, 1000);
               
            })

        })
    }







    function tableNetwork() {
        return new Promise(resolve => {
            resolve
            pool.query('CREATE TABLE network( \
                id SERIAL PRIMARY KEY, \
                technologyid int, \
                twoG_bandsid int, \
                threeG_bandsid int, \
                fourG_bandsid int, \
                FOREIGN KEY (technologyid) REFERENCES technology(id), \
                FOREIGN KEY (twoG_bandsid) REFERENCES twoG_bands(id), \
                FOREIGN KEY (threeG_bandsid) REFERENCES threeG_bands(id), \
                FOREIGN KEY (fourG_bandsid) REFERENCES fourG_bands(id), \
                speed varchar(150) \
                )', function (err, res) {
                if (err) {
                    console.log(err)
                }
                setTimeout(() => {
                    resolve("Table network created!");
                }, 1000);
               
            })

        })
    }

    function tablePhone() {
        return new Promise(resolve => {
            resolve
            pool.query('CREATE TABLE phone ( \
                id SERIAL PRIMARY KEY, \
                name varchar(250), \
                released varchar(250), \
                weight varchar(50), \
                thickness varchar(50), \
                guid varchar(100), \
                os varchar(100), \
                storage varchar(100), \
                size varchar(50), \
                camera varchar(50), \
                memoryid int, \
                batteryid int, \
                networkid int, \
                launchid int, \
                bodyid int, \
                displayid int, \
                platformid int, \
                main_cameraid int, \
                selfie_cameraid int, \
                soundid int, \
                commsid int, \
                featuresid int, \
                miscid int, \
                testsid int, \
                FOREIGN KEY (memoryid) REFERENCES memory(id), \
                FOREIGN KEY (batteryid) REFERENCES battery(id), \
                FOREIGN KEY (networkid) REFERENCES network(id), \
                FOREIGN KEY (launchid)REFERENCES launch(id), \
                FOREIGN KEY (bodyid) REFERENCES body(id), \
                FOREIGN KEY (displayid) REFERENCES display(id), \
                FOREIGN KEY (platformid) REFERENCES platform(id), \
                FOREIGN KEY (main_cameraid) REFERENCES main_camera(id), \
                FOREIGN KEY (selfie_cameraid) REFERENCES selfie_camera(id), \
                FOREIGN KEY (soundid) REFERENCES sound(id), \
                FOREIGN KEY (commsid) REFERENCES comms(id), \
                FOREIGN KEY (featuresid) REFERENCES features(id), \
                FOREIGN KEY (miscid) REFERENCES misc(id), \
                FOREIGN KEY (testsid) REFERENCES tests(id) \
                )', function (err, res) {
                if (err) {
                    console.log(err)
                }
                setTimeout(() => {
                    resolve("Table phone created!");
                }, 1000);
               
            })

        })
    }


    async function asyncCall() {
        console.log('Resolving...');

        //calling promises...
        const result = await tablePerformance();
        console.log(result);
        const result1 = await tableTests();
        console.log(result1);
        const result2 = await tableCharging();
        console.log(result2);
        const result3 =  await tableBattery();
        console.log(result3);
        const result4 = await tableSensors();
        console.log(result4);
        const result5 = await tableDual();
        console.log(result5);
        const result6 = await tableTriple();
        console.log(result6);
        const result7 = await tableProtection();
        console.log(result7);
        const result8 = await tableSim();
        console.log(result8);
        const result9 = await tableFourG_bands();
        console.log(result9);
        const result10 = await tableThreeG_bands();
        console.log(result10);
        const result11 =  await tableTwoG_bands();
        console.log(result11);
        const result12= await tableTechnology();
        console.log(result12);
        const result13 = await tableMisc();
        console.log(result13);
        const result14 = await tableFeatures();
        console.log(result14);
        const result15 = await tableComms();
        console.log(result15);
        const result16 = await tableSound();
        console.log(result16);
        const result17 = await tableSelfieCamera();
        console.log(result17);
        const result18 = await tableMainCamera();
        console.log(result18);
        const result19 = await tableMemory();
        console.log(result19);
        const result20 = await tablePlatform();
        console.log(result20);
        const result21 = await tableDisplay();
        console.log(result21);
        const result22 = await tableBody();
        console.log(result22);
        const result23 = await tableLaunch();
        console.log(result23);
        const result24 = await tableNetwork();
        console.log(result24);
        const result25 =await tablePhone();
        console.log(result25);

        console.log("Tables for phone are ready...")

    }

    asyncCall();

} catch (error) {

}
finally {
    console.log("Done")
}
