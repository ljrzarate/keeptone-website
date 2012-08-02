
/*  Table of Contents 
01. ANNOUNCEMENT COOKIE ACTIVATION
02. TWITTER FEED
03. SLIDER DETAILS
	A. HOMEPAGE SLIDER
	B. PORTFOLIO SLIDER
	C. PORTFOLIO SINGLE SLIDER
	D. ANY OTHER SLIDER
04. FLICKR PHOTOS
05. MENU ACTIVATION
06. LIGHTBOX ACTIVATION
*/


/*
=============================================== 01. ANNOUNCEMENT COOKIE ACTIVATION ===============================================
*/
/* Cookie Code */
$(document).ready(function(){
	if($.cookie('panel_cookie') == null) {
		$("#topannounce").fadeIn();
	};
 
	$(".rightCloseButton").click(function() {
		$("#topannounce").slideUp();
		$.cookie('panel_cookie', 'closed', { expires: 5, path: '/' });	
	});
	
	$("#reset-announce").click(function() {
		$.cookie('panel_cookie', null, { expires: 5, path: '/' });	
	});
});

/* Based on Session instead of Cookie 
$(document).ready(function(){
	if ($.cookie('notificationBar') != 'closed') {
		$('#topannounce').fadeIn('normal');
	}
}); */



/*
=============================================== 02. TWITTER FEED ===============================================
*/

$(document).ready(function() {
		$('#tweets-sidebar').jtwt({image_size : 0, count : 4, username: 'keeptone', convert_links : 1, loader_text : 'cargando nuevos tweets...'});   
});


/*
=============================================== 03. SLIDER DETAILS ===============================================
*/

/* -------------------- A. HOMEPAGE SLIDER -------------------- */
$(window).load(function() {
	$('#featured').orbit({
	     animation: 'fade',                  // fade, horizontal-slide, vertical-slide, horizontal-push
	     animationSpeed: 600,                // how fast animtions are
	     timer: true, 			 // true or false to have the timer
	     advanceSpeed: 3800, 		 // if timer is enabled, time between transitions 
	     pauseOnHover: false, 		 // if you hover pauses the slider
	     startClockOnMouseOut: false, 	 // if clock should start on MouseOut
	     startClockOnMouseOutAfter: 1000, 	 // how long after MouseOut should the timer start again
	     directionalNav: true, 		 // manual advancing directional navs
	     captions: true, 			 // do you want captions?
	     captionAnimation: 'fade', 		 // fade, slideOpen, none
	     captionAnimationSpeed: 800, 	 // if so how quickly should they animate in
	     bullets: false,			 // true or false to activate the bullet navigation
	     bulletThumbs: false,		 // thumbnails for the bullets
	     bulletThumbLocation: '',		 // location from this file where thumbs will be
	     afterSlideChange: function(){} 	 // empty function 
	});
 });
/* View/Hide Slider Arrows */
$(window).load(function() {
    $(".slider-nav span").hide();
    $("#featured-container").hover( 
        function(){ 
			$(".slider-nav span").stop(true, true).fadeIn('normal'); 
		},
        function(){ 
			$(".slider-nav span").fadeOut('normal'); 
		}
    );
});

/* -------------------- B. PORTFOLIO SLIDER -------------------- */
$(window).load(function() {
    $('.portfolio-slider').nivoSlider({
        effect:'fade', // Specify sets like: 'fold,fade,sliceDown'
        slices:15, // For slice animations
        boxCols: 8, // For box animations
        boxRows: 4, // For box animations
        animSpeed:450, // Slide transition speed
        pauseTime:3000, // How long each slide will show
        startSlide:0, // Set starting Slide (0 index)
        directionNav:false, // Next & Prev navigation
        directionNavHide:true, // Only show on hover
        controlNav:true, // 1,2,3... navigation
        controlNavThumbs:false, // Use thumbnails for Control Nav
        controlNavThumbsFromRel:false, // Use image rel for thumbs
        controlNavThumbsSearch: '.jpg', // Replace this with...
        controlNavThumbsReplace: '_thumb.jpg', // ...this in thumb Image src
        keyboardNav:true, // Use left & right arrows
        pauseOnHover:true, // Stop animation while hovering
        manualAdvance:true, // Force manual transitions
        captionOpacity:0.8, // Universal caption opacity
        prevText: 'Prev', // Prev directionNav text
        nextText: 'Next', // Next directionNav text
        beforeChange: function(){}, // Triggers before a slide transition
        afterChange: function(){}, // Triggers after a slide transition
        slideshowEnd: function(){}, // Triggers after all slides have been shown
        lastSlide: function(){}, // Triggers when last slide is shown
        afterLoad: function(){} // Triggers when slider has loaded
    });
});

