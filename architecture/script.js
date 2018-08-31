//Данные по муниципальным объектам
//содержат название МО, название мун. объекта и его координаты
let munObjData = {
	"Муниципальное образование «Боброво-Лявленское»":{
		"Филиал ГБУЗ «Приморская ЦРБ» ФАП «Кузьмино»":{
			"coord":["64.384188","40.952406"]
		},
		"Филиал ГБУЗ «Приморская ЦРБ» ФАП «Лявля»":{
			"coord":["64.377379","41.022879"]
		},
		"ГБУЗ АО Приморская ЦРБ «Врачебная амбулатория Боброво»":{
			"coord":["64.356227","41.152623"]
		},
		"Тренажерный зал":{
			"coord":["64.384540","41.023301"]
		}
	},
	"Муниципальное образование «Заостровское»":{
		"Тренажерный зал":{
			"coord":["64.484341","40.506126"]
		}
	},
	"Муниципальное образование «Катунинское»":{
		"ГБУЗ АО Приморская ЦРБ Врачебная амбулатория \"Катунино\"":{
			"coord":["64.389663","40.625348"]
		},
		"Филиал ГБУЗ «Приморская ЦРБ» ФАП «Беломорье»":{
			"coord":["64.292888","40.892610"]
		},
		"МБОУ «Катунинская СШ»":{
			"coord":["64.388395","40.630575"]
		},
		"МБУ ДО «Приморская ДШИ»":{
			"coord":["64.389731","40.624523"]
		}
	},
	"Муниципальное образование «Лисестровское»":{
		"Филиал ГБУЗ АО «Приморская ЦРБ» ФАП «Лисестровское»":{
			"coord":["64.464608","40.638100"]
		},
		"Филиал ГБУЗ АО «Приморская ЦРБ» ФАП «Васьково»":{
			"coord":["64.413780","40.460834"]
		},
		"Филиал ГБУЗ АО «Приморская ЦРБ»  ФАП «Ширшинский ЗВЕРОСОВХОЗ»":{
			"coord":["64.410079","40.741742"]
		},
		"МБОУ «Васьковская СШ»":{
			"coord":[["64.412418","40.453393"],["64.409954","40.454786"]]
		},
		"Филиал «Детская школа искусств п. Васьково» МБУ ДО «Приморская ДШИ»":{
			"coord":["64.409954","40.454786"]
		}
	},
	"Муниципальное образование «Островное»":{
		"Филиал ГБУЗ АО «Приморская ЦРБ»  ФАП «Вознесенье»":{
			"coord":["64.574120","40.335344"]
		},
		"Филиал ГБУЗ АО «Приморская ЦРБ»  ФАП «Ластола»":{
			"coord":["64.600324","40.294723"]
		},
		"Филиал ГБУЗ АО «Приморская ЦРБ»  ФАП «Пустошь»":{
			"coord":["64.591124","40.441648"]
		},
		"Помещение для занятия физкультурой":{
			"coord":["64.589226","40.439816"]
		}
	},
	"Муниципальное образование «Пертоминское»":{
		"АО «2-ой Архангельский объединенный авиаотряд» Аэропорт":{
			"coord":["64.789508","38.421504"]
		}
	},
	"Муниципальное образование «Приморское»":{
		"МБУ ДО \"Приморская ДЮСШ\"":{
			"coord":["64.537978","40.159633"]
		},
		"Помещение для занятия физкультурой":{
			"coord":["64.537978","40.159633"]
		}
	},
	"Муниципальное образование «Сельское поселение «Соловецкое»":{
		"ГБУЗ АО «АОКБ» филиал Соловецкая участковая больница":{
			"coord":["65.021838","35.708806"]
		},
		"Помещение для занятий физкультурой":{
			"coord":["65.026868","35.714796"]
		}
	},
	"Муниципальное образование «Талажское»":{
		"Филиал ГБУЗ АО «Приморская ЦРБ» ФАП «Талаги»":{
			"coord":["64.622619","40.669461"]
		},
		"Филиал ГБУЗ АО «Приморская ЦРБ» ФАП «Повракула»":{
			"coord":["64.618134","40.590996"]
		},
		"Тренажерный зал":{
			"coord":["64.622382","40.667146"]
		}
	},
	"Муниципальное образование «Уемское»":{
		"ГБУЗ АО «Приморская ЦРБ» Уемская районная больница":{
			"coord":["64.473790","40.864221"]
		},
		"Филиал «Детская школа искусств п. Уемский» МБУ ДО «Приморская ДШИ»":{
			"coord":["64.478118","40.842428"]
		}
	}
}

//Добавление МО в выпадающий список
function addDropDownList() {
	$('#munForm').children('ul').html('');
	for(key in munObjData) {
		$('#munForm').children('ul').html(
			$('#munForm').children('ul').html() +
			'<li>' + key + '</li>'
		);
	}
}
addDropDownList();

//Загрузка списка мун. объектов после выбора МО
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

//Отображение на карте выбранного объекта
$('.selectElement').on('click', 'li', function() {
	$(this).parent().parent().children('.valueText').children('span').text($(this).text());

	if ($(this).parent().parent().attr('id') == 'munForm') {
		$('#munObj').children('.valueText').children('span').text('Выберите объект');

		$('#munObj').children('ul').html('');
		for (key in munObjData[$(this).text()]) {
			$('#munObj').children('ul').html(
				$('#munObj').children('ul').html() +
				'<li data-coord="' + munObjData[$(this).text()][key].coord + '">' + key + '</li>'
			);
		}
	} else {
		mapCircle.geometry.setCoordinates($(this).data('coord').split(','));
		yMap.setCenter($(this).data('coord').split(','), 18, {
    		checkZoomRange: true
		});
    	yMap.geoObjects.add(mapCircle);
	}
});

//Закрывает выпадающие списки при клике в любой части дкоумента, крмое самих выпадющих списков
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

ymaps.ready(init); //инициализация карты

//Конструктор карты и точки
var mapCircle, yMap;
function init() {
    yMap = new ymaps.Map("map", {
        center: [64.543235, 40.537195],
        zoom: 13
    }, {
        searchControlProvider: 'yandex#search'
    });

	mapCircle = new ymaps.Circle([[], 30], { }, {
       	fillColor: "#DB709377",
      	strokeColor: "#990066",
       	strokeOpacity: 0.8,
       	strokeWidth: 2
    });

    var polygon = new ymaps.GeoObject({
        // Описываем геометрию геообъекта.
        geometry: {
            // Тип геометрии - "Многоугольник".
            type: "Polygon",
            // Указываем координаты вершин многоугольника.
            coordinates: [
                // Координаты вершин внешнего контура.
                [
                    [64.545673, 40.516252],
                    [64.543900, 40.540972],
                    [64.534885, 40.537882],
                    [64.534959, 40.517626],
                    [64.545673, 40.516252]
                ]
            ],
            // Задаем правило заливки внутренних контуров по алгоритму "nonZero".
            fillRule: "nonZero"
        }
    }, {
        // Описываем опции геообъекта.
        // Цвет заливки.
        fillColor: '#00FF00',
        // Цвет обводки.
        strokeColor: '#0000FF',
        // Общая прозрачность (как для заливки, так и для обводки).
        opacity: 0.5,
        // Ширина обводки.
        strokeWidth: 2
    });

    // Добавляем многоугольник на карту.
    yMap.geoObjects.add(polygon);
}