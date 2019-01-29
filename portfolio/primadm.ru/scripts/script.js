$(document).ready(function() {
	$('#news-right').on('click', function() {
		toLeft($(this), $('#news-slider'));
	});

	$('#news-left').on('click', function() {
		toRight($(this), $('#news-slider'));
	});

	$('#photo_slider-right').on('click', function() {
		toLeft($(this), $('#js-photo_slider'));
	});

	$('#photo_slider-left').on('click', function() {
		toRight($(this), $('#js-photo_slider'));
	});

	fixSlider($('#news-slider'));
	fixSlider($('#js-photo_slider'));
});

function toLeft(button, target) {
	button.off('click');
	target.animate({
		'left': parseInt(target.css('left')) - target.children('a').outerWidth()
	}, 500, function() {
		button.on('click', function() {
			toLeft(button, target);
		});
		var firstEl = target.children().first();
		target.children().first().remove();
		target.css({'left': -target.children('a').outerWidth()});
		target.append(firstEl);
	});
}

function toRight(button, target) {
	button.off('click');
	target.animate({
		'left': parseInt(target.css('left')) + target.children('a').outerWidth()
	}, 500, function() {
		button.on('click', function() {
			toRight(button, target);
		});
		var lastEl = target.children().last();
		target.children().last().remove();
		target.css({'left': -target.children('a').outerWidth()});
		target.prepend(lastEl);
	});
}

function fixSlider(id) {
	var lastEl = $(id).children().last();
	$(id).children().last().remove();
	$(id).css({'left': -id.children('a').outerWidth()});
	console.log(id.children('a').width());
	$(id).prepend(lastEl);
}