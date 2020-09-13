//Dependencies
const express = require('express')
const burger = require('../models/burger.js')

//Defines express router object to simplify code for routes/requests
const router = express.Router();

//FNs below define routes and adds logic to handle data

router.get('/', (req, res) => {
  burger.getAll(data => {
    //Saves data as obj parameter, accessible to Handlebars
    const burgListObject = {
      burgers: data
    };
    //Use hbs to create HTML page with data, send as response
    res.render('index', burgListObject)
  });
});

router.post('/api/burg', (req, res) => {
  //Passes request body for burger name, 
  burger.add(req.body.value, data => {
    //log response for testing
    console.log(res.json(data))
  });
});

router.put('/api/burg/:id', (req, res) => {
  //Passes id of burger to update
  burger.devour(req.params.id, data => {
        //log response for testing
        console.log(res.json(data))
  });
});

module.exports = router

