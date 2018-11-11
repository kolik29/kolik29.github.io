$(document).ready(function() {
	/*slider_Start_begin*/
	let sliderIntervalTime = 5000;
	let sliderInterval = setInterval(slider, sliderIntervalTime);
	/*slider_Start_End*/

	/*menuUnderLine_Begin*/
	$('header .menu .line .subline').css({
		width: $('header .menu a:first-child').width() + 'px'
	});
	/*menuUnderLine_End*/

	/*hideTopBar_Begin*/
	let topBarClose = false;
	$('.top_bar .close').on('click', function() {
		if (topBarClose){
			$('.top_bar').css('margin-top', 0);
			$('.top_bar .close .plus').css('transform', 'rotate(0)');
		} else {
			$('.top_bar').css('margin-top', -$('.top_bar').height() + 'px');
			$('.top_bar .close .plus').css('transform', 'rotate(270deg)');
		}
		topBarClose = !topBarClose;
	});

	$('header .menu a').on('mouseenter', function() { //rotate to plus or minus
		$('header .menu .line .subline').css({
			'margin-left': ($(this).offset().left - $('header .menu').offset().left) + 'px',
			width: $(this).width() + 'px'
		})
	});
	/*hideTopBar_End*/

	/*slider_Events_Begin*/
	$('#slider1_controls  .control').on('change', function() {
 		$(this).parent().parent().parent().children('img').eq(0).css('margin-left', -($(this).parent().index() * 100) + '%');
	});

	$('.slider .image').on('mouseenter', function() {
		clearInterval(sliderInterval);
	});

	$('.slider .image').on('mouseleave', function() {
		sliderInterval = setInterval(slider, sliderIntervalTime);
	});
	/*slider_Events_End*/

	/*copyright_Cyrrent_Year*/
	let date = new Date();
	$('#currentYear').text(date.getFullYear());
});

/*slider_Function_Begin*/
function slider() {
	$('#slider1_controls .control').each(function(i) {
		if ($(this).prop('checked')) {
			if (($(this).parent().index() + 1) >= $('#slider1_controls .control').length) {
				$('#slider1_controls .control').eq(0).trigger('click');
			}
			else {
				$('#slider1_controls .control').eq($(this).parent().index() + 1).trigger('click');
			}
			return false;
		}
	});
}
/*slider_Function_End*/