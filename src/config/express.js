'use strict';

var cors           = require('cors');
var path           = require('path');
var morgan         = require('morgan');
var helmet         = require('helmet');
var multer         = require('multer');
var logger         = require('mm-node-logger')(module);
var express        = require('express');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var pathUtils      = require('../utils/path-utils');
var config         = require('./config');
