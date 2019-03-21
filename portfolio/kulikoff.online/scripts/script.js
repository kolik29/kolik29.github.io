$(document).ready(function() {
	if (window.location.href.split('#')[1] != undefined) {
		setPage(window.location.href.split('#')[1]);
	}

	$(window).on("hashchange", function(e) {
		setPage(e.originalEvent.newURL.split('#')[1]);
	});
})

function setPage(section) {
	var elImage = $('a[href="#' + section + '"] .bkg-image').css('background-image');

	if (section != '') {
		$('section aside').css({
			'background-image': elImage
		});

		$('main aside').css({
			'transform': 'translateX(-100%)'
		});

		$('main menu').css({
			'transform': 'translateX(100%)'
		});

		$('main').css({
			'background': '#ffffff00'
		})

		setTimeout(() => {
			$('main').css({
				'display': 'none'
			});
		}, 900)
	} else {
		$('main').css({
			'display': 'grid'
		});

		setTimeout(() => {
			$('main aside').css({
				'transform': 'translateX(0)'
			});

			$('main menu').css({
				'transform': 'translateX(0)'
			});

			$('main').css({
				'background': '#fff'
			});
		}, 1);
	}
}