/* -------------------- C. PORTFOLIO SINGLE SLIDER -------------------- */
$(window).load(function() {
    $('.portfolio-slider-single').nivoSlider({
        effect:'fade', // Specify sets like: 'fold,fade,sliceDown'
        slices:15, // For slice animations
        boxCols: 8, // For box animations
        boxRows: 4, // For box animations
        animSpeed:400, // Slide transition speed
        pauseTime:3000, // How long each slide will show
        startSlide:0, // Set starting Slide (0 index)
        directionNav:false, // Next & Prev navigation
        directionNavHide:true, // Only show on hover
        controlNav:true, // 1,2,3... navigation
        controlNavThumbs:false, // Use thumbnails for Control Nav
        controlNavThumbsFromRel:false, // Use image rel for thumbs
        controlNavThumbsSearch: '.jpg', // Replace this with...
        controlNavThumbsReplace: '_thumb.jpg', // ...this in thumb Image src
        keyboardNav:true, // Use left & right arrows
        pauseOnHover:true, // Stop animation while hovering
        manualAdvance:false, // Force manual transitions
        captionOpacity:0.8, // Universal caption opacity
        prevText: 'Prev', // Prev directionNav text
        nextText: 'Next', // Next directionNav text
        beforeChange: function(){}, // Triggers before a slide transition
        afterChange: function(){}, // Triggers after a slide transition
        slideshowEnd: function(){}, // Triggers after all slides have been shown
        lastSlide: function(){}, // Triggers when last slide is shown
        afterLoad: function(){} // Triggers when slider has loaded
    });
});


/* -------------------- D. ANY OTHER SLIDER -------------------- */
$(window).load(function() {
    $('.any-slider').nivoSlider({
        effect:'fade', // Specify sets like: 'fold,fade,sliceDown'
        slices:15, // For slice animations
        boxCols: 8, // For box animations
        boxRows: 4, // For box animations
        animSpeed:400, // Slide transition speed
        pauseTime:3000, // How long each slide will show
        startSlide:0, // Set starting Slide (0 index)
        directionNav:false, // Next & Prev navigation
        directionNavHide:true, // Only show on hover
        controlNav:true, // 1,2,3... navigation
        controlNavThumbs:false, // Use thumbnails for Control Nav
        controlNavThumbsFromRel:false, // Use image rel for thumbs
        controlNavThumbsSearch: '.jpg', // Replace this with...
        controlNavThumbsReplace: '_thumb.jpg', // ...this in thumb Image src
        keyboardNav:true, // Use left & right arrows
        pauseOnHover:true, // Stop animation while hovering
        manualAdvance:false, // Force manual transitions
        captionOpacity:0.8, // Universal caption opacity
        prevText: 'Prev', // Prev directionNav text
        nextText: 'Next', // Next directionNav text
        beforeChange: function(){}, // Triggers before a slide transition
        afterChange: function(){}, // Triggers after a slide transition
        slideshowEnd: function(){}, // Triggers after all slides have been shown
        lastSlide: function(){}, // Triggers when last slide is shown
        afterLoad: function(){} // Triggers when slider has loaded
    });
});


