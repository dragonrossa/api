const kitchen = require('./test')
const { Pool } = require('pg')
const pool = new Pool({
  user: 'rosana',
  host: 'localhost',
  database: 'Api_DB',
  password: 'testing4546.',
  port: 5432
})

const manufacturer = kitchen.Manufacturer;
const model = kitchen.Model;
const color1 = kitchen.Color1;
const color2 = kitchen.Color2;
const color3 = kitchen.Color3;
const color4 = kitchen.Color4;
const color5= kitchen.Color5;
const picture = kitchen.Picture;
const description = kitchen.Description;


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
        type varchar(100), \
        kitchenid int)', function (err, res) {
        if (err) {
          console.log(err)
        }
        setTimeout(() => {
          resolve("Table color created!");
        }, 1000);

      })
    })
  }


  function tableKitchen() {
    return new Promise(resolve => {
      resolve

      pool.query('CREATE TABLE kitchen( \
        id SERIAL PRIMARY KEY, \
        manufacturer varchar(50), \
        model varchar(50), \
        picture varchar(50), \
        description text \
        )', function (err, res) {
        if (err) {
          console.log(err)
        }
        setTimeout(() => {
          resolve("Table kitchen created!");
        }, 1000);

      })
    })
  }

  function alterTableColor() {
    return new Promise(resolve => {
      resolve
      pool.query('ALTER TABLE color \
      ADD FOREIGN KEY (kitchenid) \
       REFERENCES kitchen(id); ', function (err, res) {
        if (err) {
          console.log(err)
        }
        setTimeout(() => {
          resolve(" Alter table color created!");
        }, 1000);

      })
    })
  }

  function insertKitchen() {
    return new Promise(resolve => {
      resolve
      pool.query('INSERT INTO kitchen \
      (manufacturer, model, picture, description) \  VALUES($1,$2,$3,$4)', [manufacturer,model,picture,description], function (err, res) {
        if (err) {
          console.log(err)
        }
        setTimeout(() => {
          resolve("New kitchen inserted!");
        }, 1000);

      })
    })
  }

  function insertColor() {
    return new Promise(resolve => {
      resolve
      pool.query("INSERT INTO color(type, kitchenid) VALUES ($1, (SELECT id from kitchen where model=$2));", [color1,model,], function (err, res) {
        if (err) {
          console.log(err)
        }
        setTimeout(() => {
          resolve("New color inserted!");
        }, 1000);

      })
    })
  }



  async function asyncCall() {
    console.log('calling');
    const result = await tableColor();
    console.log(result)
    const result3 = await tableKitchen();
    console.log(result3)
    const result4 = await alterTableColor();
    console.log(result4)
    const result5 = await insertKitchen();
    console.log(result5)
    const result6 = await insertColor();
    console.log(result6)

  }

  asyncCall();

} catch (error) {
  console.log(error)

}
finally {
  console.log("Done")
}
