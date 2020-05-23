$(document).ready(function() {
	$('#pdnCheck').change(function() {
		if ($(this).prop('checked'))
			$('#singUp').removeAttr('disabled');
		else
			$('#singUp').attr('disabled', true);
	});

	$("#phone").mask("8 (999) 999-99-99");

	$('#monthName').text(monthName[currentMonth]);
	$('#year').text(currentYear);

	getCalendar(currentMonth, currentYear);

	$('#nextMonth').click(function() {
		$('.monthDay').remove();
		currentMonth++;
		activePrev++;

		if (currentMonth > 11) {
			currentMonth = 0;
			currentYear++;
		}

		$('#monthName').text(monthName[currentMonth]);
		$('#year').text(currentYear);

		getCalendar(currentMonth, currentYear);

		if (activePrev > 0)
			$('#prevMonth').removeAttr('disabled');

		if (activePrev == 2)
			$('#nextMonth').attr('disabled', true);
	});

	$('#prevMonth').click(function() {
		$('.monthDay').remove();
		currentMonth--;
		activePrev--;

		if (currentMonth < 0) {
			currentMonth = 11;
			currentYear--;
		}

		$('#monthName').text(monthName[currentMonth]);
		$('#year').text(currentYear);

		getCalendar(currentMonth, currentYear);

		if (activePrev == 0)
			$('#prevMonth').attr('disabled', 'true');

		if (activePrev < 2)
			$('#nextMonth').removeAttr('disabled');
	});
});

var currentMonth = new Date().getMonth(), currentYear = new Date().getFullYear(),
	activePrev = 0,
	monthName = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

function getCalendar(m, y) {
	var prevMonth = getPrevMonth(m, y),
		nextMonth = getNextMonth(m, y),
		countPrevMonthDays = сountMonthDays(prevMonth.m, prevMonth.y);

	var prevMonthDays = getWeekDay(сountMonthDays(prevMonth.m, prevMonth.y), prevMonth.m)
		nextMonthDays = 7 - getWeekDay(сountMonthDays(m, y), m);

	if (prevMonthDays != 6)
		for (var i = countPrevMonthDays - prevMonthDays; i <= countPrevMonthDays; i++)
			HTMLString(i, prevMonth.m, prevMonth.y);

	for (var i = 1; i <= сountMonthDays(m, y); i++)
		HTMLString(i, m, y);

	for (var i = 1; i < nextMonthDays; i++)
		HTMLString(i, nextMonth.m, nextMonth.y);
}

function сountMonthDays(m = new Date().getMonth(), y = new Date().getFullYear()) {
	return 32 - new Date(y, m, 32).getDate();
}

function getPrevMonth(m = new Date().getMonth(), y = new Date().getFullYear()) {
	m--;
	if (m < 0) {
		m = 11;
		y--;
	}

	return {
		'm': m,
		'y': y
	};
}

function getNextMonth(m = new Date().getMonth(), y = new Date().getFullYear()) {
	m++;
	if (m > 11) {
		m = 0;
		y++;
	}

	return {
		'm': m,
		'y': y
	};
}

function getWeekDay(d, m, y = new Date().getFullYear()) {
	var days = [6, 0, 1, 2, 3, 4, 5],
		date = new Date(y, m, d)

	return days[date.getDay()];
}

var arWeekEnd = {
	'2020': {
		'3': [4, 5, 11, 12, 18, 19, 25, 26],
		'4': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 16, 17, 23, 24, 30, 31],
		'5': [6, 7, 13, 14, 20, 21, 27, 28]
	}
}

function getWeekEnd(d, m, y) {
	if (Object.keys(arWeekEnd).includes(String(y))) {
		if (Object.keys(arWeekEnd[y]).includes(String(m))) {
			return arWeekEnd[y][m].includes(d);
		} else {
			return false;
		}
	} else {
		return false;
	}
}

function HTMLString(i, m, y) {
	$('#days').append('<div class="monthDay py-3 border-right border-bottom">' + i + '</div>');

	var div = $('#days > div').last();

	if (new Date(y, m, i) < new Date().setHours(0, 0, 0, 0))
		div.addClass('no-active');

	if (getWeekEnd(i, m, y))
		div.addClass('text-danger');

	if ((y == new Date().getFullYear()) &&
		(m == new Date().getMonth()) &&
		(i == new Date().getDate()))
		div.addClass('text-primary');

	if (!div.hasClass('no-active') && !div.hasClass('text-danger'))
		div.click(function() {
			$('.monthDay').removeClass('active');
			$(this).addClass('active');
			getFreeTime($(this).text());
		});
}

var freeTime = {
	'week': {
		'0': ['12:00', '12:20', '12:40', '13:00'],
		'1': ['12:00', '12:20', '12:40', '13:00'],
		'2': ['12:00', '12:20', '12:40', '13:00'],
		'3': ['12:00', '12:20', '12:40', '13:00'],
		'4': ['12:00', '12:20', '12:40']
	},
	'date': {
		'2020': {
			'4': {
				'21': ['9:00', '9:30']
			}
		}
	}
}

function getFreeTime(day) {
	$('.time').remove();

	if (String(currentYear) in freeTime['date'] &&
		String(currentMonth) in freeTime['date'][String(currentYear)] &&
		day in freeTime['date'][String(currentYear)][String(currentMonth)])
		freeTime.date[String(currentYear)][String(currentMonth)][day].forEach(function(item) {
			$('#freeTime').append('<span class="time alert alert-danger py-1 m-2 px-2">' + item + '</span>');
		});
	else
		if (getWeekDay(day, currentMonth, currentYear) in freeTime['week'])
			freeTime['week'][getWeekDay(day, currentMonth, currentYear)].forEach(function(item) {
				$('#freeTime').append('<span class="time alert alert-danger py-1 m-2 px-2">' + item + '</span>');
			});

	$('.time').click(function() {
		$('.time').removeClass('alert-success').addClass('alert-danger');
		$(this).addClass('alert-success').removeClass('alert-danger');
	});
}