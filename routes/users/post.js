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

//  router.get('/users/:userId/books/:bookId', function (req, res) {
//      console.log(req.params.userId, req.params.bookId)
//      res.send(req.params)

//  })

var users = []
var list = []




router.get('/name/:name/initials/:initials/eyeColor/:eyeColor/age/:age/guid/:guid/email/:email', function (req, res) {
    console.log(req.params.name, req.params.initials, req.params.eyeColor, req.params.age)
    // res.render(req.params)

    if (users.length > 0) {
        users = []
    }

    users.push(req.params)

    // console.log(users)
    res.send(req.params)


})



router.get('/usersView', function (req, res) {
    console.log("Usli smo!")
    console.log(users)
    console.log(users[0].name)
    res.send(users)

})


router.get('/user',function(req,res){

    try {

        

        function selectUser() {
            return new Promise((resolve, reject) => {

    
                pool.query('SELECT id, name, initials, eyeColor, age, guid, email FROM users as Result', (err, res) => {
                    //console.log(err, res)
                    if (err) {
                        console.log(err)
                    }
                    if (list.length > 0) {
                        list = []
                    }
    
                         setTimeout(() => {
                             for(let i = 0;i<res.rows.length;i++){
                                 console.log("ID of this user is " + res.rows[i].id + " and name of this user is " + res.rows[i].name)
                                 list.push(res.rows)
                                 
                            resolve(res.rows);
                         }
                        }, 1000);

                       // console.log(list)
                        
                     })
    
                })
            }

            async function asyncCall() {
                console.log('calling');
                const select = await selectUser();
                console.log(select)
            }

            asyncCall();
        
    } catch (error) {
        console.log(error)
        
    }
    finally{
        res.send(list)
    }
    

})

// if (users.length > 0) {
//     users = []
// }

//console.log(users[0].name)

// router.get('/users/name/:name/initials/:initials/eyecolor/:eyecolor/age/:age/guid/:guid/email/:email', function (req, res) {
//     console.log(req.params.name + ", ",
//         req.params.initials + ", ",
//         req.params.eyeColor + ", ",
//         req.params.age + ", ",
//         req.params.guid + ", ",
//         req.params.email)

//     res.send(req.params)
// })

// router.get('/usersView', jsonParser, function (req, res) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.sendFile(path.join(__dirname, '..', '..', 'client', 'index.html'));
//     console.log(req.params.name + ", ",
//         req.params.initials + ", ",
//         req.params.eyeColor + ", ",
//         req.params.age + ", ",
//         req.params.guid + ", ",
//         req.params.email)

//     res.send(req.params)
// })

//   router.get('/users/new/get', function (req, res) {

//       res.header("Access-Control-Allow-Origin", "*");

//      // res.sendFile(path.join(__dirname, '..', '..', 'client', 'usersView.html'));

//       console.log(req.body)

//       res.send(req.body)


//   })

// router.get('/usersView', function (req, res) {
//     res.sendFile(path.join(__dirname, '..', '..', 'client', 'index.html'));
// })

// router.get('/usersView', function (req, res) {
//     console.log("Get is ok")
// })



//insert new user in Users table

router.post('/users/new/post', jsonParser, function (req, res) {

    res.header("Access-Control-Allow-Origin", "*");

    // console.log(req.body.name)
    // console.log(req.body.initials)
    // console.log(req.body.eyeColor)
    // console.log(req.body.age)
    // console.log(req.body.guid)
    // console.log(req.body.email)

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


            configFile3 = path.join(__dirname, '../../client/json/user.json')
            //  console.log(configFile3)


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


            fs.writeFile(configFile3, JSON.stringify(data), function (err) {
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