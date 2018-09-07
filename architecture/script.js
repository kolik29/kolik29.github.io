//Данные по муниципальным объектам
//содержат название МО, название мун. объекта и его координаты
let munObjData = {
	"Муниципальное образование «Боброво-Лявленское»":{		
		"полигон":{
			"type":"poly",
			"coord":[["64.384325", "40.952452"],["64.384199", "40.952106"],["64.384084", "40.952344"],["64.384199", "40.952688"]]
		},
		"Филиал ГБУЗ «Приморская ЦРБ» ФАП «Кузьмино»":{
			"type":"circle",
			"coord":["64.384188","40.952406"]
		},
		"Филиал ГБУЗ «Приморская ЦРБ» ФАП «Лявля»":{
			"type":"circle",
			"coord":["64.377379","41.022879"]
		},
		"ГБУЗ АО Приморская ЦРБ «Врачебная амбулатория Боброво»":{
			"type":"circle",
			"coord":["64.356227","41.152623"]
		},
		"Тренажерный зал":{
			"type":"circle",
			"coord":["64.384540","41.023301"]
		}
	},
	"Муниципальное образование «Заостровское»":{
		"Тренажерный зал":{
			"type":"circle",
			"coord":["64.484341","40.506126"]
		}
	},
	"Муниципальное образование «Катунинское»":{
		"ГБУЗ АО Приморская ЦРБ Врачебная амбулатория \"Катунино\"":{
			"type":"circle",
			"coord":["64.389663","40.625348"]
		},
		"Филиал ГБУЗ «Приморская ЦРБ» ФАП «Беломорье»":{
			"type":"circle",
			"coord":["64.292888","40.892610"]
		},
		"МБОУ «Катунинская СШ»":{
			"type":"circle",
			"coord":["64.388395","40.630575"]
		},
		"МБУ ДО «Приморская ДШИ»":{
			"type":"circle",
			"coord":["64.389731","40.624523"]
		}
	},
	"Муниципальное образование «Лисестровское»":{
		"Филиал ГБУЗ АО «Приморская ЦРБ» ФАП «Лисестровское»":{
			"type":"circle",
			"coord":["64.464608","40.638100"]
		},
		"Филиал ГБУЗ АО «Приморская ЦРБ» ФАП «Васьково»":{
			"type":"circle",
			"coord":["64.413780","40.460834"]
		},
		"Филиал ГБУЗ АО «Приморская ЦРБ»  ФАП «Ширшинский ЗВЕРОСОВХОЗ»":{
			"type":"circle",
			"coord":["64.410079","40.741742"]
		},
		"МБОУ «Васьковская СШ»":{
			"type":"circle",
			"coord":[["64.412418","40.453393"],["64.409954","40.454786"]]
		},
		"Филиал «Детская школа искусств п. Васьково» МБУ ДО «Приморская ДШИ»":{
			"type":"circle",
			"coord":["64.409954","40.454786"]
		}
	},
	"Муниципальное образование «Островное»":{
		"Филиал ГБУЗ АО «Приморская ЦРБ»  ФАП «Вознесенье»":{
			"type":"circle",
			"coord":["64.574120","40.335344"]
		},
		"Филиал ГБУЗ АО «Приморская ЦРБ»  ФАП «Ластола»":{
			"type":"circle",
			"coord":["64.600324","40.294723"]
		},
		"Филиал ГБУЗ АО «Приморская ЦРБ»  ФАП «Пустошь»":{
			"type":"circle",
			"coord":["64.591124","40.441648"]
		},
		"Помещение для занятия физкультурой":{
			"type":"circle",
			"coord":["64.589226","40.439816"]
		}
	},
	"Муниципальное образование «Пертоминское»":{
		"АО «2-ой Архангельский объединенный авиаотряд» Аэропорт":{
			"type":"circle",
			"coord":["64.789508","38.421504"]
		}
	},
	"Муниципальное образование «Приморское»":{
		"МБУ ДО \"Приморская ДЮСШ\"":{
			"type":"circle",
			"coord":["64.537978","40.159633"]
		},
		"Помещение для занятия физкультурой":{
			"type":"circle",
			"coord":["64.537978","40.159633"]
		}
	},
	"Муниципальное образование «Сельское поселение «Соловецкое»":{
		"ГБУЗ АО «АОКБ» филиал Соловецкая участковая больница":{
			"type":"circle",
			"coord":["65.021838","35.708806"]
		},
		"Помещение для занятий физкультурой":{
			"type":"circle",
			"coord":["65.026868","35.714796"]
		}
	},
	"Муниципальное образование «Талажское»":{
		"Филиал ГБУЗ АО «Приморская ЦРБ» ФАП «Талаги»":{
			"type":"circle",
			"coord":["64.622619","40.669461"]
		},
		"Филиал ГБУЗ АО «Приморская ЦРБ» ФАП «Повракула»":{
			"type":"circle",
			"coord":["64.618134","40.590996"]
		},
		"Тренажерный зал":{
			"type":"circle",
			"coord":["64.622382","40.667146"]
		}
	},
	"Муниципальное образование «Уемское»":{
		"ГБУЗ АО «Приморская ЦРБ» Уемская районная больница":{
			"type":"circle",
			"coord":["64.473790","40.864221"]
		},
		"Филиал «Детская школа искусств п. Уемский» МБУ ДО «Приморская ДШИ»":{
			"type":"circle",
			"coord":["64.478118","40.842428"]
		}
	}
}

