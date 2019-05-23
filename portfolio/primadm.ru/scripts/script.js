$(document).ready(function() {
	$('*[name=event-type]').change(function() {
		$(this).parent().parent().children().eq(1).find('.dis-block').removeClass('dis-block');
		$(this).parent().parent().children().find('.' + $(this).attr('id')).addClass('dis-block');
	});

	$('#more-link').change(function() {
		$('.links-body a:nth-child(n+9)').toggle();
	});
});