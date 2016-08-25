var bodyParser = require('body-parser');
var express = require('express');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var router = express.Router();

var User = require('../db/User.model');

router.get('/users', function(req, res) {
  console.log("ROUTE: '/users'...finding all users...");
  User.find({})
    .exec(function(err, users) {
      if (err) {
        res.send('error occurred');
      } else {
        console.log(users);
        res.json(users);
      }
    })
});

module.exports = router;
