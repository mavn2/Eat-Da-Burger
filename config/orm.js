//Dependencies
const connection = require('./connection');

//Cb refers to callback parameter, passed through model (cat.js) from controller
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

  insertOne: (req, cb) => {
    //Get burger name from request body, insert burger or return server error/end connection
    const queryString = 'INSERT INTO burgers (burger_name) VALUES (?)';

    connection.query(queryString, [req.body.bName], (err, data) => {
      if (err) {
        return res.status(500).end();
      };
      //Parse to display added burger
      cb(data);
    });
  },

  updateOne: (req, cb) => {
    //Change the devoured status of selected burger to true, or return server error/end connection
    const queryString = 'UPDATE burgers SET devoured = 1 WHERE id = ?';

    connection.query(queryString, [req.body.id], (err, data) => {
      if (err) {
        return res.status(500).end();
      };
      //Parse to display devoured burger
      cb(data);
    });
  }
};

module.exports = orm;