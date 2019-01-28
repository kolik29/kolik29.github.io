$(document).ready(function() {
	let switchOn = false;
	$('#switch').on('click', function () {
		if (!switchOn) {
			$(this).children('.disc').css({
				'left': 'calc(100% - ' + ($(this).children('.disc').width() + (parseInt($(this).children('.disc').css('margin')) * 2)) + 'px)'
			});
			$(this).css({
				'background': 'green'
			});
		} else {
			$(this).children('.disc').css({
				'left': '0'
			});
			$(this).css({
				'background': 'red'
			});
		}
		switchOn = !switchOn;
	});
});