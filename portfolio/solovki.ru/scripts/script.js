$(document).ready(function() {
	setTimeout(() => { //Устанавливает перелистывание фотографий на главной странице в интервалом 5 секунд
		sliderMainPageLeft();
	}, 5000);

	$('#burgerMenuSwitch').on('change', function() { //переключение меню на мобильных
		if ($(this).prop('checked')) {
			$('body').css({
				'overflow-y': 'hidden'
			});

			$('menu').css({
				'left': 0,
				'top': $('header').height() + 3,
				'height': 'calc(100vh - 3px - ' + $('header').height() + 'px)'
			});
		}
		else {
			$('body').css({
				'overflow-y': ''
			});

			$('menu').css({
				'left': ''
			});
		}
	});

	$(window).resize(function() {
		$('menu').css({
			'left': '',
			'top': '',
			'height': ''
		});
		if ($('#burgerMenuSwitch').prop('checked'))
			$('.burger-menu').trigger('click');
	})

	if ($('.links .links-body > *').length < 8) { //Скрвает кнопку "Показать больше если ссылок меньше 8"
		$('.links .link').css({
			'display': 'none'
		})
	}
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