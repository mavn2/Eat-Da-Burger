//Dependencies
//Required modules
const mysql = require('mysql');

//Required files
const password = require('./password');

//Sets connection parameters for hosted or local setting
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env,JAWSDB_URL)
} else {
  const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: password,
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