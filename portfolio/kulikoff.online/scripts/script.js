$(document).ready(function() {
	scrollElement($('body'));

	$('body').on('mousewheel', function(e) {
		scrollElement(e);
	});
});

var ignoreScroll = false;
function scrollElement(e) {
	if (e.deltaY != undefined) {
		if (ignoreScroll == false) {
			var activeUp = $('section.active-up'),
				activeDown = $('section.active-down');

			if (e.deltaY < 0)
				if (activeUp.next().length != 0)
					activeUp.next('section').addClass('active-up');
				else
					activeUp.parent().children().first().addClass('active-up');

			if (e.deltaY > 0)
				if (activeDown.prev().length != 0)
					activeDown.prev('section').addClass('active-down');
				else
					activeDown.parent().children().last().addClass('active-down');

			activeUp.removeClass('active-up');
			activeDown.removeClass('active-down');

			ignoreScroll = true;
			setTimeout(function() {
				ignoreScroll = false;
			}, 750);
		}
	}
}