

(function ($) {
"use strict";


   // classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // console.log(links.classList);
  // console.log(links.classList.contains("random"));
  // console.log(links.classList.contains("links"));
  // if (links.classList.contains("show-links")) {
  //   links.classList.remove("show-links");
  // } else {
  //   links.classList.add("show-links");
  // }
  links.classList.toggle("show-links");
});
 

    	// Show or hide the sticky footer button

	$(window).on('scroll', function(event) {

		if($(this).scrollTop() > 600){

			$('#scroll').fadeIn(200)

		} else{

			$('#scroll').fadeOut(200)

		}

	});


	//Animate the scroll to yop

	$('#scroll').on('click', function(event) {

		event.preventDefault();



		$('html, body').animate({

			scrollTop: 0,

		}, 1500);

	});

  
 

// scrollToTop


// WOW active
/*
new WOW().init();
*/


})(jQuery);

