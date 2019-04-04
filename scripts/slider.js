function slide(el) {
	var obj = el.parent().parent(),
		direction = el.attr('class').split(' ')[0],
		left = 0;

	switch(direction) {
		case 'right':
			left = -320 + parseInt(obj.children('.inner').children(':first').css('margin-left'));

			obj.children('.controls').children('.left').removeClass('hideon').addClass('hideoff');

			break;
		case 'left':
			left = 320 + parseInt(obj.children('.inner').children(':first').css('margin-left'));

			obj.children('.controls').children('.right').removeClass('hideon').addClass('hideoff');

			break;
	}

	if (left >= 0) {
		left = 0;

		obj.children('.controls').children('.left').removeClass('hideoff').addClass('hideon');
	} else if (left < parseInt((-320 * (obj.children('.inner').children().length - 2)))) {
		left = parseInt((-320 * (obj.children('.inner').children().length - 1)));

		obj.children('.controls').children('.right').removeClass('hideoff').addClass('hideon');
	}

	obj.children('.inner').children(':first').css({
		'margin-left': left + 'px'
	});

	el.off('click');

	setTimeout(() => {
		el.on('click', function() {
			slide($(this));
		})
	}, 300);
}