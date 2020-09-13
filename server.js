//Dependencies
const express = require('express');
const exphbs = require('express-handlebars')
const path = require('path')
const routes = require('./controllers/burgers_controller.js')

//Create an express server
const app = express();
const PORT = process.env.PORT ||  8080;

//Additional express parsing utilities
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Serve local files in server
app.use(express.static(path.join(__dirname, '/public')));

//Set handlebars as templating engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Sets app to use specified routes
app.use(routes);

//Start server
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});