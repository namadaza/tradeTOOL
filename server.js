
// Babel ES6/JSX Compiler
require('babel-register');

var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');
var bodyParser = require('body-parser');
var express = require('express');
var favicon = require('serve-favicon');
var logger = require('morgan');
var mongoose = require('mongoose');
var path = require('path');
var routes = require('./src/routes');
var swig  = require('swig');

//DB
var db = 'mongodb://localhost/tradeTOOL';
mongoose.connect(db);

//SERVER and ROUTES
var app = express();
var users = require('./routes/users');
var port = 8080;

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'html');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/users', users);

app.listen(port, function() {
  console.log('tradeTOOL listening on port: ' + port);
});
//module.exports = app;
