let burgerMenuActive = false;

$(document).ready(function() {
	hrefOnStart = (location.href.split('#')[1] == undefined) ? 'main' : location.href.split('#')[1];
	setLinkHead();

	if ($(window).prop('pageYOffset') > 0) {
		$('#main-slider').css({
			'z-index': '-1'
		});
	}

	$(window).on('scroll', function(){
		enableShadow();
	});

	$('.burger-menu').on('click', function() {
		if (!burgerMenuActive) {
			$('.burger-menu > span').css({'margin': '6px 0'});
			setTimeout(function() {
				$('.burger-menu > span').eq(0).css({'transform': 'rotate(45deg)'});
				$('.burger-menu > span').eq(1).css({'opacity': '0'});
				$('.burger-menu > span').eq(2).css({'transform': 'rotate(-45deg)'});
			}, 150);
			$('#overlay-menu').css({'transform': 'translateX(0)'});
			$('.burger-menu').addClass('yellow');
		} else {
			$('.burger-menu > span').eq(0).css({'transform': 'rotate(0)'});
			$('.burger-menu > span').eq(1).css({'opacity': '1'});
			$('.burger-menu > span').eq(2).css({'transform': 'rotate(0)'});
			setTimeout(function() {
				$('.burger-menu > span').eq(1).css({'margin-top': '0'});
				$('.burger-menu > span').eq(2).css({'margin-top': '12px'});
			}, 150);
			$('#overlay-menu').css({'transform': 'translateX(-100%)'});
			$('.burger-menu').removeClass('yellow');
		}
		burgerMenuActive = !burgerMenuActive;
	});

	$('#top-panel').on('click', function() {
		$('html, body').animate({scrollTop: 0}, 300);
	});

	$('#scrollPage').on('click', function() {
		$('body,html').animate({
		    scrollTop: document.documentElement.clientHeight
		}, 500);
	});

	$('.logo').on('click', function(e) {
		e.preventDefault();
		let eventClick = new Event('click');
		let leftControl = document.getElementById('slider-control--left');
		if (currentControlIndex != 0) {
			for (let i = currentControlIndex; i > 0; i--) {
				leftControl.dispatchEvent(eventClick);
			}
		}
	});

	hoverOnSliderControl();

	setTimeout(function() {
		$('.stub > .top').css({
			'top': '-50vh'
		});
		$('.stub > .bottom').css({
			'bottom': '-50vh'
		});
		setTimeout(function() {
			$('.stub').css({
				'display': 'none'
			})
		}, 300);
	}, 700);
});

function hoverOnSliderControl() {
	$('#slider-control--left').on('mouseenter', function() {
		$('#slider-control--left').addClass('hover');
	});
	$('#slider-control--left').on('mouseleave', function() {
		$('#slider-control--left').removeClass('hover');
	});

	$('#slider-control--right').on('mouseenter', function() {
		$('#slider-control--right').addClass('hover');
	});
	$('#slider-control--right').on('mouseleave', function() {
		$('#slider-control--right').removeClass('hover');
	});
}

function enableShadow() {
	if ($(window).prop('pageYOffset') > 0) {
		$('#main-slider > .shadow').css({
			'display': 'block'
		});

		setTimeout(function() {
			$('#main-slider > .shadow').css({
				'opacity': 0.5
			});
		}, 1);

		$('.hexaflip-cube.hexaflip-cube-slide').css({
			'transform': 'scale(0.95)'
		});

		$('#top-panel').css({
			'transform': 'translateY(0)'
		});

		if(!$('.burger-menu').hasClass('yellow'))
			$('.burger-menu').addClass('aqua');

		$('.logo').addClass('aqua');

		$('#main-slider').css({
			'z-index': '-1'
		});
	} else {
		$('#main-slider > .shadow').css({
			'opacity': 0
		});

		setTimeout(function() {
			$('#main-slider > .shadow').css({
				'display': 'none'
			});
		}, 500);

		$('.hexaflip-cube.hexaflip-cube-slide').css({
			'transform': 'scale(1)'
		});

		$('#top-panel').css({
			'transform': 'translateY(-100%)'
		});

		$('.burger-menu').removeClass('aqua');
		$('.logo').removeClass('aqua');

		setTimeout(function() {
			$('#main-slider').css({
				'z-index': '0'
			});
		}, 500);
	}
}

