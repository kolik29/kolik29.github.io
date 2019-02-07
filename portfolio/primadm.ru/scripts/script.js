$(document).ready(function() {
	loadSlider($('#news_slider'), true);
	loadSlider($('#photo_slider'), false, 3);
	loadSlider($('#banners_slider'), false, 7);
});

function loadSlider(slider, addDotted = false, count = 1) {
	slider.find('#button-next').on('click', function () { slide('next'); });
	slider.find('#button-prev').on('click', function () { slide('prev'); });

	var width = (100 / count) + '%';

	slider.find('.line').children().each(function() {
		$(this).width(width);
	});

	if (addDotted) {
		slider.append('<div id="dotted">');

		slider.find('.line').children().each(function() {
			slider.find('#dotted').append('<span>');
		});
		slider.find('#dotted').children().eq(0).addClass('select');
	}

	function slide(side) {
		slider.find('#button-next').off('click');
		slider.find('#button-prev').off('click');

		slider.find('.line').each(function() {
			switch (side) {
				case 'next':
					$(this).children().first().css({
						'margin-left': '-' + width
					});
					setTimeout(() => {
						$(this).append(
							$(this).children().first().css({
								'margin-left': '0'
							})
						);
					}, 300);
					break;

				case 'prev':
					$(this).prepend(
						$(this).children().last().css({
							'margin-left': '-' + width
						})
					);
					setTimeout(() => {
						$(this).children().first().css({
							'margin-left': '0'
						})
					}, 1);
					break;

				default:
					break;
			}
		});

		dott(side);

		setTimeout(() => {
			slider.find('#button-next').on('click', function () { slide('next'); });
			slider.find('#button-prev').on('click', function () { slide('prev'); });
		}, 300);
	}

	function dott(side) {
		var currentDot = 0;
		if (addDotted) {
			$('#dotted > *').each(function() {
				if ($(this).hasClass('select'))
					currentDot = $(this).index();

				$(this).removeClass('select');
			});
		}

		switch (side) {
			case 'next':
				if (addDotted) {
					if ($('#dotted > *').length == currentDot + 1)
						$('#dotted > *').eq(0).addClass('select');
					else
						$('#dotted > *').eq(currentDot + 1).addClass('select');
				}
				break;

			case 'prev':
				if (addDotted) {
					if ($('#dotted > *').length == 0)
						$('#dotted > *').eq($('#dotted > *').length - 1).addClass('select');
					else
						$('#dotted > *').eq(currentDot - 1).addClass('select');
				}
				break;

			default:
				break;
		}
	}
}