$(document).ready(function(){
	var menu_open = false;
	$('#switch_list').click(function() {
		if (menu_open) {
			$('input[name="search"]').css('margin-left', '10px');
			$('.device_list').css('margin-left', '0px');
			$('.work_display').css('width', 'calc(100% - 234px)');
		}
		else {
			$('input[name="search"]').css('margin-left', '-250px');
			$('.device_list').css('margin-left', '-234px');
			$('.work_display').css('width', '100%');
			if ($('.work_display').scrollLeft() != 0) {
				$('.work_display').animate({
					scrollLeft:  $('.main_work').width(),
				}, 300);
			}
		}
		menu_open = !menu_open;
	});

	$('.device_block').click(function() {
		$('.main_work').css('width', '200%');
		$('.workpanel').css('width', 'calc(50% - 40px)');
		$('#current_sensor').html("<span>&nbsp>&nbsp</span><span class='path_control'>" + this.textContent + "</span>");
		$('.work_display').animate({
			scrollLeft:  $('.main_work').width(),
		}, 500);
	});

	$('#current_sensor').click(function() {
		$('.work_display').animate({
			scrollLeft:  $('.main_work').width(),
		}, 500);
	});

	$('#gotoFacade').click(function() {
		$('.work_display').animate({
			scrollLeft:  0,
		}, 500);
	});

	$('.search input').keyup(function () {
		console.log(this.value);
	});
});
