const user = require('./test')

const { Pool } = require('pg')
const pool = new Pool({
    user: 'rosana',
    host: 'localhost',
    database: 'Api_DB',
    password: 'testing4546.',
    port: 5432
})


const name = user.name;
const initials = user.initials;
const eyeColor = user.eyeColor;
const age = user.age;
const guid = user.guid;
const email = user.email;


try {


    function tableUsers() {
        return new Promise(resolve => {
            resolve
            pool.query('CREATE TABLE users \
                        (id SERIAL PRIMARY KEY,\
                         name varchar(50),\
                         initials varchar(25),\
                          eyecolor varchar(25),\
                           age int,\guid varchar(25),\
                      email varchar(50))', function (err, res) {
                if (err) {
                    console.log(err)
                }
                setTimeout(() => {
                    resolve("Table users created!");
                }, 1000);

            })
        })

    }



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
                //pool.end()
            })

        )
    }

    function selectUser() {
        return new Promise((resolve, reject) => {

            pool.query('SELECT id, name, initials, eyeColor, age, guid, email FROM users as Result', (err, res) => {
                //console.log(err, res)
                if (err) {
                    console.log(err)
                }

               
                     setTimeout(() => {
                         for(let i = 0;i<res.rows.length;i++){
                             console.log("ID of this user is " + res.rows[i].id + " and name of this user is " + res.rows[i].name)
                        resolve(res.rows);
                     }
                    }, 1000);
                     pool.end()
                 })

            })
        }






    //INSERT INTO users(name, initials, id, eyeColor, age, guid, email) VALUES('Ivana Ivic', 'II','1', 'blue', '27', '459085d1-bb17-4e8e-a671','ivanai@gmail.com')


    async function asyncCall() {
                console.log('calling');
                const result = await tableUsers();
                console.log(result)
                const insert = await insertUser();
                console.log(insert)
                const select = await selectUser();
                console.log(select)


            }

    asyncCall();

    } catch (error) {
        console.log(error)

    }
    finally {
        console.log("Done")
    }


