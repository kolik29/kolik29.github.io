$(document).ready(function() {
	scrollElement($('body'));

	$('body').on('mousewheel', function(e) {
		scrollElement(e);
	});

	$('main section').each(function(i) {
		var num;

		num = ((String(i + 1).length == 1) ? '0' + String(i + 1) : String(i + 1));

		$('nav .left-side').append('<div class="item">' + num + '</div>');
		$('nav .right-side').append('<div class="item">' + $(this).data('name') + '</div>');
	});
});

var ignoreScroll = false;
function scrollElement(e) {
	if (e.deltaY != undefined) {
		if (ignoreScroll == false) {
			var active = $('section.active'), element = {};

			if (e.deltaY < 0) {
				element['show'] = true;

				if (active.next().length != 0)
					element['obj'] = active.next('section');
				else
					element['obj'] = active.parent().children().first();
			}

			if (e.deltaY > 0) {
				element['show'] = false;

				if (active.prev().length != 0)
					element['obj'] = active.prev('section');
				else
					element['obj'] = active.parent().children().last();
			}

			active.addClass('slide-' + (element['show'] ? 'hide' : 'show') + '-down').removeClass('active');
			element['obj'].addClass('active').addClass('slide-' + (element['show'] ? 'show' : 'hide') + '-up');

			ignoreScroll = true;
			setTimeout(function() {
				ignoreScroll = false;
				$('.slide-show-up').removeClass('slide-show-up');
				$('.slide-hide-down').removeClass('slide-hide-down');
				$('.slide-show-down').removeClass('slide-show-down');
				$('.slide-hide-up').removeClass('slide-hide-up');
			}, 800);
		}
	}
}