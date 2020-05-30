const { Pool } = require('pg')
const pool = new Pool({
  user: 'rosana',
  host: 'localhost',
  database: 'Api_DB',
  password: 'testing4546.',
  port: 5432
})

//database is in docker - port 5432

try {


  // pool.query('SELECT id, name, lastname FROM test1 as Result', (err, res) => {
  //     //console.log(err, res)
  //       if (err) { 
  //        console.log(err) }
  //     console.log("ID of this user is " + res.rows[0].id + " and name of this user is " + res.rows[0].name + res.rows[0].lastname)
  //     pool.end()
  // })



  function tableColor() {
    return new Promise(resolve => {
      resolve
      pool.query('CREATE TABLE color\
      (id SERIAL PRIMARY KEY,\
        type varchar(100))', function (err, res) {
        if (err) {
          console.log(err)
        }
        setTimeout(() => {
          resolve("Table color created!");
        }, 1000);

      })
    })
  }

  function tableDetails() {
    return new Promise(resolve => {
      resolve
      pool.query('CREATE TABLE details\
      (id SERIAL PRIMARY KEY,\
        description varchar(100))', function (err, res) {
        if (err) {
          console.log(err)
        }
        setTimeout(() => {
          resolve("Table details created!");
        }, 1000);

      })
    })
  }

  function tableKitchen() {
    return new Promise(resolve => {
      resolve

      pool.query('CREATE TABLE kitchen\
      (id SERIAL PRIMARY KEY,\
        manufacturer varchar(50),\
        model varchar(50),\
        colorid int,\
        detailsid int,\
        FOREIGN KEY (colorid) REFERENCES color(id),\
        FOREIGN KEY (detailsid) REFERENCES details(id),\
        picture varchar(50))', function (err, res) {
        if (err) {
          console.log(err)
        }
        setTimeout(() => {
          resolve("Table kitchen created!");
        }, 1000);

      })
    })
  }




  async function asyncCall() {
    console.log('calling');
    const result = await tableColor();
    console.log(result)
    const result2 = await tableDetails();
    console.log(result2)
    const result3 = await tableKitchen();
    console.log(result3)
    // expected output: 'resolved'
  }

  asyncCall();

} catch (error) {
  console.log(error)

}
finally {
  console.log("Done")
}
