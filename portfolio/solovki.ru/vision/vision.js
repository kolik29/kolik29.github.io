var siteTemplate = '';

function load(template) {
	siteTemplate = template;

	$('#switch-vision').change(function() {
		if (this.checked) {
			$('.vision').css({
				'margin-top': '0'
			})
		} else {
			$('.vision').css({
				'margin-top': '-' + ($('.vision').outerHeight() + 1) + 'px'
			})
		}
	});

	$('.vision-close').click(function() {
		$('.vision').css({
			'margin-top': '-' + ($('.vision').outerHeight() + 1) + 'px'
		});
		$('#switch-vision').prop('checked', false);
	});

	$('#js-vision-default').click(function () {
		$('#font-type-1').prop('checked', true);
		$('#letter-spacing-1').prop('checked', true);
		$('#font-size-1').prop('checked', true);
		$('#color-scheme-1').prop('checked', true);
		$('#images-1').prop('checked', true);
		$('.js-font-type').remove();
		$('.js-letter-spacing').remove();
		$('.js-font-size').remove();
		$('.js-color-scheme').remove();
		$('.js-images').remove();
		saveSettings();
	});

	$('.vision-option input').change(function () {
		changeVision($(this));
	});

	$('.vision-option input:checked').each(function() {
		changeVision($(this));
	});
}

function changeVision(obj) {
	var name = obj.attr('name');
	var style;

	$('.js-' + name).remove();
	switch (name) {
		case 'font-type':
			if (obj.attr('id') == name + '-2') {
				style = '<style class="js-' + name + '">* { font-family: "Times New Roman" !important; } .fa { display: none; }</style>';
				$(document.body).append(style);
			}
		break;
		case 'letter-spacing':
			if (obj.attr('id') == 'letter-spacing-2') {
				style = '<style class="js-' + name + '">* { letter-spacing: 1.5px !important; }</style>';
				$(document.body).append(style);
			} else if (obj.attr('id') == 'letter-spacing-3') {
				style = '<style class="js-' + name + '">* { letter-spacing: 4px !important; }</style>';
				$(document.body).append(style);
			}
		break;
		case 'font-size':
			if (obj.attr('id') == 'font-size-2') {
				style = '<style class="js-' + name + '">* { font-size: 20px !important; }</style>';
				$(document.body).append(style);
			} else if (obj.attr('id') == 'font-size-3') {
				style = '<style class="js-' + name + '">* { font-size: 24px !important; }</style>';
				$(document.body).append(style);
			}
		break;
		case 'color-scheme':
			if (obj.attr('id') == 'color-scheme-2') {
				style = '<style class="js-' + name + '">* { background-color: #000 !important; color: #fff !important; border-color: #fff !important; } .top-panel, .top-panel input { background-color: #fff !important; outline: 3px solid #000 !important; } input[type=submit] { outline: none !important; background-color: transparent !important; } .top-panel { background: #000 !important; } .top-panel a { outline: 3px solid #fff !important; padding: .25em 1em !important; } input { color: #000 !important; }</style>';
				$(document.body).append(style);
			} else if (obj.attr('id') == 'color-scheme-3') {
				style = '<style class="js-' + name + '">* { background-color: #9dd1ff !important; color: #063462 !important; border-color: #063462 !important; } .top-panel, .top-panel input { background-color: #063462 !important; outline: 3px solid #063462 !important; } input[type=submit] { outline: none !important; background-color: transparent !important; } .top-panel { background: #9dd1ff !important; } .top-panel a { outline: 3px solid #063462!important; padding: .25em 1em !important; } input[type=search] { background: #9dd1ff !important; color: #063462 !important; }</style>';
				$(document.body).append(style);
			} else if (obj.attr('id') == 'color-scheme-4') {
				style = '<style class="js-' + name + '">* { background-color: #f7f3d6 !important; color: #4d4b43 !important; border-color: #4d4b43 !important; } .top-panel, .top-panel input { background-color: #4d4b43 !important; outline: 3px solid #4d4b43 !important; } input[type=submit] { outline: none !important; background-color: transparent !important; } .top-panel { background: #f7f3d6 !important; } .top-panel a { outline: 3px solid #4d4b43!important; padding: .25em 1em !important; } input[type=search] { background: #f7f3d6 !important; color: #4d4b43 !important; }</style>';
				$(document.body).append(style);
			} else if (obj.attr('id') == 'color-scheme-5') {
				style = '<style class="js-' + name + '">* { background-color: #3b2716 !important; color: #a9e44d !important; border-color: #a9e44d !important; } .top-panel, .top-panel input { background-color: #a9e44d !important; outline: 3px solid #a9e44d !important; } input[type=submit] { outline: none !important; background-color: transparent !important; } .top-panel { background: #3b2716 !important; } .top-panel a { outline: 3px solid #a9e44d!important; padding: .25em 1em !important; } input[type=search] { background: #3b2716 !important; color: #a9e44d !important; }</style>';
				$(document.body).append(style);
			}
		break;
		case 'images':
			if (obj.attr('id') == 'images-2') {
				style = '<style class="js-' + name + '">img { display: none !important; }</style>';
				$(document.body).append(style);
			} else if (obj.attr('id') == 'images-3') {
				style = '<style class="js-' + name + '">img { filter: grayscale(100%) !important; }</style>';
				$(document.body).append(style);
			}
		break;
	}
	saveSettings();
}

function saveSettings() {
	var inpChecked = '';

	$('.vision-option input:checked').each(function() {
		inpChecked += $(this).attr('id') + ' ';
	});

	$.ajax({
		type: 'POST',
		url: siteTemplate + '/vision/vision.php',
		data: 'vision=' + inpChecked
	});
}