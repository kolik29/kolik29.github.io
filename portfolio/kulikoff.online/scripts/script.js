$(document).ready(function() {
	scrollElement($('body'));

	$('body').on('mousewheel', function(e) {
		scrollElement(e);
	});

	$('main section').each(function(i) {
		var num;

		num = ((String(i + 1).length == 1) ? '0' + String(i + 1) : String(i + 1));

		$('nav .left-side').append('<div class="item">' + num + '</div>');
		$('nav .right-side').append('<div class="item"><div class="num">' + num + '</div><div class="name">' + $(this).data('name') + '</div></div>');
	});

	$('nav .left-side .item:first-child, nav .right-side .item:first-child').addClass('active');
});

var ignoreScroll = false;
function scrollElement(e) {
	if (e.deltaY != undefined) {
		if (ignoreScroll == false) {
			var activeSection = $('section.active'), element = {};

			if (e.deltaY < 0) {
				element['show'] = true;

				if (activeSection.next().length != 0)
					element['obj'] = activeSection.next('section');
				else
					element['obj'] = activeSection.parent().children().first();
			}

			if (e.deltaY > 0) {
				element['show'] = false;

				if (activeSection.prev().length != 0)
					element['obj'] = activeSection.prev('section');else
					element['obj'] = activeSection.parent().children().last();
			}

			$('nav .left-side .item').removeClass('active');
			$('nav .right-side .item').removeClass('active');
			$('nav .left-side .item:eq(' + element['obj'].index() + '), nav .right-side .item:eq(' + element['obj'].index() + ')').addClass('active');

			activeSection.addClass('slide-' + (element['show'] ? 'hide' : 'show') + '-down').removeClass('active');
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