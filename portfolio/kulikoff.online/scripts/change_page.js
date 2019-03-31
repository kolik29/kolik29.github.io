function setPage(section) {
	var elImage = $('a[href="#' + section + '"] .bkg-image').css('background-image');
	var sectionName = $('a[href="#' + section + '"] h1').html();
	$('#js-text').html(sectionName);

	if (section != '') {
		$('#content').html('');
		$('#' + section).clone().appendTo('#content');

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
		}, 300);
	} else {
		$('main').css({
			'display': 'grid'
		});

		setTimeout(() => {
			$('main aside').css({
				'transform': 'translateX(0%)'
			});

			$('main menu').css({
				'transform': 'translateX(0%)'
			});

			$('main').css({
				'background': '#fff'
			});
		}, 30);
	}
}

