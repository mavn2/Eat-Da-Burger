//Dependencies
const orm = require('../config/orm.js');

//Burger object w/ methods used to call ORM methods
//cb stands for callback, function called/passed in controller
const burger = {
  getAll: (cb) => {
    orm.selectAll(
      (data) => {
        cb(data);
      }
    );
  },


}