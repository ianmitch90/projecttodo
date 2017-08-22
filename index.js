const express = require("express");
const mustache = require("mustache-express");
const bodyParser = require("body-parser");
const expressValidator = require('express-validator');
const app = express();


app.use(express.static(__dirname + '/public'))
app.engine('mustache', mustache())
app.set('view engine', 'mustache')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))

app.listen(3000, function(){
  console.log('heller how yer?')
});
////###############################
const todos = []
const completed = []

app.get('/', function (req, res) {
  res.render('index', {
    todos: todos,
    completed: completed})
  })
app.post('/add', function (req, res) {
  todos.push(req.body.todoitem)
  res.redirect('/')
})
app.post('/complete', function (req, res) {
  for (var i = 0; i < todos.length; i++) {
    if (req.body.tocomplete === todos[i]) {
      todos.splice(i, 1)
    }
  }

  completed.push(req.body.tocomplete)
  res.redirect('/')
})
