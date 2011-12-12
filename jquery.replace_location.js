(function($) {
$.fn.replace_location = function(options) {
	$.fn.replace_location.defaults = {
		replaceLocation: 'replaceLocation',
		ajaxType: 'POST',
		replaceLocationURLAttr: 'href'
	};
	
	var opts = $.extend({}, $.fn.replace_location.defaults, options);
	
	$(this).live({
		'change': function(event){
			var formElement = $(this);
			if(formElement.attr(opts.replaceLocationURLAttr) != null && formElement.attr(opts.replaceLocationURLAttr) != undefined){
				$.ajax({
					url: formElement.attr(opts.replaceLocationURLAttr),
					data: formElement.serialize(),
					success: function(data){ $(formElement.attr(opts.replaceLocation)).html(data); },
					type: opts.ajaxType
				});
			}
		},
		'click': function(event){
			if(event.target.nodeName === "SELECT" || event.target.nodeName === "OPTION"){
			
			} else {
				var formElement = $(this);
				if(formElement.attr(opts.replaceLocationURLAttr) != null && formElement.attr(opts.replaceLocationURLAttr) != undefined){
					$.ajax({
						url: formElement.attr(opts.replaceLocationURLAttr),
						data: formElement.serialize(),
						success: function(data){ $(formElement.attr(opts.replaceLocation)).html(data); },
						type: opts.ajaxType
					});
				}
				event.preventDefault();
			}
		}
	});
}})(jQuery);