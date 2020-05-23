const { Pool} = require('pg')
const pool = new Pool({
    user: 'rosana',
    host: 'localhost',
    database: 'Api_DB',
    password: 'testing4546.',
    port: 5432
})


database = "Api_DB"

pool.query('DROP DATABASE IF EXISTS Baza', function (err, res){
    if (err) { 
       console.log(err) }
       console.log("Database dropped!")
})

pool.query('CREATE DATABASE Baza', function (err, res){
    if (err) { 
       console.log(err) }
       console.log("Database created!")
})

//database is in docker - port 5432 : 32781

pool.query('SELECT id, name, lastname FROM test1 as Result', (err, res) => {
    //console.log(err, res)
      if (err) { 
       console.log(err) }
    console.log("ID of this user is " + res.rows[0].id + " and name of this user is " + res.rows[0].name + res.rows[0].lastname)
    pool.end()
})
