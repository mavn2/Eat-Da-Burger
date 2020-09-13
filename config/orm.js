//Dependencies
const connection = require('./connection');

//Cb refers to callback parameter, passed through/determined in model (cat.js)
const orm = {
  selectAll: (cb) => {
    //Select all burgers from table, return data or return 404 (db must not exist)/end connection
    const queryString = 'SELECT id, burger_name, devoured FROM burgers';

    connection.query(queryString, (err, data) => {
      if (err) {
        throw err;
      };
      cb(data);
    });
  },

  insertOne: (value, cb) => {
    //Insert burger or return server error/end connection
    const queryString = `INSERT INTO burgers (burger_name) VALUES ('${value}')`;

    connection.query(queryString, (err, data) => {
      if (err) {
        throw err;
      };
    });
  },

  updateOne: (condition, cb) => {
    //Change selected burger's devoured to true, or return server error/end connection
    const queryString = `UPDATE burgers SET devoured = 1 WHERE id = ${condition}`;

    connection.query(queryString, (err, data) => {
      if (err) {
        throw err;
      };
      //Parse to display devoured burger?
      cb(data);
      console.log('hi')
    });
  }
};

module.exports = orm;