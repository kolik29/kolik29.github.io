$(document).ready(function() {
	if (window.location.href.split('#')[1] != undefined) {
		setPage(window.location.href.split('#')[1]);
	}

	$(window).on("hashchange", function(e) {
		$('#content').focus();
		setPage(e.originalEvent.newURL.split('#')[1]);
		addEvents();
	});

	addEvents();
});

function addEvents() {
	$('.percent_circle').each(function() {
		draw_circle_percent(
			$(this).children('canvas').attr('id'),
			10,
			parseInt($(this).children('span').text()),
			'#c6c6c6',
			'#6a8d9d'
		);
	});

	$('#slider > .controls *').on('click', function() {
		slide($(this));
	});

	$('#feedback #submit').on('click', function() {
		var currentObj = $(this).parent();

		if (currentObj.children('#name').val() == '' ||
			currentObj.children('#email').val() == '' ||
			currentObj.children('#text').val() == '') {
			alert('Пожалуйста, заполните все поля!');

			if (currentObj.children('#name').val() == '')
				currentObj.children('#name').addClass('error');
			else
				currentObj.children('#name').removeClass('error');

			if (currentObj.children('#email').val() == '')
				currentObj.children('#email').addClass('error');
			else
				currentObj.children('#email').removeClass('error');

			if (currentObj.children('#text').val() == '')
				currentObj.children('#text').addClass('error');
			else
				currentObj.children('#text').removeClass('error');
		} else if (!validateEmail(currentObj.children('#email').val())) {
			alert('Некорректно введен email!');
			currentObj.children('#email').addClass('error');
		} else {
			currentObj.children('#email').removeClass('error');

			$.ajax({
				type: "POST",
				url: "https://getsimpleform.com/messages?form_api_token=f201ba4de9e54f56a13391c8881f55db",
				data: {
					form_api_token: "f201ba4de9e54f56a13391c8881f55db",
					name: currentObj.children('#name').val(),
					email: currentObj.children('#email').val(),
					text: currentObj.children('#text').val()
				}
			}).done(function(msg) {
				alert(msg);
			});
		}
	});
}