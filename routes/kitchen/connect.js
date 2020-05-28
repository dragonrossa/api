const { Pool} = require('pg')
const pool = new Pool({
    user: 'rosana',
    host: 'localhost',
    database: 'Api_DB',
    password: 'testing4546.',
    port: 5432
})


database = "Api_DB"

//database is in docker - port 5432

pool.query('SELECT id, name, lastname FROM test1 as Result', (err, res) => {
    //console.log(err, res)
      if (err) { 
       console.log(err) }
    console.log("ID of this user is " + res.rows[0].id + " and name of this user is " + res.rows[0].name + res.rows[0].lastname)
    pool.end()
})


function tableColor() {
   pool.query('CREATE TABLE color(id SERIAL PRIMARY KEY,type varchar(100))', function (err, res){
    if (err) { 
       console.log(err) }
       console.log("Table color created!")
})
  }

  function tableDetails(){
    pool.query('CREATE TABLE details(id SERIAL PRIMARY KEY,description varchar(100))', function (err, res){
        if (err) { 
           console.log(err) }
           console.log("Table details created!")
    })
  }
  
  function tableKitchen(){
    pool.query('CREATE TABLE kitchen(id SERIAL PRIMARY KEY,manufacturer varchar(50),model varchar(50),colorid int,detailsid int,FOREIGN KEY (colorid) REFERENCES color(id),FOREIGN KEY (detailsid) REFERENCES details(id),picture varchar(50))', function (err, res){
        if (err) { 
           console.log(err) }
           console.log("Table kitchen created!")
    })
  }
  async function asyncCall() {
    console.log('calling');
    const result = await tableColor();
    const result2 = await tableDetails();
    const result3 = await tableKitchen();
    console.log(result);
    console.log(result2);
    console.log(result3);
    // expected output: 'resolved'
  }
  
  asyncCall();