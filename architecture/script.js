let munObjData = {
	"Муниципальное образование «Боброво-Лявленское»":{
		"Филиал ГБУЗ «Приморская ЦРБ» ФАП «Кузьмино»":{
			"circles":[[64.384122, 40.952221]],
			"link":"objects\\Боброво_Лявленское+\\1ФАП Кузьмино+.docx"
		},
		"ГБСУ АО «Трепузовский психоневрологический интернат»":{
			"circles":[[64.364531, 41.057263]],
			"coord":[[64.364552, 41.057315], [64.364229, 41.055964], [64.363505, 41.053916], [64.362855, 41.055407], [64.361712, 41.058993], [64.361831, 41.059583], [64.362407, 41.060259], [64.362903, 41.059916], [64.363384, 41.059256], [64.363326, 41.059004]],
			"link":"objects\\Боброво_Лявленское+\\2Трепузовский+.docx"
		},
		"Филиал ГБУЗ «Приморская ЦРБ» ФАП «Лявля»":{
			"circles":[[64.377382, 41.023102]],
			"link":"objects\\Боброво_Лявленское+\\3 ФАП Лявля+.docx"
		},
		"ГБУЗ АО Приморская ЦРБ «Врачебная амбулатория Боброво»":{
			"circles":[[64.356271, 41.152864]],
			"link":"objects\\Боброво_Лявленское+\\4 Амбулатория Боброво+.docx"
		},
		"МБОУ \"Бобровская СШ\"":{
			"circles":[[64.355441, 41.159274], [64.355318, 41.159295], [64.355028, 41.159322], [64.354367, 41.158974], [64.355004, 41.160749]],
			"coord":[[64.355655, 41.161033], [64.354135, 41.160288], [64.354279, 41.158925], [64.355021, 41.159295], [64.355744, 41.159236]],
			"link":"objects\\Боброво_Лявленское+\\Бобровская СШ.docx"
		}
	},
	"Муниципальное образование «Заостровское»":{

	},
	"Муниципальное образование «Катунинское»":{

	},
	"Муниципальное образование «Лисестровское»":{		

	},
	"Муниципальное образование «Островное»":{

	},
	"Муниципальное образование «Пертоминское»":{

	},
	"Муниципальное образование «Приморское»":{

	},
	"Муниципальное образование «Сельское поселение «Соловецкое»":{

	},
	"Муниципальное образование «Талажское»":{

	},
	"Муниципальное образование «Уемское»":{

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
	   	fillColor: "#FF000025", 
	  	strokeColor: "#FF0000", 
	   	strokeWidth: 2 
	});

	mapPoly = new ymaps.Polygon([
			[["64.384325", "40.952452"],["64.384199", "40.952106"],["64.384084", "40.952344"],["64.384199", "40.952688"],["64.384325", "40.952452"]]
		], {}, {
	   	fillColor: "#FF000025", 
	  	strokeColor: "#FF0000", 
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

	$('#download').removeClass('disabled');
	$('#download').attr('href', munObjData[$('#munForm .valueText span').text()][$('#munObj .valueText span').text()].link);

	yMap.geoObjects.removeAll();

	if (munObjData[$('#munForm .valueText span').text()][$('#munObj .valueText span').text()].coord == undefined) {
		munObjData[$('#munForm .valueText span').text()][$('#munObj .valueText span').text()].circles.forEach(function(item, i, arr) {
  			mapCircle.geometry.setCoordinates(item);
			yMap.geoObjects.add(mapCircle);
			console.log(item);
		});
		yMap.setBounds(mapCircle.geometry.getBounds(), {
			checkZoomRange:true
		}).then(function() {
			if (map.getZoom() > 10)
				map.setZoom(10);
		});
	} else {
		munObjData[$('#munForm .valueText span').text()][$('#munObj .valueText span').text()].circles.forEach(function(item, i, arr) {
  			mapCircle.geometry.setCoordinates(item);
			yMap.geoObjects.add(mapCircle);
			console.log(item);
		});
		mapPoly.geometry.setCoordinates([munObjData[$('#munForm .valueText span').text()][$('#munObj .valueText span').text()].coord]);
		yMap.geoObjects.add(mapPoly);
		yMap.setBounds(mapPoly.geometry.getBounds(), {
			checkZoomRange:true
		}).then(function() {
			if (map.getZoom() > 10)
				map.setZoom(10);
		});
	}
});

//Матан, геодезия, геометрия
//Оказалось, что в соотвествуии с действующим законодательством следубщий код не нужен. Но лучше оставлю.

