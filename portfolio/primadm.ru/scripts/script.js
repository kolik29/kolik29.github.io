$(document).ready(function() {
	var h1 = $('.links-body a:nth-child(1)')[0].clientHeight;
	var h2 = $('.links-body a:nth-child(5)')[0].clientHeight;

	console.log(h1, h2)

	$('.links-body').height(h1 + h2 + 5);
});