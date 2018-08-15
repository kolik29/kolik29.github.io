$('.selectElement').each(function (argument) {
	if ($(this).width() <= ($(this).children('ul').width() + 34)){
		$(this).width($(this).children('ul').width() + 34);
	} else {
		$(this).width($(this).width());
	}

	$(this).children('ul').width($(this).children('.valueText').width() + 20);
});

$('.selectElement').on('click', function() {
	if ($(this).hasClass('roll')) {
		$(this).children('ul').css({
			display: 'inline-block'
		});

		$(this).children('.valueText').children('img').css({
			transform: 'rotate(180deg)'
		});

		$(this).removeClass('roll');
	} else {
		$(this).children('ul').css({
			display: 'none'
		});

		$(this).children('.valueText').children('img').css({
			transform: 'rotate(0deg)'
		});

		$(this).addClass('roll');
	}
});

$('.selectElement li').on('click', function() {
	$(this).parent().parent().children('.valueText').children('span').text($(this).text());
});

$(document).on('click', function(e) {
	if ((!$('.selectElement').is(e.target)) && ($('.selectElement').has(e.target).length === 0)) {
		$('.selectElement').children('ul').css({
			display: 'none'
		});

		$('.selectElement').children('.valueText').children('img').css({
			transform: 'rotate(0deg)'
		});
	}
});

/************/
/*YANDEX MAP*/
/************/
ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
            center: [55.76, 37.64],
            zoom: 10
        }, {
            searchControlProvider: 'yandex#search'
        }),

    // Создаем геообъект с типом геометрии "Точка".
        myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [55.8, 37.8]
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'Я тащусь',
                hintContent: 'Ну давай уже тащи'
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon',
            // Метку можно перемещать.
            draggable: true
        });

    myMap.geoObjects
        .add(myGeoObject);
}