//Инициализация яндекс карты и шаблонов объектов
ymaps.ready(init); //инициализация карты

var mapCircle, //круг на карте
	mapPoly, //многоугольник на карте
	yMap = {}; //сама карта

function init() { //Конструктор карты и объектов
    yMap = new ymaps.Map("map", { 
        center: [64.543235, 40.537195], //центр карты (где-то над городом)
        zoom: 13 //зум карты
    });

	mapCircle = new ymaps.Circle([[], 30], { }, { //30 - радиус тчоки в метрах
       	fillColor: "#DB709377", //цвет заливки
      	strokeColor: "#99006650", //цвет границы
       	strokeWidth: 2 //ширина гарницы
    });

    mapPoly = new ymaps.Polygon([
    		[["64.384325", "40.952452"],["64.384199", "40.952106"],["64.384084", "40.952344"],["64.384199", "40.952688"],["64.384325", "40.952452"]]
    	], {}, {
       	fillColor: "#DB709377", //цвет заливки
      	strokeColor: "#99006650", //цвет границы
       	strokeWidth: 2 //ширина гарницы
    });
}

//Интерфейс
function createSelect(selectElement, objectData, addData = false) { //создаёт выпадющий список с муниципальными объектами
	selectElement.html('');
	Object.keys(objectData).forEach(function (item){
		selectElement.append($('<li>').text(item));
	});
}

function closeList(listEl = $('.selectElement ul'), currentEl = $('.valueText')) { //закрыть выпадающий список, по умолчанию закрывает все списки
	currentEl.children('img').css('transform', 'rotate(0)');
	listEl.css('display', 'none');
	currentEl.removeClass('active');
}

function openList(listEl, currentEl) { //показать выпадающий список
	currentEl.children('img').css('transform', 'rotate(180deg)');
	listEl.css('display', 'block');
	currentEl.addClass('active');
}

createSelect($('#munForm ul'), munObjData);

//События
$('.valueText').on('click', function() { //показывает/скрывает выпадающее меню
	closeList();
	let listEl = $(this).parent().children('ul')

	if ($(this).hasClass('active')) 
		closeList(listEl, $(this));
	else
		openList(listEl, $(this));
});

$('#munForm').on('click', 'li', function() { //выбирает МО
	createSelect($('#munObj ul'), munObjData[$(this).text()]);
	$('#munForm .valueText').children('span').text($(this).text());
	closeList();
});

$('#munObj').on('click', 'li', function() { //выбирает объект
	$('#munObj .valueText').children('span').text($(this).text());
	closeList();

	yMap.geoObjects.removeAll();
	switch(munObjData[$('#munForm .valueText span').text()][$('#munObj .valueText span').text()].type) {
		case 'circle':
			mapCircle.geometry.setCoordinates(munObjData[$('#munForm .valueText span').text()][$('#munObj .valueText span').text()].coord);
			yMap.geoObjects.add(mapCircle);
			yMap.setBounds(mapCircle.geometry.getBounds(), {
				checkZoomRange:true
			}).then(function() {
				if(map.getZoom() > 10) 
					map.setZoom(10);
			});
		break;

		case 'poly':
			mapPoly.geometry.setCoordinates([resizePoly(munObjData[$('#munForm .valueText span').text()][$('#munObj .valueText span').text()].coord)])
			yMap.geoObjects.add(mapPoly);
			yMap.setBounds(mapPoly.geometry.getBounds(), {
				checkZoomRange:true
			}).then(function() {
				if(map.getZoom() > 10) 
					map.setZoom(10);
			});
		break;
	}
});

//Математика, геометрия, алгоритмы
function resizePoly(arrCoord) { //смена размера полигона
	let polyCoord = [];

	arrCoord.forEach(function(item, i) {
		let A, B;
		
		if (i > 0) {
			A = arrCoord[i - 1];
			B = arrCoord[i];
		} else {			
			A = arrCoord[arrCoord.length - 1];
			B = arrCoord[i];
		}

		let AD = A[1] - A[0],
			BD = B[1] - B[0],
			direction = [BD, AD], //направление движения
 			endPoint = ymaps.coordSystem.geo.solveDirectProblem(B, direction, 1).endPoint; //конечная точка на расстоянии 30 метров

 		if (inPoly({x: endPoint[0], y: endPoint[1]}, arrCoord.map(function(item) {return {x: item[0], y: item[1]}}))) {
 			endPoint = ymaps.coordSystem.geo.solveDirectProblem(B, direction, 30).endPoint;
 		} else {
 			endPoint = ymaps.coordSystem.geo.solveDirectProblem(B, direction, -30).endPoint;
 		}

 		polyCoord.push(endPoint);
	});

	return polyCoord;
}

function inPoly(point, arrPoly){
	let result = false;

	console.log(arrPoly);

	for (let i = 0; i < arrPoly.length - 1; i++) {
		if (((point.y - arrPoly[i].y) / (arrPoly[i + 1].y - arrPoly[i].y)) == ((point.x - arrPoly[i].x) / (arrPoly[i + 1].x - arrPoly[i].x)))
			console.log('qwe');
	}
	return result;
}