const { Pool } = require('pg')
const pool = new Pool({
    user: 'rosana',
    host: 'localhost',
    database: 'Api_DB',
    password: 'testing4546.',
    port: 5432
})


database = "Api_DB"


try {


    pool.query('SELECT id, name, lastname FROM test1 as Result', (err, res) => {
        //console.log(err, res)
        if (err) {
            console.log(err)
        }
        console.log("ID of this user is " + res.rows[0].id + " and name of this user is " + res.rows[0].name + res.rows[0].lastname)
        pool.end()
    })


    function tableUsers() {
        pool.query('CREATE TABLE users (id SERIAL PRIMARY KEY,name varchar(50),initials varchar(25),eyecolor varchar(25),age int,guid varchar(25),email varchar(50))', function (err, res) {
            if (err) {
                console.log(err)
            }
            console.log("Table users created!")
        })

    }


    //database is in docker - port 5432



    
    async function asyncCall() {
        console.log('calling');
        const result = await tableUsers();
       // console.log(result);
    
    }

    asyncCall();

} catch (error) {
    console.log(error)

}
finally {

}


