$(document).ready(function () {
	$('a[href*="#"]').on('click', function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 1000);
		e.preventDefault();
		return false;
	});
});

ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map", {
        center: [55.736530, 37.487361],
        zoom: 15,
		controls: ['zoomControl']
    });
    myMap.behaviors.disable('scrollZoom');

    myGeoObject = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [55.736530, 37.487361]
        }
    });

    myMap.geoObjects.add(myGeoObject);
}