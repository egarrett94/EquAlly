require('dotenv').config();
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session')
var passport = require('./config/passportConfig.js')
var mongoose = require('mongoose');
var auth = require('./routes/auth');

mongoose.connect('mongodb://localhost/equAlly')

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'client', 'build')));
app.use(passport.initialize())
app.use(passport.session())
app.use('/auth', auth);
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}))

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('EquAlly is running on: ', PORT)
})
module.exports = app;