var controlButton = {
	'main': [
		'О нас', 'Главная'
	],
	'case_2': [
		'LSI BERLIN MS ACCES', 'LSI BERLIN MS ACCES'
	],
	'case_3': [
		'LSI BERLIN CLEVER-TMS', 'LSI BERLIN CLEVER-TMS'
	]
}
var currentControlIndex = 0;

(function() {
	document.addEventListener('DOMContentLoaded', function() {
		hrefOnStart = (location.href.split('#')[1] == undefined) ? 'main' : location.href.split('#')[1];
		var hexaSlider, leftControl, rightControl, mouseXStart, mouseXEnd;
		hexaSlider = new HexaFlip(document.getElementById('slider-container'), {
			slide: [
				'<div class="slide-picture" style="background: url(\'img/office.jpg\'), linear-gradient(135deg, #0ff 25%, yellow);"><div class="slider-content"><div class="slider-content--background"></div><div class="slider-content--text" style="font-size: 30px"><p>Современный бизнес диктует свои правила. Интернационализация и международное сотрудничество являются стратегическими целями для многих серьезных компаний.</p><p>Наша команда профессионалов поможет преодолеть технологические, лингвистические и межкультурные барьеры на пути к достижению этих целей.</p></div></div></div>',
				'<div class="slide-picture" style="background: url(\'img/536.jpg\'), linear-gradient(135deg, #0ff 25%, yellow);"><div class="slider-content"><div class="slider-content--background"></div><div class="slider-content--text"><h1>Case LSI BERLIN<br>MS ACCESS</h1>(автоматизация)<p>LSI был успешным пользователем системы ACROSS на протяжении 15 лет, но со временем данный инструмент стал устаревать и уже не выдерживал конкуренции с более современными системами.</p><p>Попытки автоматизации собственными силами не дали результата, пришлось переносить учет деятельности в MS EXCEL, что также не устраивало руководство, но давало определенную гибкость учета. Тогда компания решила обратиться к нам за помощью.</p></div></div></div>',
				'<div class="slide-picture" style="background: url(\'img/285.jpg\'), linear-gradient(135deg, #0ff 25%, yellow);"><div class="slider-content"><div class="slider-content--background"></div><div class="slider-content--text"><h1>Case LSI BERLIN<br>CLEVER-TMS</h1>(автоматизация)<p>После первого успешного этапа компания решила наращивать технологический потенциал и автоматизировать свою деятельность с помощью современного веб-решения.</p><p>Так как предыдущий опыт внедрения готовых современных систем результата не дал, было принято решение создать систему управления бизнесом под себя на платформе CLEVER-TMS.</p></div></div></div>'
			]
		}, {
			horizontalFlip: true
		});

		leftControl = document.getElementById('slider-control--left');
		rightControl = document.getElementById('slider-control--right');

		leftControl.addEventListener('click', (function(e) {
			hrefOnStart = '';
			e.preventDefault();

			if (($(window).prop('pageYOffset') != 0)) {
    			$('html, body').animate({scrollTop: 0}, 300).promise().then(function() {
    				hexaSlider['flipBack']();
    			});
    		} else
    			hexaSlider['flipBack']();

    		setLinkHead('left');
		}), false);

		rightControl.addEventListener('click', (function(e) {
			hrefOnStart = '';
			e.preventDefault();

			if (($(window).prop('pageYOffset') != 0)) {
    			$('html, body').animate({scrollTop: 0}, 300).promise().then(function() {
    				hexaSlider['flip']();
    			});
    		} else
    			hexaSlider['flip']();

    		setLinkHead('right');
		}), false);

		document.getElementById('slider-container').addEventListener('mousedown', function(e) {
			mouseXStart = e.offsetX;
		});
		document.getElementById('slider-container').addEventListener('mouseup', function(e) {
			mouseXEnd = e.offsetX;
			moveFlip();
		});

		document.getElementById('slider-container').addEventListener('touchstart', function(e) {
			mouseXStart = e.changedTouches[0].clientX;
		});
		document.getElementById('slider-container').addEventListener('touchend', function(e) {
			mouseXEnd = e.changedTouches[0].clientX;
			moveFlip();
		});

		function moveFlip() {
			if (Math.abs(mouseXStart - mouseXEnd) > 50) {
				if (mouseXStart - mouseXEnd < 0) {
					hexaSlider['flipBack']();
					setLinkHead('left');
				} else if (mouseXStart - mouseXEnd > 0) {
					hexaSlider['flip']();
					setLinkHead('right');
				}
			}
		}

		var eventClick = new Event('click');
		var pathToSlide = Object.keys(controlButton).indexOf(window.location.href.split('#')[1]);

		if (pathToSlide > 0) {
			for (let i = 0; i < pathToSlide; i++) {
				rightControl.dispatchEvent(eventClick);
			}
		}
	}, false);
}).call(this);

