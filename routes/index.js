var express = require('express');
var router = express.Router();

// Model
var Item = require('../model').Item;


// Index
router.get('/', function(req, res, next) {

	Item.find()
		.sort({
			createAt: 'desc'
		})
		.exec(function(err, items) {
			if (err) console.log(err);

			res.render('index', {
				items: items
			});
		});


});

// Create
router.post('/', function(req, res, next) {
	var name = req.body.item;
	var item = new Item({
		name: name,
		done: false
	});

	item.save(function(err) {
		if (err) console.log(err);

		res.redirect('/');
	});

});

// Done
router.post('/:id/done', function(req, res, next) {
	var id = req.params.id;

	Item.findOneAndUpdate({
		_id: id
	}, {
		done: true
	}, function(err, item) {
		if (err) console.log(err);

		console.log(item);
		res.json(true);
	});
});

// Delete
router.post('/:id/delete', function(req, res, next) {
	var id = req.params.id;

	Item.findByIdAndRemove(id, function(err) {
		if (err) console.log(err);
		res.json(true);
	});
});

// Undo
router.post('/:id/undo', function(req, res, next) {
	var id = req.params.id;

	Item.findOneAndUpdate({
		_id: id
	}, {
		done: false
	}, function(err, item) {
		if (err) console.log(err);

		console.log(item);
		res.json(true);
	});
});

module.exports = router;