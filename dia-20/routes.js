const express = require('express');
const route = express.Router();

route.get('/', function(req, res, next){
  res.render('index');
})

route.post('/' , function(req, res, next) {
  const listOfStudents = [];
  const name = req.body.name;

  listOfStudents.push(name);

  res.send(listOfStudents);

})

module.exports = route;
