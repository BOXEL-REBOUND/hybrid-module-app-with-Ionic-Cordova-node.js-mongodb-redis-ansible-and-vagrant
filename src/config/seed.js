'use strict';

var logger   = require('mm-node-logger')(module);
var mongoose = require('mongoose');
var User     = require('../user/user.model');
var Image    = require('../image/image.model');

var testUserId = mongoose.Types.ObjectId();

User.find({}).remove(function() {
    User.create({
            _id: testUserId,
            provider: 'local',
            name: 'Test',
            email: 'test@test.com',
            password: 'test'
        }, function() {
            logger.info('Finished populating users');
        }
    );
});

Image.find({}).remove(function() {
    Image.create({
        fileName : 'Slovakia',
        url : 'http://www.rocketroute.com/wp-content/uploads/Carpathian-mountains-Slovakia-685x458.jpg?125416',
        user: testUserId
    }, function() {
        logger.info('Finished populating images');
    });
});
