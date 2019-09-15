$(document).ready(function() {
	setTimeout(() => {
		sliderMainPageLeft();
	}, 5000);
});

function sliderMainPageLeft() {
	$('.slider.main-page div:first-child').animate({
		'margin-left': '-100%'
	}, 1000, () => {
		$('.slider.main-page').append($('.slider.main-page div:first-child').css({
			'margin-left': ''
		}));
		setTimeout(() => {
			sliderMainPageLeft();
		}, 5000);
	});
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