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
			$('.control_panel').css('display', 'none');
			if ($('.work_display').scrollLeft() != 0) {
				$('.work_display').animate({
					scrollLeft:  $('.main_work').width(),
				}, 300);
			}
		}
		menu_open = !menu_open;
	});

	$('.device_block').click(function() {	
		$('.control_panel').css('display', 'block');
		$('#device_name').html($(this).text());
		getValues(false);
		getValues();
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

	$('#user_list').click(function() {
		$('.background').css('display', 'block');
		$('.user_list_window').css('display', 'block');
		$('.user_list_window').css('left', $('.user_list_window').width() / 2 + 'px');
	});

	$('.background').click(function() {
		$('.background').css('display', 'none');
		$('.user_list_window').css('display', 'none');
	});

	$('.close').click(function() {
		$('.control_panel').css('display', 'none');
	});

	var val;

	function getValues() {
		clearInterval(val);
		val = setInterval(function() {
			$('#temp').html(Math.floor(Math.random() * 100));
			$('#amper').html(Math.floor(Math.random() * 100));
			$('#voltage').html(Math.floor(Math.random() * 100));
		}, 1000);
	}
});
