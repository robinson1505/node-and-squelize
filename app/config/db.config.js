const dotenv = require("dotenv");
const { Sequelize } = require("sequelize");
const dbConfig = require("./config");

dotenv.config();

const db = new Sequelize("nodejs", "roeman", "robin150531", {
  host: "127.0.0.1",
  dialect: "mysql",
  operationsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});
db
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });
// db.sync({force:true});
module.exports = db;

// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "127.0.0.1",
//   user: "roeman",
//   password: "robin150531"
// });

// con.connect(function(err) {
//   if (err) {throw err;}
//   console.log("Connected!");
// });
