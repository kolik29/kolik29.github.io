VK.Widgets.Group("vk_groups", {mode: 0, width: "220", height: "250"}, 136088527);

$(document).ready(function(){
	/*slider-begin*/
	$('.slide').css('width', $('.slider').css('width'));

	var checkClick = true;

	function toSlide(n = 0) {
		checkClick = false;
		$('.slides').css('margin-left', n + 'px');
		setTimeout(function() { checkClick = true; }, 400);
	}

	function checkDotLeft() {
		if ($('.dots > label > input')[0].checked == true)
			$('.dots > label > input')[$('.dots > label').length - 1].checked = true;
		else
			for (var i = 1; i <= $('.dots > label').length - 1; i++) {
				if ($('.dots > label > input')[i].checked == true) {
					$('.dots > label > input')[i - 1].checked = true;
					break;
				}
			}
	}

	function checkDotRight() {
		if ($('.dots > label > input')[$('.dots > label').length - 1].checked == true)
			$('.dots > label > input')[0].checked = true;
		else
			for (var i = 0; i <= $('.dots > label').length - 2; i++) {
				if ($('.dots > label > input')[i].checked == true) {
					$('.dots > label > input')[i + 1].checked = true;
					break;
				}
			}
	}

	$('.left').click(function() {
		if (checkClick) {
			if (parseInt($('.slides').css('margin-left')) <= -10 )
				toSlide(parseInt($('.slides').css('margin-left')) + $('.slide').width());
			else 
				toSlide(-$('.slides').width() + $('.slide').width());
			checkDotLeft();
		}
	});

	$('.right').click(function() {
		if (checkClick) {
			if (parseInt($('.slides').css('margin-left')) >= -$('.slides').width() + ($('.slide').width() * 2))
				toSlide(parseInt($('.slides').css('margin-left')) - $('.slide').width());
			else
				toSlide(0);
			checkDotRight();
		}
	});

	$('.dots > label').click(function(){
		toSlide(-$('.slide').width() * $('.dots > label').index(this));
	});

	function listSlide() {		
		$('.right').click();
	}

	var sliderStart = setInterval(listSlide, 10000);

	$('.slider').mouseout(function(){
		sliderStart = setInterval(listSlide, 10000);
	})

	$('.slider').mouseover(function(){
		clearInterval(sliderStart);
	})
	/*slider-end*/

	if ($(window).scrollTop() > 100) {    		
    	$('.toUp').css('display', 'block');
    }

	$(window).scroll( function() {
    	if ($(window).scrollTop() > 100) {    		
    		$('.toUp').css('display', 'block');
    	} else {	
    		$('.toUp').css('display', 'none');
        }
    });

	setTimeout(function() {
		$('#map2').css('display', 'none');    
		$('#map3').css('display', 'none');
	}, 500);

    $('.adres').click( function() {
  		if ($('#adres1:checked').val() == 'on') {
  			$('#map1').css('display', 'block');
  			$('#map2').css('display', 'none');
  			$('#map3').css('display', 'none');
  		}

  		if ($('#adres2:checked').val() == 'on') {
  			$('#map1').css('display', 'none');
  			$('#map2').css('display', 'block');
  			$('#map3').css('display', 'none');
  		}

  		if ($('#adres3:checked').val() == 'on') {
  			$('#map1').css('display', 'none');
  			$('#map2').css('display', 'none');
  			$('#map3').css('display', 'block');
  		}
 	});

 	$('.toUp').click(function() {
 		$('html, body').animate({scrollTop: 0}, 500);
 	});

 	$('.contacts').click(function() { 		
 		$('html, body').animate({scrollTop: $('#ourContacts').offset().top}, 500);
 	});
});

function initMap() {
	var uluru = {lat: 64.542060, lng: 40.535097};
	var map = new google.maps.Map(document.getElementById('map1'), {
 		zoom: 15,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });

	uluru = {lat: 64.542060, lng: 40.530000};
	map = new google.maps.Map(document.getElementById('map2'), {
 		zoom: 15,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });

	uluru = {lat: 64.542060, lng: 40.539999};
	map = new google.maps.Map(document.getElementById('map3'), {
 		zoom: 15,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}