"use strict";
/*global $*/

function initialize() {
	var mapCanvas = document.getElementById('map');
	var mapOptions = {
		center: new google.maps.LatLng(44.9303324,-93.3054337),
		zoom: 12,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	var map = new google.maps.Map(mapCanvas, mapOptions);
};

$(document).ready(function(){
	$("#carousel").owlCarousel({
		autoplay: 2000,
		autoplayHoverPause: true,
		loop: true,
		items: 1
	});

	if ($("#map").length > 0) {
		google.maps.event.addDomListener(window, 'load', initialize);
	} else {
		console.log("No map");
	};
});
