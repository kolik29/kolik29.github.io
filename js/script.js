$(document).ready(function() {
	$('#js-aboutme-item').click(function() {
		$('.o-slide').animate({
			top: 0
		}, 500);

		disableMenuItem()
		$(this).addClass('enable');
	});

	$('#js-myworks-item').click(function() {
		$('.o-slide').animate({
			top: -$(window).height()
		}, 500);

		disableMenuItem()
		$(this).addClass('enable');
	});

	$('#js-contacts-item').click(function() {
		$('.o-slide').animate({
			top: -$(window).height() * 2
		}, 500);

		disableMenuItem()
		$(this).addClass('enable');
	});

	$('.iphonestrade').click(function() {
		document.location.href = 'http://iphonestrade.ru/'
	});

	$('.deshevo').click(function() {
		document.location.href = 'http://xn----7sbbgjhcypm0a7a5f6b.xn--b1add1b8bzc.xn--90ais/';
	});

    $('.o-content').bind('wheel', function() {
    	onWheel();
    });

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
});



function disableMenuItem() {
	$('.v-menu__item').each(function() {
		$(this).removeClass('enable');
	});
}