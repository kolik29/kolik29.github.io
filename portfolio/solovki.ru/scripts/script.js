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
	if ($('.links-body a').length <= 8)
		$('.links-body + .link').css({
			'display': 'none'
		})
}

/*Yandex MAP*/
ymaps.ready(init);

function init () {
	var myMap = new ymaps.Map("map", {
			center: [65.021832, 35.706743],
			zoom: 17,
			controls: []
		}),
		myPlacemark = new ymaps.Placemark([65.021721, 35.709587], {});

	myMap.behaviors.disable('scrollZoom');

	myMap.geoObjects.add(myPlacemark);
}