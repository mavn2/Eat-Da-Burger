//Dependencies
const orm = require('../config/orm.js');

//Burger object w/ methods used to call ORM methods
//cb stands for callback, function called/passed in controller
const burger = {
  //Gets burger data from table and executes function passed in controller
  getAll: (cb) => {
    orm.selectAll(data => {
        cb(data);
      }
    );
  },

  //Adds burger w/ given value and '  '
  add: (value, cb) => {
    orm.insertOne(value, data => {
        cb(data)
      }
    );
  },

  //Updates burger w/ given id and ' '
  devour: (id, cb) => {
    orm.updateOne(id, data => {
        cb(data)
      }
    );
  }
}

module.exports(burger)