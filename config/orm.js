//Dependencies
const connection = require('./connection');

//Cb refers to callback parameter, passed through/determined in model (cat.js)
const orm = {
  selectAll: (table, cb) => {
    //Select all burgers from table, return data or return 404 (db must not exist)/end connection
    const queryString = 'SELECT * FROM ??';

    connection.query(queryString, [table], (err, data) => {
      if (err) {
        throw err;
      };
      cb(data);
    });
  },

  insertOne: (table, colToInsert, valToInsert, cb) => {
    //Insert burger or return server error/end connection
    const queryString = `INSERT INTO ?? (??) VALUES (?)`;

    connection.query(queryString, [table, colToInsert, valToInsert], (err, data) => {
      if (err) {
        throw err;
      };
    });
  },

  updateOne: (table, colUpdate, value, condition, cb) => {
    //Change selected burger's devoured to true, or return server error/end connection
    const queryString = 'UPDATE ?? SET ?? = ? WHERE id = ?';

    connection.query(queryString, [table, colUpdate, value, condition], (err, data) => {
      if (err) {
        throw err;
      };
      //Parse to display devoured burger?
      cb(data);
    });
  }
};

module.exports = orm;