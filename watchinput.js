(function(){
	$.fn.watchInput = function( options ) {
	  var settings = $.extend({
	      delay: 800,
	      input : function(){},
	      inputDone : function(){} 
	  }, options );

	  return this.each(function(/*i, n*/){
	    var $this = $(this);
	    var timer; 

	    $this.keydown(function(){
	      window.clearTimeout(timer);
	      settings.input($this.val().trim());
	    });

	    $this.keyup(function(){
	      window.clearTimeout(timer);
	      timer = window.setTimeout(function(){
	        var newSearch = $this.val().trim();
	        if(newSearch !== $this.data("oldvalue")){
	          $("#target").html("");
	          $this.data("oldvalue", newSearch);
	          settings.inputDone(newSearch, $this.data("oldvalue"));
	        }
	      }, settings.delay);
	    });
	  });
	};
})(jQuery);