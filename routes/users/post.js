const { Pool } = require('pg')
var express = require('express');
var router = express.Router();
const fs = require('fs');
path = require('path')
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var cors = require('cors')
router.use(cors())

const pool = new Pool({
    user: 'rosana',
    host: 'localhost',
    database: 'Api_DB',
    password: 'testing4546.',
    port: 5432
})

//  router.get('/users/new/get', function (req, res) {

//      res.header("Access-Control-Allow-Origin", "*");

//      console.log(req.body)

//      res.send(req.body)


// // })

router.get('/usersView',function(req,res){
    res.sendFile(path.join(__dirname, '..', '..', 'client', 'index.html'));
})



//insert new user in Users table

router.post('/users/new/post', jsonParser, function (req, res) {

    res.header("Access-Control-Allow-Origin", "*");

   

    console.log(req.body.name)
    console.log(req.body.initials)
    console.log(req.body.eyeColor)
    console.log(req.body.age)
    console.log(req.body.guid)
    console.log(req.body.email)

    const name = req.body.name;
    const initials = req.body.initials;
    const eyeColor = req.body.eyeColor;
    const age = req.body.age;
    const guid = req.body.guid;
    const email = req.body.email;




    try {
        function insertUser() {
            return new Promise((resolve, reject) =>
                pool.query("INSERT INTO users(name, initials, eyeColor, age, guid, email) VALUES($1, $2, $3, $4, $5, $6)", [name, initials, eyeColor, age, guid, email], (err, res) => {
                    //console.log(err, res)
                    if (err) {
                        console.log(err)

                    }
                    setTimeout(() => {
                        resolve("New user inserted!");
                    }, 1000);


                })

            )
        }

        function selectUserID() {
            return new Promise((resolve, reject) =>
                pool.query("SELECT id FROM users as Result WHERE name=$1", [name], (err, res) => {
                    //console.log(err, res)
                    if (err) {
                        console.log(err)

                    }
                    setTimeout(() => {

                        resolve("New user inserted into user.json!");
                    }, 1000);

                    id = res.rows[0].id;
                    return id;

                })

            )
        }



        async function asyncCall() {
            console.log('calling');
            const insert = await insertUser();
            console.log(insert)
            const select = await selectUserID();
            console.log(select)
            await pool.end();
            console.log("Pool closed")

            configFile = path.join(__dirname, '../../user.json')

            var user = {
                name: req.body.name,
                initials: req.body.initials,
                id: id,
                eyeColor: req.body.eyeColor,
                age: req.body.age,
                guid: req.body.guid,
                email: req.body.email
            }



            var data = {}
            data.table = []
            data.table.push(user)

            // data.table.push(user5)
            fs.writeFile(configFile, JSON.stringify(data), function (err) {
                if (err) throw err;
                console.log('New user inserted in users.json');
            }
            );

            

        }

        asyncCall();

    } catch (error) {
        console.log(error)


    }
    finally {
        console.log("Inserted new user in database...")

    }



    res.send(req.body)

})



module.exports = router;