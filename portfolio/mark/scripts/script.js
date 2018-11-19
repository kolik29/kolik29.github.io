$(document).ready(function() {
	$('#menu').on('click', function () {
		if ($('.menuScreeen').hasClass('d-none')) {
			$('.menuScreeen').removeClass('d-none');
			$('.menuScreeen').addClass('d-flex');
			toClose(true);
		} else {			
			$('.menuScreeen').removeClass('d-flex');
			$('.menuScreeen').addClass('d-none');
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