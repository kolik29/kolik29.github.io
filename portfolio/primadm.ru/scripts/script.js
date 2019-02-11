$(document).ready(function() {
	loadSlider($('#news_slider'), true);
	loadSlider($('#photo_slider'), false, 3);
	loadSlider($('#banners_slider'), false, 7);

	loadCalendar($('#calendar'));
});

function loadCalendar(calendar) {
	var date = new Date();
	var startYear = '2010';
	var months = [
		'январь',
		'февраль',
		'март',
		'апрель',
		'май',
		'июнь',
		'июль',
		'август',
		'сентябрь',
		'октябрь',
		'ноябрь',
		'декабрь'
	];

	setMonth();
	setYear();
	resetDateTable();

	calendar.find('#month').on('click', function() {
		calendar.find('#month-list').css({
			'top': '0'
		});

		calendar.find('#month-list div').on('click', function() {
			resetDateTable(calendar.find('#year').text(), $(this).index());
			setMonth($(this).index());

			calendar.find('#month-list').css({
				'top': '-100%'
			});
		});
	});

	calendar.find('#year').on('click', function() {
		calendar.find('#year-list').css({
			'top': '0'
		});

		calendar.find('#year-list div').on('click', function() {
			resetDateTable($(this).html(), months.indexOf(calendar.find('#month').text()));
			setYear($(this).html());

			calendar.find('#year-list').css({
				'top': '-100%'
			});
		});
	});

	calendar.find('#month-day div').on('click', function() {
		calendar.find('#month-day div').each(function() {
			$(this).removeClass('current');
		});
		$(this).addClass('current');
	});

	function daysInMonth(year, month) {
		var res = [];

		for (var i = 1; i <= (32 - new Date(year, month, 32).getDate()); i++)
			res.push(i);

		return res;
	}

	function setMonth(id = date.getMonth()) {
		calendar.find('#month').html(months[id]);

		calendar.find('#month-list').html('');

		months.forEach(function(item, i) {
			if (i == id) {
				calendar.find('#month-list').append('<div class="select">' + item + '</div>');
			} else {
				calendar.find('#month-list').append('<div>' + item + '</div>');
			}
		});
	}

	function setYear(year = date.getFullYear()) {
		calendar.find('#year').html(year);

		calendar.find('#year-list').html('');

		for (var i = 2010; i <= date.getFullYear(); i++) {
			if (i == year) {
				calendar.find('#year-list').append('<div class="select">' + i + '</div>');
			} else {
				calendar.find('#year-list').append('<div>' + i + '</div>');
			}
		}
	}

	function resetDateTable(year = date.getFullYear(), month = date.getMonth()) {
		calendar.find('#month-day').html('');
		var startWeekDay = (new Date(year, month, 1)).getDay();
		var endWeekDay = (new Date(year, month, daysInMonth[daysInMonth.length - 1])).getDay();
		var htmlDays = '';
		var dim = daysInMonth(year, month);

		for (var i = 1; i < startWeekDay; i++)
			htmlDays += '<div></div>';

		dim.forEach((item) => {
			if (item != date.getDate())
				htmlDays += '<div>' + item + '</div>';
			else
				htmlDays += '<div class="current">' + item + '</div>';
		})

		for (var i = 1; i < 7 - endWeekDay; i++)
			htmlDays += '<div></div>';

		console.log(endWeekDay);

		calendar.find('#month-day').html(htmlDays);
	}
}

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