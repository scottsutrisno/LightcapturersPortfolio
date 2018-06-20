	function loadApp() {

		// Create the flipbook
		$('.flipbook').turn({
			// Width

			display: 'single',


			width: 1100,

			// Height

			height: 600,

			// Elevation

			elevation: 50,

			// Enable gradients

			gradients: true,

			// Auto center this flipbook

			autoCenter: true

		});
	}



// Load the HTML4 version if there's not CSS transform

yepnope({
	test: Modernizr.csstransforms,
	yep: ['../lib/turn.js'],
	nope: ['../lib/turn.html4.min.js'],
	both: ['css/basic.css'],
	complete: loadApp
});


jQuery(document).ready(function () {

	$('#previousPage').click(function () {
		$('.flipbook').turn('previous');
	});

	$('#nextPage').click(function () {
		$('.flipbook').turn('next');
	});

	$('.photography').click(function () {
		$('.flipbook').turn('page' , 2);
	});

	$('.manipulation').click(function () {
		$('.flipbook').turn('page', 3);
	});

	$('.web_development').click(function () {
		$('.flipbook').turn('page', 4);
	});

	$('.social_media').click(function () {
		$('.flipbook').turn('page', 5);
	});

	$('.video').click(function () {
		$('.flipbook').turn('page', 6);
	});

	$('.graphic_design').click(function () {
		$('.flipbook').turn('page', 7);
	});

	$('.recent').click(function () {
		$('.flipbook').turn('page', 8);
	});

	$('.bio').click(function () {
		$('.flipbook').turn('page', 9);
	});

	$('.clients').click(function () {
		$('.flipbook').turn('page', 10);
	});








});


