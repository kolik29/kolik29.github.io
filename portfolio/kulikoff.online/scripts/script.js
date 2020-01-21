$(document).ready(function() {
	$('body').on('mousewheel', function(e) {
		scrollElement(e);
	});

	menu();
});

var ignoreScroll = false;
function scrollElement(e) {
	if (e.deltaY != undefined) {
		if (ignoreScroll == false) {
			var activeSection = $('section.active');
			$('nav .item.active').removeClass('active');

			if (e.deltaY < 0) {
				activeSection.addClass('slide-hide-down').removeClass('active');

				if (activeSection.next().length != 0) {
					activeSection.next('section').addClass('active').addClass('slide-show-up');
				}
				else {
					activeSection.parent().children().first().addClass('active').addClass('slide-show-up');
				}
			}

			if (e.deltaY > 0) {
				activeSection.addClass('slide-hide-up').removeClass('active');

				if (activeSection.prev().length != 0) {
					activeSection.prev('section').addClass('active').addClass('slide-show-down');
				}
				else {
					activeSection.parent().children().last().addClass('active').addClass('slide-show-down');
				}
			}

			resetSlideClass();
		}
	}
}

function menu() {
	makeMenu();
	function makeMenu() {
		$('main section').each(function(i) {
			var num;

			num = ((String(i + 1).length == 1) ? '0' + String(i + 1) : String(i + 1));

			$('nav .left-side').append('<div class="item">' + num + '</div>');
			$('nav .right-side').append('<div class="item"><div class="num">' + num + '</div><div class="name">' + $(this).data('name') + '</div></div>');
		});

		$('nav .left-side .item:first-child, nav .right-side .item:first-child').addClass('active');
	}

	$('.right-side .item').on('click', function() {
		$('nav .item.active').removeClass('active');

		if ($(this).index() < $('.right-side .item.active').index()) {
			$('section.active').addClass('slide-hide-up').removeClass('active');
			$('section[data-name="' + $(this).children('.name').text() + '"]').addClass('slide-show-down').addClass('active');
		}

		if ($(this).index() > $('.right-side .item.active').index()) {
			$('section.active').addClass('slide-hide-down').removeClass('active');
			$('section[data-name="' + $(this).children('.name').text() + '"]').addClass('slide-show-up').addClass('active');
		}

		resetSlideClass();
	});
}

function resetSlideClass() {
	$('nav .right-side .item').eq($('section.active').index()).addClass('active');
	$('nav .left-side .item').eq($('section.active').index()).addClass('active');

	ignoreScroll = true;
	setTimeout(function() {
		ignoreScroll = false;
		$('section.slide-show-up').removeClass('slide-show-up');
		$('section.slide-hide-down').removeClass('slide-hide-down');
		$('section.slide-show-down').removeClass('slide-show-down');
		$('section.slide-hide-up').removeClass('slide-hide-up');
	}, 500);
}