VK.Widgets.Group("vk_groups", {mode: 0, width: "220", height: "250"}, 136088527);

$(document).ready(function() {
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
    	$('.c-body-to_up').css('display', 'block');
    }

	$(window).scroll( function() {
    	if ($(window).scrollTop() > 100) {    		
    		$('.c-body-to_up').css('display', 'block');
    	} else {	
    		$('.c-body-to_up').css('display', 'none');
        }
    });

    $('.js-address').click( function() {
  		if ($('#js-address1:checked').val() == 'on') {
  			initMap();
  		}

  		if ($('#js-address2:checked').val() == 'on') {
  			initMap({lat: 64.534122, lng: 40.611479});
  		}

  		if ($('#js-address3:checked').val() == 'on') {
  			initMap({lat: 64.551841, lng: 40.532942});
  		}

  		if ($('#js-address4:checked').val() == 'on') {
  			initMap({lat: 64.547513, lng: 40.535109});
  		}

  		if ($('#js-address5:checked').val() == 'on') {
  			initMap({lat: 64.490467, lng: 40.713771});
  		}
 	});

 	$('.c-body-to_up').click(function() {
 		$('html, body').animate({scrollTop: 0}, 500);
 	});

 	$('.c-header-contacts').click(function() { 		
 		$('html, body').animate({scrollTop: $('#js-our_contacts').offset().top}, 500);
 	});

 	$('.item-add').click(function() {
 		var val = $(this).parent().children('input').val();
 		val++;
 		$(this).parent().children('input').val(val);
 		change_count($(this));
 	});

 	 $('.item-reduce').click(function() {
 		var val = $(this).parent().children('input').val();
 		if (val > 1)
 			val--;
 		$(this).parent().children('input').val(val);
 		change_count($(this));
 	});

 	$('.js-item-count-input').keydown(function(event) {
        if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || 
            (event.keyCode == 65 && event.ctrlKey === true) || 
            (event.keyCode >= 35 && event.keyCode <= 39)) {
                 return;
        }
        else {
            if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
                event.preventDefault(); 
            }   
        }
    });

 	$('.js-item-count-input').keyup(function(event) { //Проверяе был ли введене 0
 		if ($(this).val() == '0') 
        	$(this).val('1');
 	});

 	$('.js-item-count-input').on('input', function() {
 		change_count($(this));
 	});

 	function change_count(th) {
 		var parent = th.parent();
 		var table = th.parent().parent().parent();
		table.children('.js-cost-cell').html(parseInt(table.children('.js-price-cell').html()) * parent.children('.js-item-count-input').val() + ' ₽');
 	}	

 	$('.js-item-count-input').each(function(i, elem) {
 		change_count($(this));
 	});
});

function initMap(uluru = {lat: 64.542060, lng: 40.535097}) {
	var map = new google.maps.Map(document.getElementById('map'), {
 		zoom: 15,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}