(function ($) {
    "use strict"; 


	var headerHeight=document.getElementById('header').clientHeight
	$("#break").css("height",headerHeight+"px")




		// FUNCTION FOR CSS IMAGE GALLERY SLIDESHOW
		var slideIndex = 0

		function showSlides() {
    		var i
    		var slides = document.getElementsByClassName("mySlides")
    		var dots = document.getElementsByClassName("dot")
    		for (i = 0; i < slides.length; i++) {
       			slides[i].style.display = "none" 
    		}
    		slideIndex++
    		if (slideIndex> slides.length) {
    			slideIndex = 1
    		}    
    		for (i = 0; i < dots.length; i++) {
        		dots[i].className = dots[i].className.replace(" active", "")
    		}
    		slides[slideIndex-1].style.display = "block"
    		dots[slideIndex-1].className += " active"
    		setTimeout(showSlides, 4000); // Changes image every 2 seconds
		}

		showSlides()


})(jQuery);
