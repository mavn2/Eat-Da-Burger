//Dependencies
const orm = require('../config/orm.js');

//Burger object w/ methods used to call ORM methods
//cb stands for callback, function called/passed in controller
const burger = {
  //Gets burger data from table and executes function passed in controller
  getAll: (cb) => {
    orm.selectAll('burgers', data => {
        cb(data);
      }
    );
  },

  //Adds burger w/ given value and '  '
  add: (burgName, cb) => {
    orm.insertOne('burgers', 'burger_name', burgName, data => {
        cb(data);
      }
    );
  },

  //Updates burger w/ given id and ' '
  devour: (burgId, cb) => {
    orm.updateOne('burgers', 'devoured', 1, Number(burgId), data => {
        cb(data);
      }
    );
  }
};

module.exports = burger;