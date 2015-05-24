var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Default setting
var config = require('../config/local');



// Require schema
var itemSchema = require('./item').itemSchema(mongoose);


// Model class
var Item = mongoose.model('Item', itemSchema);


//Exports
exports.Item = Item;



// Connect to mongoDB
mongoose.connect('mongodb://' + config.mongo.host + '/' + config.mongo.database);

// Bind DB connection
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(callback) {
	console.log('mongoDB connected');
});