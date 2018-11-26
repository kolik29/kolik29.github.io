$(document).ready(function() {
	$('#menu').on('click', function () {
		if ($('.menuScreen').hasClass('d-none')) {
			$('.menuScreen').removeClass('d-none');
			$('.menuScreen').addClass('d-flex');
			$(document).on('mousewheel', function (e) {e.preventDefault()});
			toClose(true);
		} else {			
			$('.menuScreen').removeClass('d-flex');
			$('.menuScreen').addClass('d-none');
			$(document).off('mousewheel');
			toClose(false);
		}
	});
});

function toClose(close) {
	let v, r;
	if (close) {
		v = 'hidden';
		r = '45';
	} else {
		v = 'visible';
		r = '0';
	}

	$('#menu > .burgerMenuLine').eq(0).css({
		'visibility': v
	});
	$('#menu > .burgerMenuLine').eq(1).css({
		'visibility': v
	});

	$('.burgerMenuClose > .burgerMenuLine').eq(0).css({
		'transform': 'rotate(' + r + 'deg)'
	});

	$('.burgerMenuClose > .burgerMenuLine').eq(1).css({
		'transform': 'rotate(-' + r + 'deg)'
	})
}
