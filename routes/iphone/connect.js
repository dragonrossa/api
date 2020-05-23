const { Pool} = require('pg')
const pool = new Pool({
    user: 'rosana',
    host: 'localhost',
    database: 'Api_DB',
    password: 'testing4546.',
    port: 32781
})


database = "Api_DB"

pool.query('select exists(SELECT datname FROM pg_catalog.pg_database WHERE lower(datname) = lower(Api_DB));', function (err, res){
    if (err) { 
       console.log(err) }
       console.log("Database exists!")
})

//database is in docker - port 5432 : 32781

pool.query('SELECT id, name, lastname FROM test1 as Result', (err, res) => {
    //console.log(err, res)
    console.log("ID of this user is " + res.rows[0].id + " and name of this user is " + res.rows[0].name + res.rows[0].lastname)
    pool.end()
})
