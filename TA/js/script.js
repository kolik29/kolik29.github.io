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
		if ($(this).hasClass('online')) {
			$('.main_work').css('width', '200%');
			$('.workpanel').css('width', 'calc(50% - 40px)');
			$('#current_sensor').html("<span>&nbsp>&nbsp</span><span class='path_control'>" + this.textContent + "</span>");
			$('.work_display').animate({
				scrollLeft:  $('.main_work').width(),
			}, 500);

			$('.device_block').each(function () {
				$(this).removeClass('select');
			})

			$(this).addClass('select');
		}
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
		let search = this;
		if (search.value != '')
			$('.device_block').each(function() {
  				if(!(this.innerHTML.search(search.value) != -1))
  					$(this).css('display', 'none');
  				else
  					$(this).css('display', 'block');
			});
		else
			$('.device_block').each(function() {
  				$(this).css('display', 'block');
			});
	});

	$('.tabs div').click(function () {
		$('.tabs div').each(function() {
			$(this).removeClass('selectTab');
		});

		$(this).addClass('selectTab');

		$('.visible_graph div').each(function() {
			$(this).css('display', 'none');
		});

		switch ($(this).attr('id')) {
			case "voltage":
				$('._voltage').css('display', 'block');
				break;
			case "amper":
				$('._amper').css('display', 'block');
				break;
			case "temp":
				$('._temp').css('display', 'block');
				break;
		}
	});
});
