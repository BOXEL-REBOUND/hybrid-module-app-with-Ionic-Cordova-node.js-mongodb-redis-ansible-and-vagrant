'use strict'

var jwt    = require('jsonwebtoken');
var redis  = require('../config/redis');
var config = require('../config/config');

function extractTokenFromHeader(headers) {
    if (headers == null) throw new Error('Header is null');
    if (headers.authorization == null) throw new Error('Authorization header is null');

    var authorization = headers.authorization;
    var authArr = authorization.split(' ');
    if (authArr.length !== 2) throw new Error('Authorization header value is not of length 2');

    var token = authArr[1];

    try {
        jwt.verify(token, config.token.secret);
    } catch(err) {
        throw new Error('The token is not valid');
    }

    return token;
}
