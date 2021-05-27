var express = require("express");
var session = require('express-session');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var saml = require('passport-saml');
var fs = require('fs');


var app = express();
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }) );
app.use(bodyParser.json());
app.use(session({secret: 'secret',
        resave: false,
        saveUninitialized: true }));

app.get('/',
    function(req, res) {
        res.send('Test Home Page');
    }
);

var server = app.listen(4300, function () {
    console.log('Listening on port %d', server.address().port)
});

passport.serializeUser(function (user, done) {
    console.log('-----------------------------');
    console.log('serialize user');
    console.log(user);
    console.log('-----------------------------');
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    console.log('-----------------------------');
    console.log('deserialize user');
    console.log(user);
    console.log('-----------------------------');
    done(null, user);
});