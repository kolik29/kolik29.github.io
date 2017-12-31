$(document).ready(function() {
	$(window).resize(function() {
		resizer();
	});
	resizer();

	function resizer() {
		$('.v-sidebar__background').css('margin-left', '-' + (($('.v-sidebar__background').width() - $('.o-sidebar').width()) / 2) + 'px'); //выравнивает картинку на сайдбаре
		$('.size-4-4').css('min-width', ($('.o-content').width() / 2) + 'px');
	}

});