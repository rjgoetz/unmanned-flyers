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
	$(".owl-carousel").owlCarousel({
		autoplay: true,
		autoplayHoverPause: true,
		loop: true,
		items: 3,
		autoWidth: true
	});

	google.maps.event.addDomListener(window, 'load', initialize);
});