function resizePoly(arrCoord) { 
	let lineCoordArray = [], bigPolyCoordLine = [], angleObj = [];

	arrCoord.forEach(function (item, i) {
		lineCoordArray.push(
			(i < arrCoord.length - 1) ? 
			[item, arrCoord[i + 1]] : 
			[item, arrCoord[0]]
		);
	});

	lineCoordArray.forEach(function(item) {
		angleObj.push({
			angle: getDirection(item, 30)[0],
			direction: getDirection(item, 30)[1],
			points: item
		});
	});
	
	angleObj.forEach(function(item, i) {
		if (i == angleObj.length - 1) {
			bigPolyCoordLine = bigPolyCoordLine.concat(roundAngle(item.points[1], item.direction, angleObj[0].direction, item.angle, angleObj[0].angle));
		} else {
			bigPolyCoordLine = bigPolyCoordLine.concat(roundAngle(item.points[1], item.direction, angleObj[i + 1].direction, item.angle, angleObj[i + 1].angle));
		}
	});

	bigPolyCoordLine = crossingLine(bigPolyCoordLine);

	mapPoly.geometry.setCoordinates([bigPolyCoordLine]);
}

function crossingLine(bigPolyCoordLine, i = 0) {
	for (i = 0; i < bigPolyCoordLine.length - 1; i++) {
		let x1 = Number(bigPolyCoordLine[i][0]),
			y1 = Number(bigPolyCoordLine[i][1]),
			x2 = Number(bigPolyCoordLine[i + 1][0]),
			y2 = Number(bigPolyCoordLine[i + 1][1]);

		for (let j = i + 2; j < bigPolyCoordLine.length - 1; j++) {
			let x3 = Number(bigPolyCoordLine[j][0]),
				y3 = Number(bigPolyCoordLine[j][1]),
				x4 = Number(bigPolyCoordLine[j + 1][0]),
				y4 = Number(bigPolyCoordLine[j + 1][1]);

			let d = ((x1 - x2) * (y4 - y3)) - ((y1 - y2) * (x4 - x3)),
				da = (((x1 - x3) * (y4 - y3)) - ((y1 - y3) * (x4 - x3))),
				db = (((x1 - x2) * (y1 - y3)) - ((y1 - y2) * (x1 - x3))),
				ta = da / d,
				tb = db / d,
				x, y;

			if (ta >= 0 && ta <= 1 && tb >= 0 && tb <= 1) {
				x = x1 + (ta * (x2 - x1));
				y = y1 + (ta * (y2 - y1));

				bigPolyCoordLine.splice(i, j - i + 1);
				bigPolyCoordLine.splice(i, 0, [x, y])

				crossingLine(bigPolyCoordLine, i)
			}
		}
	}
	return bigPolyCoordLine;
}

function getCenterLinePoint(twoPointsArray) {
	return [((twoPointsArray[0][0] + twoPointsArray[1][0]) / 2), ((twoPointsArray[0][1] + twoPointsArray[1][1]) / 2)];
}

function getAngle(twoPointArray) {
	let centerPoint, endPoint;

	if (twoPointArray[0][1] < twoPointArray[1][1]) {
		centerPoint = {
			x: twoPointArray[0][0],
			y: twoPointArray[0][1]
		}

		endPoint = {
			x: twoPointArray[1][0],
			y: twoPointArray[1][1]
		}
	} else {
		centerPoint = {
			x: twoPointArray[1][0],
			y: twoPointArray[1][1]
		}

		endPoint = {
			x: twoPointArray[0][0],
			y: twoPointArray[0][1]
		}
	}

	let distanceX = ymaps.coordSystem.geo.getDistance([centerPoint.x, centerPoint.y], [endPoint.x, centerPoint.y]),
		distanceY = ymaps.coordSystem.geo.getDistance([centerPoint.x, centerPoint.y], [centerPoint.x, endPoint.y]);

	if ((centerPoint.x < endPoint.x) && (centerPoint.y < endPoint.y))
		return Math.atan2(distanceY, distanceX) + (Math.PI / 2);

	if ((centerPoint.x > endPoint.x) && (centerPoint.y < endPoint.y))
		return (Math.PI / 2) - Math.atan2(distanceY, distanceX);
}

function getDirection(item, distance) {
	let centerLinePoint = getCenterLinePoint(item),
		direction = getAngle(item);

	if (mapPoly.geometry.contains(ymaps.coordSystem.geo.solveDirectProblem(centerLinePoint, [Math.cos(direction), Math.sin(direction)], 1).endPoint))
		return [direction, -distance];
	else
		return [direction, distance];
}

function roundAngle(centerPoint, directionStart, directionEnd, angleStart, angleEnd) {
	let roundPointsArray = [];

	if (directionStart == directionEnd) {
		for (let i = angleStart; i > angleEnd; i -= (Math.PI / 45)) {
			roundPointsArray.push(ymaps.coordSystem.geo.solveDirectProblem(centerPoint, [Math.cos(i), Math.sin(i)], directionStart).endPoint);
		}
	} else {
		for (let i = angleStart; i > 0; i -= (Math.PI / 45)) {
			roundPointsArray.push(ymaps.coordSystem.geo.solveDirectProblem(centerPoint, [Math.cos(i), Math.sin(i)], directionStart).endPoint);
		}
		for (let i = Math.PI; i > angleEnd; i -= (Math.PI / 45)) {
			roundPointsArray.push(ymaps.coordSystem.geo.solveDirectProblem(centerPoint, [Math.cos(i), Math.sin(i)], directionEnd).endPoint);
		}
	}

	return roundPointsArray;
}