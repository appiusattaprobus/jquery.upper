/*
 * jQuery upper Plugin 1.0
 * Nikita Ivanov <dr.ivanov@nxt.ru>
 * Copyright 2013
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/

(function($) {
  $.fn.upper = function( options ){
  
	var sets = $.extend( {
	  'after'	 : 100,
	  'speed'	 : 800,
      	  'anchor'   	 : 'body,html'
        }, options);
	
	var $anchor	 = $(sets['anchor']);
  
	var $this	 = $(this);
	var this_top = $anchor.offset().top
	
	$this.css('display','none');
	
	$(window).scroll(function(){
		
		if ( $(window).scrollTop() > this_top + sets['after'] ) {
			$this.fadeIn();
		} else {
			$this.fadeOut();
		}
		
	});
	
	$this.click(function(){
		
		$('body,html').animate({
			scrollTop: this_top
		}, sets['speed']);
		
		return false;
	});
	
    return this;
  };
})(jQuery);
