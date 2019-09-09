$(document).ready(function() {
	var objLabelLast = $('.photos-row label').last().clone().attr('for', 'slide_0'),
		objInputLast = $('.photos-row input').last().clone().attr('id', 'slide_0'),
		objLabelFirst = $('.photos-row label').first().clone().attr('for', 'slide_6'),
		objInputFirst = $('.photos-row input').first().clone().attr('id', 'slide_6');

	$('.photos-row').append(objInputFirst).append(objLabelFirst).prepend(objLabelLast).prepend(objInputLast);
	$('.photos-row label').first().css({
		'margin-left': -$('.photos-row label').first().outerWidth(true)
	});
	$('.photos-row input').eq(-2).trigger('click');

	setTimeout(() => {
		$('.photos-row').addClass('trans');
	}, 500);

	$('.slider-control--right').on('click', function() {
		$('.photos-row input:checked').prev().prev().trigger('click');

		$('.photos-row label').first().css({
			'min-width': '',
			'margin': ''
		});

		objLabelLast = $('.photos-row label').last().css({
			'margin-left': -$('.photos-row label').first().outerWidth(true)
		});
		objInputLast = $('.photos-row input').last();

		$('.photos-row').prepend(objLabelLast).prepend(objInputLast);
	});

	$('.slider-control--left').on('click', function() {
		$('.photos-row input:checked').next().next().trigger('click');

		objLabelFirst = $('.photos-row label').first().css({
			'min-width': '',
			'margin': ''
		});

		objInputFirst = $('.photos-row input').first();

		$('.photos-row').append(objInputFirst).append(objLabelFirst);

		$('.photos-row label').first().css({
			'margin-left': -$('.photos-row label').first().outerWidth(true)
		});
	});

	$('.photos-row label').on('click', function() {
		if (!$(this).prev().is(':checked')) {
		}
	});
});