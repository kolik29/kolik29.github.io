

let munObjData = {
	"Муниципальное образование «Боброво-Лявленское»":{
		"Филиал ГБУЗ «Приморская ЦРБ» ФАП «Кузьмино»":{
			"type":"circle",
			"coord":["64.384188","40.952406"]
		},
		"ГБСУ АО «Трепузовский психоневрологический интернат»":{
			"type":"poly",
			"coord":[[64.364552, 41.057315], [64.364229, 41.055964], [64.363505, 41.053916], [64.362855, 41.055407], [64.361712, 41.058993], [64.361831, 41.059583], [64.362407, 41.060259], [64.362903, 41.059916], [64.363384, 41.059256], [64.363326, 41.059004]]
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


ymaps.ready(init); 

var mapCircle, 
	mapPoly, 
	yMap = {}; 

function init() { 
	yMap = new ymaps.Map("map", { 
		center: [64.543235, 40.537195], 
		zoom: 13 
	});

	mapCircle = new ymaps.Circle([[], 30], { }, { 
	   	fillColor: "#DB709377", 
	  	strokeColor: "#99006650", 
	   	strokeWidth: 2 
	});

	mapPoly = new ymaps.Polygon([
			[["64.384325", "40.952452"],["64.384199", "40.952106"],["64.384084", "40.952344"],["64.384199", "40.952688"],["64.384325", "40.952452"]]
		], {}, {
	   	fillColor: "#DB709377", 
	  	strokeColor: "#99006650", 
	   	strokeWidth: 2
	});
}


function createSelect(selectElement, objectData, addData = false) { 
	selectElement.html('');
	Object.keys(objectData).forEach(function (item){
		selectElement.append($('<li>').text(item));
	});
}

function closeList(listEl = $('.selectElement ul'), currentEl = $('.valueText')) { 
	currentEl.children('img').css('transform', 'rotate(0)');
	listEl.css('display', 'none');
	currentEl.removeClass('active');
}

function openList(listEl, currentEl) { 
	currentEl.children('img').css('transform', 'rotate(180deg)');
	listEl.css('display', 'block');
	currentEl.addClass('active');
}

createSelect($('#munForm ul'), munObjData);


$('.valueText').on('click', function() { 
	closeList();
	let listEl = $(this).parent().children('ul')

	if ($(this).hasClass('active')) 
		closeList(listEl, $(this));
	else
		openList(listEl, $(this));
});

$('#munForm').on('click', 'li', function() { 
	createSelect($('#munObj ul'), munObjData[$(this).text()]);
	$('#munForm .valueText').children('span').text($(this).text());
	closeList();
});

$('#munObj').on('click', 'li', function() { 
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
			mapPoly.geometry.setCoordinates([munObjData[$('#munForm .valueText span').text()][$('#munObj .valueText span').text()].coord]);
			yMap.geoObjects.add(mapPoly);
			yMap.setBounds(mapPoly.geometry.getBounds(), {
				checkZoomRange:true
			}).then(function() {
				if(map.getZoom() > 10) 
					map.setZoom(10);
			});
			resizePoly(munObjData[$('#munForm .valueText span').text()][$('#munObj .valueText span').text()].coord);
		break;
	}
});

/*function resizePoly(arrCoord) {
	let polyCoord = [];

	for (let i = 0; i < arrCoord.length; i++) {
		if (i == 0){
			polyCoord = polyCoord.concat(drawCircle(arrCoord[i], arrCoord[arrCoord.length - 1], arrCoord[i + 1]));
		} else if (i == arrCoord.length - 1) {
			polyCoord = polyCoord.concat(drawCircle(arrCoord[i], arrCoord[i - 1], arrCoord[0]));
		} else {
			polyCoord = polyCoord.concat(drawCircle(arrCoord[i], arrCoord[i - 1], arrCoord[i + 1]));
		}
	}

	mapPoly.geometry.setCoordinates([polyCoord]);
}

function drawCircle(centerPoint, prevPoint, nextPoint) {
	let arrCoord = [],
		angle0 = Math.atan2(prevPoint[1] - centerPoint[1], prevPoint[0] - centerPoint[0]) + (Math.PI / 2),
		angle1 = Math.atan2(nextPoint[1] - centerPoint[1], nextPoint[0] - centerPoint[0]) + (Math.PI / 2);
		direction0 = [Math.cos(angle0), Math.sin(angle0)],
		direction1 = [Math.cos(angle1), Math.sin(angle1)];

	console.log('Центр: ' + centerPoint + ' | Предыдущая точка: ' + prevPoint + ' | Следующая точка: ' + nextPoint);

	for (let i = angle0; i >= angle1; i -= Math.PI / 18) {
		direction = [Math.cos(i).toFixed(6), Math.sin(i).toFixed(6)];
		arrCoord.push([
			ymaps.coordSystem.geo.solveDirectProblem(centerPoint, direction, 30).endPoint[0].toFixed(6),
			ymaps.coordSystem.geo.solveDirectProblem(centerPoint, direction, 30).endPoint[1].toFixed(6)
		]);
	}

	return arrCoord;
}*/

function resizePoly(arrCoord) { 
	let polyCoord = [], polyCoordObj = {};

	arrCoord.forEach(function(item, i) {
		let A, B;
		polyCoord = [];
		
		if ((i > 0) ** (i < arrCoord.length - 1)) {
			A = arrCoord[i - 1];
			B = arrCoord[i];
		} else if (i == 0) {			
			A = arrCoord[arrCoord.length - 1];
			B = arrCoord[i];
		}

		let AD = A[1] - A[0],
			BD = B[1] - B[0],
			angle = Math.atan2(BD, AD) - (Math.PI / 2),
			direction = [Math.cos(angle), Math.sin(angle)], 
			endPoint = ymaps.coordSystem.geo.solveDirectProblem(B, direction, 1).endPoint; 

 		if (mapPoly.geometry.contains(endPoint)) {
 			polyCoord.push(ymaps.coordSystem.geo.solveDirectProblem(B, direction, -30).endPoint);
 		} else {
 			if (i == arrCoord.length - 1){
 				polyCoord.push(ymaps.coordSystem.geo.solveDirectProblem(B, direction, -30).endPoint);
 			} else {
 				polyCoord.push(ymaps.coordSystem.geo.solveDirectProblem(B, direction, 30).endPoint);
 			}
 		}

 		angle = Math.atan2(BD, AD) + (Math.PI / 2);
		direction = [Math.cos(angle), Math.sin(angle)]; 
		endPoint = ymaps.coordSystem.geo.solveDirectProblem(B, direction, 1).endPoint; 

 		if (mapPoly.geometry.contains(endPoint)) {
 			polyCoord.push(ymaps.coordSystem.geo.solveDirectProblem(B, direction, -30).endPoint);
 		} else {
 			if (i == arrCoord.length - 2){
 				polyCoord.push(ymaps.coordSystem.geo.solveDirectProblem(B, direction, -30).endPoint);
 			} else {
 				polyCoord.push(ymaps.coordSystem.geo.solveDirectProblem(B, direction, 30).endPoint);
 			}
 		}

 		polyCoordObj[B] = polyCoord;
	});	

	polyCoord = [];

	for (let key in polyCoordObj) {
		polyCoordObj[key][0][0] = polyCoordObj[key][0][0].toFixed(6);
		polyCoordObj[key][0][1] = polyCoordObj[key][0][1].toFixed(6);
		polyCoordObj[key][1][0] = polyCoordObj[key][1][0].toFixed(6);
		polyCoordObj[key][1][1] = polyCoordObj[key][1][1].toFixed(6);
	}

	let count = 0;
	for (let key in polyCoordObj) {
		if (count % 2 == 0) {
			polyCoord.push(polyCoordObj[key][0]);
			//polyCoord = polyCoord.concat(drawCircle(key.split(','), polyCoordObj[key][0], polyCoordObj[key][1]));
			polyCoord.push(polyCoordObj[key][1]);
		} else {
			polyCoord.push(polyCoordObj[key][1]);
			//polyCoord = polyCoord.concat(drawCircle(key.split(','), polyCoordObj[key][1], polyCoordObj[key][0]));
			polyCoord.push(polyCoordObj[key][0]);
		}
		count++;
	};
	mapPoly.geometry.setCoordinates([polyCoord]);
	console.log(polyCoord);
}

function drawCircle(centerPoint, startPoint, endPoint) {
	let arrCoord = [],
		direction,
		startAngle = Math.atan2(startPoint[1] - centerPoint[1], startPoint[0] - centerPoint[0]),
		endAngle = Math.atan2(endPoint[1] - centerPoint[1], endPoint[0] - centerPoint[0]);

	startAngle = (startAngle < 0) ? ((Math.PI * 2) + startAngle) : startAngle;
	endAngle = (endAngle < 0) ? ((Math.PI * 2) + endAngle) : endAngle;

	if ((startAngle > 0) && (startAngle < Math.PI / 2) &&
		(endAngle > ((2 * Math.PI) - (Math.PI / 2))) && (endAngle < 2 * Math.PI)) {
		for (let i = startAngle - (22.5 * (Math.PI / 180)); i >= 0; i -= Math.PI / 18) {
			direction = [Math.cos(i).toFixed(6), Math.sin(i).toFixed(6)];
			arrCoord.push([
				ymaps.coordSystem.geo.solveDirectProblem(centerPoint, direction, 30).endPoint[0].toFixed(6),
				ymaps.coordSystem.geo.solveDirectProblem(centerPoint, direction, 30).endPoint[1].toFixed(6)
			]);
		}

		for (let i = 2 * Math.PI; i >= endAngle + (22.5 * (Math.PI / 180)); i -= Math.PI / 18) {
			direction = [Math.cos(i).toFixed(6), Math.sin(i).toFixed(6)];
			arrCoord.push([
				ymaps.coordSystem.geo.solveDirectProblem(centerPoint, direction, 30).endPoint[0].toFixed(6),
				ymaps.coordSystem.geo.solveDirectProblem(centerPoint, direction, 30).endPoint[1].toFixed(6)
			]);
		}
	} else {
		if ((startAngle > Math.PI) && (startAngle < ((2 * Math.PI) - (Math.PI / 2))) &&
			(endAngle > Math.PI / 2) && (endAngle < Math.PI)) {
			for (let i = startAngle - (22.5 * (Math.PI / 180)); i >= endAngle + (22.5 * (Math.PI / 180)); i -= Math.PI / 18) {
				direction = [Math.cos(i).toFixed(6), Math.sin(i).toFixed(6)];
				arrCoord.push([
					ymaps.coordSystem.geo.solveDirectProblem(centerPoint, direction, 30).endPoint[0].toFixed(6),
					ymaps.coordSystem.geo.solveDirectProblem(centerPoint, direction, 30).endPoint[1].toFixed(6)
				]);
			}
		} else {
			for (let i = startAngle + (22.5 * (Math.PI / 180)); i >= endAngle - (22.5 * (Math.PI / 180)); i -= Math.PI / 18) {
				direction = [Math.cos(i).toFixed(6), Math.sin(i).toFixed(6)];
				arrCoord.push([
					ymaps.coordSystem.geo.solveDirectProblem(centerPoint, direction, 30).endPoint[0].toFixed(6),
					ymaps.coordSystem.geo.solveDirectProblem(centerPoint, direction, 30).endPoint[1].toFixed(6)
				]);
			}
		}
	}		

	return arrCoord;
}