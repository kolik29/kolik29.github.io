$(document).ready(function() {
	scrollElement($('body'));

	$('body').on('mousewheel', function(e) {
		scrollElement(e);
	});

	$('section').bind('classChanged', function(){
		if ($(this).hasClass('select'))
			console.log('classChange');
	});
});

var ignoreScroll = false;
function scrollElement(e) {
	if (e.deltaY != undefined) {
		if (ignoreScroll == false) {
			var select = $('section.select');

			if (e.deltaY < 0)
				if (select.next().length != 0)
					select.next('section').addClass('select');
				else
					select.parent().children().first().addClass('select');

			if (e.deltaY > 0)
				if (select.prev().length != 0)
					select.prev('section').addClass('select');
				else
					select.parent().children().last().addClass('select');

			select.removeClass('select');

			ignoreScroll = true;
			setTimeout(function() {
				ignoreScroll = false;
			}, 750);
		}
	}
}

(function(){
	var originalAddClassMethod = jQuery.fn.addClass;
	var originalRemoveClassMethod = jQuery.fn.removeClass;

	jQuery.fn.addClass = function(){
		var result = originalAddClassMethod.apply(this, arguments);
		jQuery(this).trigger('classChanged');
		return result;
	}

	jQuery.fn.removeClass = function(){
		var result = originalRemoveClassMethod.apply(this, arguments);
		jQuery(this).trigger('classChanged');
		return result;
	}
})();