/*
=============================================== 04. FLICKR PHOTOS ===============================================
*/
$(document).ready(function(){		 			   
	// Our very special jQuery JSON fucntion call to Flickr, gets details of the most recent images			   
	$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?id=52617155@N08&lang=en-us&format=json&jsoncallback=?", displayImages);  //YOUR IDGETTR GOES HERE
	function displayImages(data) {																																   
		// Randomly choose where to start. A random number between 0 and the number of photos we grabbed (20) minus  7 (we are displaying 7 photos).
		var iStart = Math.floor(Math.random()*(0));	
		
		// Reset our counter to 0
		var iCount = 1;								
		
		// Start putting together the HTML string
		var htmlString = "<ul>";					
		
		// Now start cycling through our array of Flickr photo details
		$.each(data.items, function(i,item){
									
			// Let's only display 6 photos (a 2x3 grid), starting from a the first point in the feed				
			if (iCount > iStart && iCount < (iStart + 10)) {
				
				// I only want the ickle square thumbnails
				var sourceSquare = (item.media.m).replace("_m.jpg", "_s.jpg");		
				
				// Here's where we piece together the HTML
				htmlString += '<li><a href="' + item.link + '" target="_blank">';
				htmlString += '<img src="' + sourceSquare + '" alt="' + item.title + '" title="' + item.title + '"/>';
				htmlString += '</a></li>';
			}
			// Increase our counter by 1
			iCount++;
		});		
		
	// Pop our HTML in the #images DIV	
	$('#flickr-sidebar').html(htmlString + "</ul>");
	
	// Close down the JSON function call
	}
	
// The end of our jQuery function	
});


/*
=============================================== 05. MENU ACTIVATION  ===============================================
*/
jQuery(function(){
	$("ul.sf-menu").supersubs({ 
	        minWidth:    5,   // minimum width of sub-menus in em units 
	        maxWidth:    18,   // maximum width of sub-menus in em units 
	        extraWidth:  1     // extra width can ensure lines don't sometimes turn over 
	                           // due to slight rounding differences and font-family 
	    }).superfish({ 
			animation: {height:'show'},   // slide-down effect without fade-in 
			speed:         'normal',           // speed of the animation. Equivalent to second parameter of jQuery’s .animate() method 
			autoArrows:    true,               // if true, arrow mark-up generated automatically = cleaner source code at expense of initialisation performance 
			dropShadows:   false,               // completely disable drop shadows by setting this to false 
			delay:     400               // 1.2 second delay on mouseout 
		});
});	


/*
=============================================== 06. LIGHTBOX ACTIVATION  ===============================================
*/
$(document).ready(function(){
		$("a[rel^='prettyPhoto']").prettyPhoto({
			animation_speed: 'fast', /* fast/slow/normal */
			slideshow: 5000, /* false OR interval time in ms */
			autoplay_slideshow: false, /* true/false */
			opacity: 0.80, /* Value between 0 and 1 */
			show_title: false, /* true/false */
			allow_resize: true, /* Resize the photos bigger than viewport. true/false */
			default_width: 500,
			default_height: 344,
			counter_separator_label: '/', /* The separator for the gallery counter 1 "of" 2 */
			theme: 'pp_default', /* light_rounded / dark_rounded / light_square / dark_square / facebook */
			horizontal_padding: 20, /* The padding on each side of the picture */
			hideflash: false, /* Hides all the flash object on a page, set to TRUE if flash appears over prettyPhoto */
			wmode: 'opaque', /* Set the flash wmode attribute */
			autoplay: false, /* Automatically start videos: True/False */
			modal: false, /* If set to true, only the close button will close the window */
			deeplinking: false, /* Allow prettyPhoto to update the url to enable deeplinking. */
			overlay_gallery: true, /* If set to true, a gallery will overlay the fullscreen image on mouse over */
			keyboard_shortcuts: true, /* Set to false if you open forms inside prettyPhoto */
			ie6_fallback: true,
			social_tools: '' /* html or false to disable  <div class="pp_social"><div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="http://www.facebook.com/plugins/like.php?locale=en_US&href='+location.href+'&amp;layout=button_count&amp;show_faces=true&amp;width=500&amp;action=like&amp;font&amp;colorscheme=light&amp;height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div></div> */
		});
});

