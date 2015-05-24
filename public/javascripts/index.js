var index = "http://localhost:3000";

$(document).ready(function() {


	// Archive 
	$('.checked-btn').click(function() {
		var id = $(this).data('id');
		var url = './' + id + '/done';
		$.ajax({
			method: 'POST',
			url: url
		}).done(function(res) {
			if (!res) console.log('delete error');
			window.location = index;
		});
	});

	// Delete
	$('.delete-btn').click(function() {
		var id = $(this).data('id');
		var url = './' + id + '/delete';
		$.ajax({
			method: 'POST',
			url: url,
		}).done(function(res) {
			if (!res) console.log('delete error');
			window.location = index;
		});
	});

	// Undo
	$('.undo-btn').click(function() {
		var id = $(this).data('id');
		var url = './' + id + '/undo';
		$.ajax({
			method: 'POST',
			url: url,
		}).done(function(res) {
			if (!res) console.log('undo error');
			window.location = index;
		});
	});

});