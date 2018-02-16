$(document).ready(function() {
	/**********************/
	/*Наведение на соцсети*/
	/**********************/

	$('.soc-net a').mouseenter(function() {
		$(this).children('.name').animate({
			'opacity': 1
		}, 300);
	});

	$('.soc-net a').mouseleave(function() {
		$(this).children('.name').animate({
			'opacity': 0
		}, 300);
	});

	/**********************/

	/*******************/
	/*Наведение на меню*/
	/*******************/

	$('.button').mouseenter(function() {
		$(this).find('.icon').css('box-shadow', '0 0 0px 75px #00000000');
	});

	$('.button').mouseleave(function() {
		$(this).find('.icon').css('box-shadow', '');
	});

	/*******************/

	/*******************/
	/*Нажатие на кнопки*/
	/*******************/

	$('.button').click(function() {
		$('.half-screen.left').animate({
			left: '-50vw'
		}, 500);

		$('.half-screen.right').animate({
			right: '-50vw'
		}, 500, function() {
			$('#main').css('display', 'none');
		});

		$('#white-layer').animate({
			opacity: 0
		}, 500, function() {
			$('#white-layer').css('display', 'none');
		});

		$('.info-block').css('display', 'none');
		$('#' + $(this).data('section')).css('display', 'flex');
	});

	$('#close-btn').click(function() {
		$('#main').css('display', 'flex');
		$('.half-screen.left').animate({
			left: 0
		}, 500);

		$('.half-screen.right').animate({
			right: 0
		}, 500);

		$('#white-layer').css('display', 'block');
		$('#white-layer').animate({
			opacity: 1
		}, 500);
	});

	/*******************/

	/*****************************/
	/*Скиллы в процентах в кружке*/
	/*****************************/

	//draw_circle_percent('canvas', 10, 35, '#CCCCCC', '#FF0000');
	
	$('.percent_circle').each(function() {
		console.log($(this).children('canvas').attr('id'));

		draw_circle_percent(
			$(this).children('canvas').attr('id'), 
			10, 
			parseInt($(this).children('span').text()),
			'#c6c6c6',
			'#6a8d9d');
	});

	/*****************************/
});

function draw_circle_percent(elemnt_id, line_width, percent, color1, color2) {
	var canvas = document.getElementById(elemnt_id);
   	var line = canvas.getContext('2d');

   	var center = canvas.width/2;

   	/*Draw down circle*/
   	line.beginPath();  
	line.lineWidth = line_width;
	line.strokeStyle = color1;
	line.arc(center, center, center-line_width/2, 0, Math.PI*2);
	line.closePath();
   	line.stroke();

	/*Draw general circle*/
	line.beginPath();  
	line.lineWidth = line_width;
	line.strokeStyle = color2;
	line.rotate(-90*Math.PI/180);
	line.arc(-center, center, center-line_width/2, 0, (360/100*percent)*Math.PI/180);
   	line.stroke();
}