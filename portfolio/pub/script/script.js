$(() => {
	$('#btn-burger').click(() => {
		if (!$('#mobilemenu').hasClass('show-left'))
			$('#mobilemenu').addClass('show-left')
	});
	$('#mobilemenu-close').click(() => {
		if ($('#mobilemenu').hasClass('show-left'))
			$('#mobilemenu').removeClass('show-left')
	});
});