//Dependencies
const mysql = require('mysql');
require('dotenv').config()

//Sets connection parameters for hosted or local setting
if (process.env.JAWSDB_URL) {
  //Creates connection based on environmental variable
  connection = mysql.createConnection(process.env,JAWSDB_URL)
} else {
  //Creates connection
  const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: process.env.password,
  database: 'burgers_db'
})};

connection.connect( (err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  };
  console.log(`connected as id ${connection.threadId}`);
})

module.exports = connection;