(function($) {
$.fn.replace_location = function(options) {
	$.fn.replace_location.defaults = {
		replaceLocation: 'replaceLocation',
		ajaxType: 'POST'
	};
	
	var opts = $.extend({}, $.fn.replace_location.defaults, options);
	
	$(this).live({
		'change': function(event){
			var formElement = $(this);
			if(formElement.attr('href') != null && formElement.attr('href') != undefined){
				$.ajax({
					url: formElement.attr('href'),
					data: formElement.serialize(),
					success: function(data){ $(formElement.attr(opts.replaceLocation)).html(data); },
					type: opts.ajaxType
				});
			}
			event.preventDefault();
		},
		'click': function(event){
			if(event.target.nodeName === "SELECT" || event.target.nodeName === "OPTION"){
			
			} else {
				var formElement = $(this);
				if(formElement.attr('href') != null && formElement.attr('href') != undefined){
					$.ajax({
						url: formElement.attr('href'),
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