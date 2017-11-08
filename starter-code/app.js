/*jshint esversion: 6 */
const express = require('express');
const app = express();
const Chuck  = require('chucknorris-io');
const client = new Chuck();

app.set('views',__dirname + '/views');
app.set("view engine","ejs");
//Retrieve a random chuck joke

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/chisterandom', function (req, res) {
  client.getRandomJoke()
    .then((joke) => {
      console.log(joke);
      res.render('random', {pepe : joke});
    }).catch((err) => {
      res.render('index');
    });
});

app.get('/categories', function (req, res) {
  client.getJokeCategories()
    .then((cat) => {
      console.log(cat);
      res.render('categories', {juan : cat});
    }).catch((err) => {
      res.render('index');
    });
});




app.listen(3000,() => {
  console.log("el servidor esta activo");
});
