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
});