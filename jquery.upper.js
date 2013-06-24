/*
 * jQuery upper Plugin 1.1
 * Nikita Ivanov <dr.ivanov@nxt.ru>
 * Copyright 2013
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/

(function($) {
  $.fn.upper = function( options ){
  
	var sets = $.extend( {
		before	: 10,		// margin before element 10px
		after	: 100,		// show "upper element" after scroll 100px
		timeUp	: 800,		// time to scroll up
		fadeIn  : 400,
		fadeOut : 400,
		anchor	: 'body'	// anchor element
	}, options);
	
	var $this = $(this);
	$this.css('display','none');
	
	// Detect if mobile device, which doesn't support fixed position
	var mobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
	
	if(!mobile) {
	
		var $anchor	= $(sets.anchor);
		var element_top	= $anchor.offset().top
			
		$(window).scroll(function(){
			
			if ( $(window).scrollTop() > element_top + sets.after ) {
				$this.fadeIn( sets.fadeIn );
			} else {
				$this.fadeOut( sets.fadeOut );
			}
			
		});
		
		$this.click(function(){
			
			$('html, body').animate({
				scrollTop: element_top - sets.before
			}, sets.timeUp );
			
			return false;
		});
		
	}

    return this;
  };
})(jQuery);
