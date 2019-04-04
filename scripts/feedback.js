function feedback(currentObj) {
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

		currentObj.children('#submit').text('Отправляется');

		var iter = 0,
			sending = setInterval((i) => {
			iter++;
		  	currentObj.children('#submit').text(currentObj.children('#submit').text() + '.');

			if (iter == 4) {
				iter = 0;
				currentObj.children('#submit').text('Отправляется');
			}
		}, 300);



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
			currentObj.children('#submit').text('Отправлено');
			currentObj.children('#submit').addClass('done');
			clearInterval(sending);
		});
	}
}

function validateEmail(email) {
    var pattern  = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern .test(String(email).toLowerCase());
}