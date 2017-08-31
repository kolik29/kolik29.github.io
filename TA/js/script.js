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

			decimal_data_voltage = get_decimal_data();
		
			decimal_data_temp = get_decimal_data();

			decimal_data_amper = get_decimal_data();
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

	$('.chart svg').mouseover(function() {
		$('.morris-hover .morris-default-style').css('margin-left', '0');
	});

	$('.chart svg').mouseout(function() {
		$('.morris-hover .morris-default-style').css('margin-left', '-10000px');
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

	//графики

	function get_decimal_data() {
		return [{
			x: Math.floor(Math.random() * (101)), 
			y: Math.floor(Math.random() * (101))
		}, {
			x: Math.floor(Math.random() * (101)), 
			y: Math.floor(Math.random() * (101))
		}, {
			x: Math.floor(Math.random() * (101)), 
			y: Math.floor(Math.random() * (101))
		}, {	
			x: Math.floor(Math.random() * (101)), 
			y: Math.floor(Math.random() * (101))
		}, {	
			x: Math.floor(Math.random() * (101)), 
			y: Math.floor(Math.random() * (101))
		}, {
			x: Math.floor(Math.random() * (101)), 
			y: Math.floor(Math.random() * (101))
		}, {
			x: Math.floor(Math.random() * (101)), 
			y: Math.floor(Math.random() * (101))
		}, {
			x: Math.floor(Math.random() * (101)), 
			y: Math.floor(Math.random() * (101))
		}, {
			x: Math.floor(Math.random() * (101)), 
			y: Math.floor(Math.random() * (101))
		}, {
			x: Math.floor(Math.random() * (101)), 
			y: Math.floor(Math.random() * (101))
		}];
	}

	var decimal_data_voltage = get_decimal_data();

	var decimal_data_temp = get_decimal_data();

	var decimal_data_amper = get_decimal_data();

	function voltage(index) {
		decimal_data_voltage.splice(0, 1);

		decimal_data_voltage.push({
			x: index,
			y: Math.floor(Math.random() * (101))
		})

		$('#voltage').html(decimal_data_voltage[decimal_data_voltage.length - 1].y);

		return decimal_data_voltage;
	}

	function temp(index) {
		decimal_data_temp.splice(0, 1);

		decimal_data_temp.push({
			x: index,
			y: Math.floor(Math.random() * (101))
		})

		$('#temperature').html(decimal_data_temp[decimal_data_temp.length - 1].y);

		return decimal_data_temp;
	}

	function amper(index) {
		decimal_data_amper.splice(0, 1);

		decimal_data_amper.push({
			x: index,
			y: Math.floor(Math.random() * (101))
		})

		$('#amper').html(decimal_data_amper[decimal_data_amper.length - 1].y);

		return decimal_data_amper;
	}

	var graph_voltage = Morris.Line({
  		element: 'voltage_chart',
  		data: decimal_data_voltage,
  		xkey: 'x',
	  	ykeys: ['y'],
  		labels: ['Напряжение'],
  		parseTime: false,
  		xLabelMargin: 10,	
  		integerYLabels: true,
    	hideHover: true
	});

	var graph_temp = Morris.Line({
  		element: 'temperature_chart',
  		data: decimal_data_temp,
  		xkey: 'x',
	  	ykeys: ['y'],
  		labels: ['Температура'],
  		parseTime: false,
  		xLabelMargin: 10,	
  		integerYLabels: true,
    	hideHover: true
	});

	var graph_amper = Morris.Line({
  		element: 'amper_chart',
  		data: decimal_data_amper,
  		xkey: 'x',
	  	ykeys: ['y'],
  		labels: ['Сила тока'],
  		parseTime: false,
  		xLabelMargin: 10,	
  		integerYLabels: true,
    	hideHover: true
	});

	var reloads = 0;

	function update() {
		reloads++;
		graph_voltage.setData(voltage(reloads));
		graph_temp.setData(temp(reloads));
		graph_amper.setData(amper(reloads));
	}

	setInterval(update, 1000);
});
