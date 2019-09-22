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