const { Pool } = require('pg')
const pool = new Pool({
    user: 'rosana',
    host: 'localhost',
    database: 'Api_DB',
    password: 'testing4546.',
    port: 5432
})


try {


    // pool.query('SELECT id, name, lastname FROM test1 as Result', (err, res) => {
    //     //console.log(err, res)
    //     if (err) {
    //         console.log(err)
    //     }
    //     console.log("ID of this user is " + res.rows[0].id + " and name of this user is " + res.rows[0].name + res.rows[0].lastname)
    //     pool.end()
    // })


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


    async function asyncCall() {
        console.log('calling');
        const result = await tableUsers();
        console.log(result)
        // console.log(result);

    }

    asyncCall();

} catch (error) {
    console.log(error)

}
finally {
    console.log("Done")
}


