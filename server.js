
// Babel ES6/JSX Compiler
require('babel-register');
var _ = require('underscore');
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
var async = require('async');
var request = require('request');
var xml2js = require('xml2js');

//DB
var config = require('./db/config');
var User = require('./db/User.model');
var Post = require('./db/Post.model');
mongoose.connect(config.database);
mongoose.connection.on('error', function() {
  console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?');
})

//SERVER
var app = express();
app.set('port', 8080);

//EXPRESS MIDDLEWARES
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'html');
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//AJAX API ROUTES
/**
 * GET /api/posts/top
 * Return top 100 most recent posts
*/
app.get('/api/posts/top', function(req, res, next) {
  Post
    .find()
    .limit(100)
    .exec(function(err, posts) {
      if (err) return next(err);

      res.send(posts);
    });
});

/**
 * GET /api/posts/:category
 * Return most recent posts
*/
app.get('/api/posts', function(req, res, next) {
  var category;
  var params = req.query;

  _.each(params, function(value, key) {
    category = value;
  });
  switch(category) {
    case "forSale":
      category = 'For Sale';
      break;
    case "forFree":
      category = 'For Free';
      break;
    case "academic":
      category = 'Academic';
      break;
    case "social":
      category = 'social';
      break;
    case "athletic":
      category = 'Athletic';
      break;
    case "housing":
      category = 'Housing';
      break;
    default:
      category = '';
  }

  Post
    .find({ category: category })
    .limit(100)
    .exec(function(err, posts) {
      if (err) return next(err);

      res.send(posts);
    });
});

/**
 * POST /api/posts
 * Creates a new post to the database
*/
app.post('/api/posts', function(req, res, next) {
  var title = req.body.title;
  var description = req.body.description;
  var category = req.body.category;
  var price = req.body.price;

  async.waterfall([
    function(callback) {
      Post.findOne({ title: title, price: price, category: category }, function(err, post) {
        if (err) return next(err);

        if (post) {
          return res.status(409).send({ message: post.title + ' already exists in the database!' });
        }

        callback(err, post)
      });
    },
    function(post) {
      var post = new Post ({
        title: title,
        description: description,
        category: category,
        price: price
      });

      post.save(function(err) {
        if (err) return next(err);
        res.send({ message: title + ' has been added successfully!' });
      })
    }
  ]);
});

//REACT MIDDLEWARES
app.use(function(req, res) {
  Router.match({ routes: routes.default, location: req.url }, function(err, redirectLocation, renderProps) {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirectLocation) {
      res.status(302).redirect(redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
        var html = ReactDOM.renderToString(React.createElement(Router.RoutingContext, renderProps));
        var page = swig.renderFile('views/index.html', { html: html });
        res.status(200).send(page);
    } else {
      res.status(404).send('Page Not Found')
    }
  });
});

//SOCKET.IO CONFIG
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var onlineUsers = 0;

io.sockets.on('connection', function(socket) {
  onlineUsers++;

  io.sockets.emit('onlineUsers', { onlineUsers: onlineUsers });

  socket.on('disconnect', function() {
    onlineUsers--;
    io.sockets.emit('onlineUsers', { onlineUsers: onlineUsers });
  });
});

server.listen(app.get('port'), function() {
  console.log('tradeTOOL Express server listening on port: ' + app.get('port'));
});
