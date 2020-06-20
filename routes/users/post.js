const { Pool } = require('pg')
var express = require('express');
var router = express.Router();
const fs = require('fs');
path = require('path')
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var cors = require('cors')
router.use(cors())

// const pool = new Pool({
//     user: 'rosana',
//     host: 'localhost',
//     database: 'Api_DB',
//     password: 'testing4546.',
//     port: 5432
// })

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '********',
    port: 5432
})



//  router.get('/users/:userId/books/:bookId', function (req, res) {
//      console.log(req.params.userId, req.params.bookId)
//      res.send(req.params)

//  })

var users = []
var list = []
var userDelete = []
var details = []



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


router.get('/name/:name/', function (req, res) {
    console.log(req.params.name)

    var usersName = req.params.name
    // res.render(req.params)

    if (users.length > 0) {
        userDelete = []
    }

    userDelete.push(req.params)


    pool.query('DELETE FROM users WHERE name=$1', [usersName], (err, res) => {
        //console.log(err, res)
        if (err) {
            console.log(err)
        }
        // if (list.length > 0) {
        //     list = []
        // }

        console.log("User deleted")

    })



    // console.log(users)
    res.send(req.params)


})

router.get('/id/:id/', async (req, res) => {
    console.log("Usli smo!")
    console.log(req.params.id)

    let id = req.params.id
    let selectedUser

    try {
        selectedUser = await selectUserID(id)

        console.log("selectedUser " + selectedUser)
        // await asyncCall()

    } catch (error) {
        console.log(error)
    }
    finally {
        console.log("Inserted new user in database...")
    }

    res.send(selectedUser)
})


async function selectUserID(id) {
    var data = await pool.query("Select id, name, initials, eyecolor, age, guid, email from users where id=$1", [id])

    return data.rows[0]
}

async function asyncCall() {
    console.log('calling');
    const select = await selectUserID();
    console.log(select)

    // configFile = path.join(__dirname, '../../client/json/userDetail.json')
    //  console.log(configFile3)

    var userDetail = {
        name: name,
        initials: initials,
        id: id,
        eyeColor: eyecolor,
        age: age,
        guid: guid,
        email: email
    }

    if (details.length > 0) {
        details = []
    }

    var data = {}
    data.table = []
    data.table.push(userDetail)
    details.push(userDetail)

    console.log(details)

}

router.get('/details', function (req, res) {
    console.log(details)
    res.send(details)
})




router.get('/user', function (req, res) {

    try {


        function selectUser() {
            return new Promise((resolve, reject) => {


                pool.query('SELECT id, name, initials, eyeColor, age, guid, email FROM users as Result ORDER BY id ASC LIMIT 10', (err, res) => {
                    //console.log(err, res)
                    if (err) {
                        console.log(err)
                    }
                    if (list.length > 0) {
                        list = []
                    }

                    for (let i = 0; i < res.rows.length; i++) {
                        // console.log("ID of this user is " + res.rows[i].id + " and name of this user is " + res.rows[i].name)
                        list.push(res.rows)
                        //  resolve(res.rows);
                    }

                    setTimeout(() => {
                        // for (let i = 0; i < res.rows.length; i++) {
                        // console.log("ID of this user is " + res.rows[i].id + " and name of this user is " + res.rows[i].name)
                        //  list.push(res.rows)
                        resolve(res.rows);
                        //}
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
    finally {
        res.send(list)
    }


})



//insert new user in Users table


router.get('/change/id/:id/name/:name/initials/:initials/eyeColor/:eyeColor/age/:age/guid/:guid/email/:email', function (req, res) {

    console.log(req.params.id, req.params.name, req.params.initials, req.params.eyeColor, req.params.age, req.params.guid, req.params.email)

    pool.query("UPDATE users SET name = $1, initials = $2, eyeColor = $3, age = $4, guid=$5, email = $6 WHERE id = $7;", [req.params.name, req.params.initials, req.params.eyeColor, req.params.age, req.params.guid, req.params.email, req.params.id], (err, res) => {
        console.log(err, res)
        if (err) {
            console.log(err)

        }

        else {
            console.log("User updated successfully")
        }

    })

    res.send(req.params)


})

var nameList

router.get('/minage', function (req, res) {

    res.header("Access-Control-Allow-Origin", "*");
    //select name from users where age = (select min(age) from users)


    try {

        pool.query("Select name from users where age = (select min(age) from users)", (err, res) => {
            console.log(err, res)
            if (err) {
                console.log(err)

            }

           
             else {
                 console.log("Younger user selected!")
                 console.log(res.rows[0].name)
                 nameList = res.rows[0].name
                 return nameList;
             }

        })

    } catch (error) {
        console.log(error)
    }
    finally {
        res.send(nameList)
    }
   
})


var maxNameList

router.get('/maxage', function (req, res) {

    res.header("Access-Control-Allow-Origin", "*");
    //select name from users where age = (select min(age) from users)


    try {

        pool.query("Select name from users where age = (select max(age) from users)", (err, res) => {
            console.log(err, res)
            if (err) {
                console.log(err)

            }

           
             else {
                 console.log("Oldest user selected!")
                 console.log(res.rows[0].name)
                 maxNameList = res.rows[0].name
                 return maxNameList;
             }

        })

    } catch (error) {
        console.log(error)
    }
    finally {
        res.send(maxNameList)
    }
   
})


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