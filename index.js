const express = ('express');
const app  = express();
const mustache = require('mustache-express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

app.engine('mustache', mustache());
app.set('view engine','mustache');

app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: false}));
app.use(expressvalidator());

app.listen(3000, function(){
  console.log('ok, whats the t?')
});

app.get('/'function(req,res){
  res.render('home',{
    pageTitle: 'home'
  })
});
