//Dependencies
const connection = require('./connection');

//Cb refers to callback parameter, passed through/determined in model (cat.js)
const orm = {
  selectAll: (cb) => {
    //Select all burgers from table, return data or return 404 (db must not exist)/end connection
    const queryString = 'SELECT id, burger_name, devoured FROM burgers';

    connection.query(queryString, (err, data) => {
      if (err) {
        return res.status(404).end();
      };
      cb(data);
    });
  },

  insertOne: (burgName, cb) => {
    //Insert burger or return server error/end connection
    const queryString = 'INSERT INTO burgers (burger_name) VALUES (?)';

    connection.query(queryString, [burgName], (err, data) => {
      if (err) {
        return res.status(500).end();
      };
      //Parse to display added burger
      cb(data);
    });
  },

  updateOne: (burgId, cb) => {
    //Change selected burger's devoured to true, or return server error/end connection
    const queryString = 'UPDATE burgers SET devoured = 1 WHERE id = ?';

    connection.query(queryString, [burgId], (err, data) => {
      if (err) {
        return res.status(500).end();
      };
      //Parse to display devoured burger
      cb(data);
    });
  }
};

module.exports = orm;