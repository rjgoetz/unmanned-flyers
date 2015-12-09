"use strict";
/*global $*/

// google api
function initialize() {
	var mapCanvas = document.getElementById('map');
	var mapOptions = {
		center: new google.maps.LatLng(44.9303324,-93.3054337),
		zoom: 12,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	var map = new google.maps.Map(mapCanvas, mapOptions);
};

// fade in login area
function fadeLogIn() {
	var
		$logInButton = $(".login button"),
		$logInForm = $(".login-form"),
		$logInArea = $(".login-area")
	;

	$logInArea.hover(function() {
		$logInForm.fadeToggle("fast");
	});
};

$(document).ready(function(){
	// slide-out login
	fadeLogIn();

	// owl-carousel script
	$("#carousel").owlCarousel({
		autoplay: 2000,
		autoplayHoverPause: true,
		loop: true,
		items: 1
	});

	// video popup script
	$(".popup-youtube").magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});

	// initialize google maps if #map is found
	if ($("#map").length > 0) {
		google.maps.event.addDomListener(window, 'load', initialize);
	} else {
		console.log("No map");
	};
});
