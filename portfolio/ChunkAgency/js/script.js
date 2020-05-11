$(document).ready(function() {
	$('menu .button').click(function() {
		if (!$(this).hasClass('open') && !$(this).hasClass('close')) {
			$(this).addClass('open');
			$('menu .page').addClass('open');
			$('nav').addClass('show--reverse');
		} else if ($(this).hasClass('open')) {
			$(this).removeClass('open').addClass('close');
			$('menu .page').removeClass('open');
			$('nav').removeClass('show--reverse');
		} else if ($(this).hasClass('close')) {
			$(this).removeClass('close').addClass('open');
			$('menu .page').addClass('open');
			$('nav').addClass('show--reverse');
		}
	});

	$(window).scroll(function() {
		if ($(window).scrollTop() > 1)
			$('nav').addClass('show');
		else
			$('nav').removeClass('show');
	});

	var currentSlideNum = 0;

	$('.control-right').click(function() {
		currentSlideNum--;
		rotateAndSroll(currentSlideNum);
	});

	$('.control-left').click(function() {
		currentSlideNum++;
		rotateAndSroll(currentSlideNum);
	});

	$('.to-top').click(function() {
		$('html, body').animate({scrollTop: 0 }, 500);
	});

	$('.screen-down').click(function() {
		$('html, body').animate({scrollTop: $('header').height() }, 500);
	});
});

function rotateAndSroll(slideNum) {
	if ($(window).scrollTop() > 1)
		$('html, body').animate({scrollTop: 0 }, 500, function() {
			$('.slider-wrapper').css({
				'transform': 'rotateY(' + (slideNum * 90) + 'deg)'
			});
		});
	else
		$('.slider-wrapper').css({
			'transform': 'rotateY(' + (slideNum * 90) + 'deg)'
		});
}