function getButtonValue(arr, index) {
	let newIndex = [index - 1, index + 1];

	if (index == 0)
		newIndex = [Object.keys(arr).length - 1, 1];

	if (index >= Object.keys(arr).length - 1)
		newIndex = [Object.keys(arr).length - 2, 0];

	return {
		left: [
			Object.keys(arr)[newIndex[0]],
			arr[Object.keys(arr)[newIndex[0]]][0]
		],
		right: [
			Object.keys(arr)[newIndex[1]],
			arr[Object.keys(arr)[newIndex[1]]][0]
		],
	}
}

let siteTitle = document.title;
let hrefOnStart = '';

function setLinkHead(direction) {
	$('#content > section').removeClass('visible');

	$('#slider-control--left').off('mouseenter');
	$('#slider-control--left').off('mouseleave');
	$('#slider-control--right').off('mouseenter');
	$('#slider-control--right').off('mouseleave');
	$('#slider-control--left').removeClass('hover');
	$('#slider-control--right').removeClass('hover');

	if (direction == undefined) {
		history.replaceState(null, null, '#' + getButtonValue(controlButton, currentControlIndex + 1).left[0]);
		document.title = getButtonValue(controlButton, currentControlIndex + 1).left[1] + ' — ' + siteTitle;
	}

	if (direction == 'left') {
		if (hrefOnStart == '')
			history.replaceState(null, null, '#' + getButtonValue(controlButton, currentControlIndex).left[0]);

		document.title = getButtonValue(controlButton, currentControlIndex).left[1] + ' — ' + siteTitle;
		currentControlIndex--;
		if (currentControlIndex < 0)
			currentControlIndex = Object.keys(controlButton).length - 1;
	} else if (direction == 'right') {
		if (hrefOnStart == '')
			history.replaceState(null, null, '#' + getButtonValue(controlButton, currentControlIndex).right[0]);

		document.title = getButtonValue(controlButton, currentControlIndex).right[1] + ' — ' + siteTitle;
		currentControlIndex++;
		if (currentControlIndex > Object.keys(controlButton).length - 1)
			currentControlIndex = 0;
	}

	$('#' + Object.keys(controlButton)[currentControlIndex]).addClass('visible');

	if (hrefOnStart != '') {
		if (hrefOnStart != 'main') {
			history.replaceState(null, null, '#' + hrefOnStart);
			document.title = getButtonValue(controlButton, currentControlIndex - 1).right[1] + ' — ' + siteTitle;
		} else {
			history.replaceState(null, null, '#' + hrefOnStart);
			document.title = controlButton.main[0] + ' — ' + siteTitle;
		}
	}

	setTimeout(function() {
		$('#slider-control--left').attr('href', '#' + getButtonValue(controlButton, currentControlIndex).left[0]);
		$('#slider-control--right').attr('href', '#' + getButtonValue(controlButton, currentControlIndex).right[0]);
		$('#slider-control--left > span').text(getButtonValue(controlButton, currentControlIndex).left[1]);
		$('#slider-control--right > span').text(getButtonValue(controlButton, currentControlIndex).right[1]);
		hoverOnSliderControl();
		if ($('#slider-control--left').is(':hover')) $('#slider-control--left').addClass('hover');
		if ($('#slider-control--right').is(':hover')) $('#slider-control--right').addClass('hover');
	}, 1500);

}