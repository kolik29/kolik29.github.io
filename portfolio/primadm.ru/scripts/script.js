$(document).ready(function() {
	$('#news-right').on('click', function() {
		toLeft($(this), $('#news-slider'));
	});

	$('#news-left').on('click', function() {
		toRight($(this), $('#news-slider'));
	});

	let lastEl = $('#news-slider').children().last();
	$('#news-slider').children().last().remove();
	$('#news-slider').css({'left': -$('#news-slider img').width()});
	$('#news-slider').prepend(lastEl);
});

function toLeft(button, target) {
	button.off('click');
	target.animate({
		'left': parseInt(target.css('left')) - target.children('a').width()
	}, 500, function() {
		button.on('click', function() {
			toLeft(button, target);
		});
		let firstEl = target.children().first();
		target.children().first().remove();
		target.css({'left': -target.children('a').width()});
		target.append(firstEl);
	});
}

function toRight(button, target) {
	button.off('click');
	target.animate({
		'left': parseInt(target.css('left')) + target.children('a').width()
	}, 500, function() {
		button.on('click', function() {
			toRight(button, target);
		});
		let lastEl = target.children().last();
		target.children().last().remove();
		target.css({'left': -target.children('a').width()});
		target.prepend(lastEl);
	});
}