$(document).ready(function() {
	if (window.location.href.split('#')[1] != undefined) {
		setPage(window.location.href.split('#')[1]);
	}

	$(window).on("hashchange", function(e) {
		$('#content').focus();
		setPage(e.originalEvent.newURL.split('#')[1]);
		addEvents();
	});

	addEvents();
});

function addEvents() {
	$('.percent_circle').each(function() {
		draw_circle_percent(
			$(this).children('canvas').attr('id'),
			10,
			parseInt($(this).children('span').text()),
			'#c6c6c6',
			'#6a8d9d'
		);
	});

	$('#slider > .controls *').on('click', function() {
		slide($(this));
	});
}