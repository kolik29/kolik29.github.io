$(document).ready(function() {
	$('*[name=event-type]').change(function() {
		$(this).parent().parent().children().eq(1).find('.dis-block').removeClass('dis-block');
		$(this).parent().parent().children().find('.' + $(this).attr('id')).addClass('dis-block');
	});

	$('#more-link').change(function() {
		$('.links-body a:nth-child(n+9)').toggle();
	});

	var arMonths = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];

	$('.calendar .control-left').on('click', function() {
		var monthID = arMonths.indexOf($('.calendar #month').text()) - 1;

		if (monthID == -1) {
			monthID = 11;
			$('.calendar #year').text($('.calendar #year').text() - 1);
		}

		$('.calendar #month').text(arMonths[monthID]);

		resetCalendar();
	});

	$('.calendar .control-right').on('click', function() {
		var monthID = arMonths.indexOf($('.calendar #month').text()) + 1;

		if (monthID == 12) {
			monthID = 0;
			$('.calendar #year').text(parseInt($('.calendar #year').text()) + 1);
		}

		$('.calendar #month').text(arMonths[monthID]);

		resetCalendar();
	});

	$('#calendar-days').ready(function() {
		var dt = new Date();
		$('#month').text(arMonths[dt.getMonth()]);
		$('#year').text(dt.getFullYear());

		resetCalendar();
	});
});

var arMonths = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];

function resetCalendar() {
	var dt = new Date();
	dt.setFullYear(parseInt($('#year').text()));
	dt.setMonth(arMonths.indexOf($('.calendar #month').text()));
	dt.setDate(1);

	var html = '';

	for (var i = 1, j = 1; i < dt.getDay() + daysInMonth(dt.getMonth(), dt.getFullYear()); i++) {
		if (i < dt.getDay()) {
			html += '<span></span>';
		}
		else {
			if (j == (new Date()).getDate())
				html += '<div class="current">' + j + '</div>';
			else
				html += '<div>' + j + '</div>';
			j++;
		}
	}

	$('#calendar-days').html(html);
}

function daysInMonth(month, year) {
	return new Date(year, month + 1, 0).getDate();
}