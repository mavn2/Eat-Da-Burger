//Dependencies
const orm = require('../config/orm.js');

//Burger object w/ methods used to call ORM methods
//cb stands for callback, function called/passed in controller
const burger = {
  //Gets burger data from table and executes function passed in controller
  getAll: (cb) => {
    orm.selectAll(data => {
        cb(data);
        Console.log('Model!')
      }
    );
  },

  //Adds burger w/ given value and '  '
  add: (burgName, cb) => {
    orm.insertOne(burgName, data => {
        cb(data);
        console.log('Model!')
      }
    );
  },

  //Updates burger w/ given id and ' '
  devour: (burgId, cb) => {
    orm.updateOne(burgId, data => {
        cb(data);
        console.log('Model!')
      }
    );
  }
};

module.exports = burger;