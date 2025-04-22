(function($) {
    "use strict";
	
	/* ..............................................
	Loader 
    ................................................. */
	
	$(window).on('load', function() { 
		$('.preloader').fadeOut(); 
		$('#preloader').delay(550).fadeOut('slow'); 
		$('body').delay(450).css({'overflow':'visible'});
	});
	
	/* ..............................................
    Fixed Menu
    ................................................. */
    
	$(window).on('scroll', function () {
		if ($(window).scrollTop() > 50) {
			$('.top-header').addClass('fixed-menu');
		} else {
			$('.top-header').removeClass('fixed-menu');
		}
	});
	
	/* ..............................................
    Gallery
    ................................................. */
	
	$('#slides').superslides({
		inherit_width_from: '.cover-slides',
		inherit_height_from: '.cover-slides',
		play: 5000,
		animation: 'fade',
	});
	
	$( ".cover-slides ul li" ).append( "<div class='overlay-background'></div>" );
	
	/* ..............................................
    Map Full
    ................................................. */
	
	$(document).ready(function(){ 
		$(window).on('scroll', function () {
			if ($(this).scrollTop() > 100) { 
				$('#back-to-top').fadeIn(); 
			} else { 
				$('#back-to-top').fadeOut(); 
			} 
		}); 
		$('#back-to-top').click(function(){ 
			$("html, body").animate({ scrollTop: 0 }, 600); 
			return false; 
		}); 
	});
	
	/* ..............................................
    Special Menu
    ................................................. */
	
	// var Container = $('.container');
	// Container.imagesLoaded(function () {
	// 	var portfolio = $('.special-menu');
	// 	portfolio.on('click', 'button', function () {
	// 		$(this).addClass('active').siblings().removeClass('active');
	// 		var filterValue = $(this).attr('data-filter');
	// 		$grid.isotope({
	// 			filter: filterValue
	// 		});
	// 	});
	// 	var $grid = $('.special-list').isotope({
	// 		itemSelector: '.special-grid'
	// 	});
	// });

	var Container = $('.container');
Container.imagesLoaded(function () {
    var portfolio = $('.special-menu');
    
    // Set the "traditional" button as active on page load
    var traditionalButton = portfolio.find('button[data-filter=".traditional"]');
    traditionalButton.addClass('active').siblings().removeClass('active');

    // Initialize Isotope with the traditional filter
    var $grid = $('.special-list').isotope({
        itemSelector: '.special-grid',
        filter: '.traditional' // Set initial filter to traditional
    });

    // Set up click event for filtering
    portfolio.on('click', 'button', function () {
        $(this).addClass('active').siblings().removeClass('active');
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });
});
	
	/* ..............................................
    BaguetteBox
    ................................................. */
	
	baguetteBox.run('.tz-gallery', {
		animation: 'fadeIn',
		noScrollbars: true
	});
	
	/* ..............................................
    Datepicker
    ................................................. */
	
	$('.datepicker').pickadate();
	$('.time').pickatime();
}(jQuery));

document.getElementById("whatsappButton").addEventListener("click", function() {
    var phoneNumber = "923162574845";
    var whatsappLink = "https://wa.me/" + phoneNumber + "?text=";
    window.location.href = whatsappLink;
});