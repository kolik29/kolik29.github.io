$(document).ready(function () {
	
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