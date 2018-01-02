$(document).ready(function() {
	$('#js-aboutme-item').click(function() {
		$('#js-content-slide-1').css({
			'left': '10%',
			'opacity': '0'
		});
		$('#js-content-slide-1').next().css({
			'left': '10%',
			'opacity': '0'
		});
		$('.o-slide').animate({
			top: 0
		}, 500, function() {
			$('#js-content-slide-1').animate({
				left: 0,
				opacity: 1
			}, 200, function() {
				$('#js-content-slide-1').next().animate({
					left: 0,
					opacity: 1
				}, 200)
			});
		});

		disableMenuItem()
		$(this).addClass('enable');
	});

	$('#js-portfolio-item').click(function() {
		$('#js-content-slide-2').css({
			'left': '10%',
			'opacity': '0'
		});
		$('#js-content-slide-2').next().css({
			'left': '10%',
			'opacity': '0'
		});
		$('.o-slide').animate({
			top: -$(window).height()
		}, 500, function() {
			$('#js-content-slide-2').animate({
				left: 0,
				opacity: 1
			}, 200, function() {
				$('#js-content-slide-2').next().animate({
					left: 0,
					opacity: 1
				}, 200)
			});
		});

		disableMenuItem()
		$(this).addClass('enable');
	});

	$('#js-contacts-item').click(function() {
		$('#js-content-slide-3').css({
			'left': '10%',
			'opacity': '0'
		});
		$('#js-content-slide-3').next().css({
			'left': '10%',
			'opacity': '0'
		});
		$('.o-slide').animate({
			top: -$(window).height() * 2
		}, 500, function() {
			$('#js-content-slide-3').animate({
				left: 0,
				opacity: 1
			}, 200, function() {
				$('#js-content-slide-3').next().animate({
					left: 0,
					opacity: 1
				}, 200)
			});
		});

		disableMenuItem()
		$(this).addClass('enable');
	});

	$('.iphonestrade').click(function() {
		window.open('http://iphonestrade.ru/');
	});

	$('.deshevo').click(function() {
		window.open('http://xn----7sbbgjhcypm0a7a5f6b.xn--b1add1b8bzc.xn--90ais/');
	});

	$('.o-content').bind('wheel', function() {
		onWheel();
	});

	$('.v-btn.scroll-down').click(function() {
		$('#js-portfolio-item').trigger('click');
	});

	var countSlide = 1;
	$('.next-btn').click(function() {
		var now = Date.now();
		if(now - lastCall > 500) {
			if ($('.slides-titles > div:nth-child(' + countSlide + ')').next().outerWidth() != undefined) {
				$('.slides-titles > div:nth-child(' + countSlide + ')').next().css('opacity', '1');
				$('.slides-titles').css('margin-left', '-=' + $('.slides-titles > div:nth-child(' + countSlide + ')').outerWidth());
				$('.slides-titles > div:nth-child(' + countSlide + ')').next().next().css('opacity', '0.5');
				$('.portfolio-slider').css('margin-left', '-=' + $('.portfolio-slider > div:nth-child(' + countSlide + ')').outerWidth());
				$('.portfolio-slider > div:nth-child(' + countSlide + ')').next().addClass('js-select-slide');
				countSlide++;
			}
			lastCall = now;
		}
	});

	$('.prev-btn').click(function() {
		var now = Date.now();
		if(now - lastCall > 500) {
			if ($('.slides-titles > div:nth-child(' + countSlide + ')').prev().outerWidth() != undefined) {
				$('.slides-titles > div:nth-child(' + countSlide + ')').css('opacity', '0.5');
				$('.slides-titles').css('margin-left', '+=' + $('.slides-titles > div:nth-child(' + countSlide + ')').prev().outerWidth());
				$('.slides-titles > div:nth-child(' + countSlide + ')').next().css('opacity', '0');
				$('.portfolio-slider').css('margin-left', '+=' + $('.portfolio-slider > div:nth-child(' + countSlide + ')').prev().outerWidth());
				$('.portfolio-slider > div:nth-child(' + countSlide + ')').removeClass('js-select-slide');
				countSlide--;
			}
			lastCall = now;
		}
	});
});

$(window).resize(function() {
	var now = Date.now();
	if(now - lastCall < 500) {
		$('.v-menu__item.enable').trigger('click');
		lastCall = now;
	}
});



function disableMenuItem() {
	$('.v-menu__item').each(function() {
		$(this).removeClass('enable');
	});
}


var lastCall = 0;
var tempScrollTop, currentScrollTop = 0;
var n = 0;
function onWheel(e) {
	var now = Date.now();
	if(now - lastCall > 500) {
		e = e || window.event;
		var delta = e.deltaY || e.detail || e.wheelDelta;
	 	n += delta;
		if (currentScrollTop < n) { //down
			$('.v-menu__item').each(function() {
				if ($(this).hasClass('enable')) {
					if ($(this).next().attr('id') != undefined) {
						disableMenuItem();
						$(this).next().addClass('enable');
						$(this).next().trigger('click');
						return false;
					}
				}
			});
		}
		else
	 		if (currentScrollTop > n) { //up
				$('.v-menu__item').each(function() {
					if ($(this).hasClass('enable')) {
						if ($(this).prev().attr('id') != undefined) {
							disableMenuItem();
							$(this).prev().addClass('enable');
							$(this).prev().trigger('click');
							return false;
						}
					}
				});
			}
 		currentScrollTop = n;
		lastCall = now;
	}
}