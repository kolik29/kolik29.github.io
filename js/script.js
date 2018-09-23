$(document).ready(function() {
	/*Наведение на соцсети*/
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

	/*Наведение на меню*/
	$('.button').mouseenter(function() {
		$(this).find('.icon').css('box-shadow', '0 0 0px 75px #00000000');
	});

	$('.button').mouseleave(function() {
		$(this).find('.icon').css('box-shadow', '');
	});

	/*Нажатие на кнопки*/
	$('.button').click(function() {

		if ($(window).width() >= 1000) {
			$('.half-screen.left').css('transform', 'translateX(-50vw)');
			$('.half-screen.right').css('transform', 'translateX(50vw)');
		} else {
			$('.half-screen.left').css('transform', 'translateX(-100vw)');
			$('.half-screen.right').css('transform', 'translateX(100vw)');			
		}

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

		$('.half-screen.left').css('transform', 'translateX(0)');
		$('.half-screen.right').css('transform', 'translateX(0)');

		$('#white-layer').css('display', 'block');
		$('#white-layer').animate({
			opacity: 1
		}, 500);
	});

	/*Скиллы в процентах в кружке*/
	$('.percent_circle').each(function() {
		draw_circle_percent(
			$(this).children('canvas').attr('id'), 
			10, 
			parseInt($(this).children('span').text()),
			'#c6c6c6',
			'#6a8d9d');
	});

	/*Нажатие на лупу в портфолио*/
	$('.js-popup-open').click(function () {
		$('.popup-bkg').css('display', 'flex');
		$('.popup-bkg > .' + $(this).attr('id')).css('display', 'flex');
		$('.popup-bkg').animate({
			opacity: '1'
		}, 500);
	});

	$('.popup-bkg').click(function() {
		$('.popup-bkg').animate({
			opacity: '0'
		}, 500, function () {
			$('.popup-bkg').css('display', 'none');
			$('.popup-bkg > div').each(function() {
				$(this).css('display', 'none');
			});
		});
	});
});

function draw_circle_percent(elemnt_id, line_width, percent, color1, color2) {
	let canvas = document.getElementById(elemnt_id),
   		line = canvas.getContext('2d'),
   		center = canvas.width/2;

   	line.beginPath();  
	line.lineWidth = line_width;
	line.strokeStyle = color1;
	line.arc(center, center, center-line_width/2, 0, Math.PI*2);
	line.closePath();
   	line.stroke();

	line.beginPath();  
	line.lineWidth = line_width;
	line.strokeStyle = color2;
	line.rotate(-90*Math.PI/180);
	line.arc(-center, center, center-line_width/2, 0, (360/100*percent)*Math.PI/180);
   	line.stroke();
}