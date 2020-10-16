'use strict';
var logger   = require('mm-node-logger')(module);
var passport = require('passport');
var token    = require('./token.controller.js');
var User     = require('../user/user.model.js');
