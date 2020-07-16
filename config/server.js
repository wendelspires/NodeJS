var express = require('express');
var consign = require('consign');
var bodyparser = require('body-parser');


var app = express();
app.set('view engine', 'ejs');
app.set('views','./app/views');

app.use(bodyparser.urlencoded({extended: true}));


//consign para carregar todos os módulos ao inicializar a aplicação.
consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .into(app);


module.exports = app;
