$(function(){	
	$.get('http://data.fixer.io/api/latest', 
		{
			access_key: '6f45631f1902d4bd3d86ad3f96053a55'
		},
		function(response){
			if(response.success){
				$('#currency-usd').html((response.rates.RUB / response.rates.USD).toFixed(2));
				$('#currency-eur').html((response.rates.RUB / response.rates.EUR).toFixed(2));
			}else{
				alert('ERROR! ' + response.error.type);
			}
		});

	$("#show-search").on("click", function(){
		$("#logo").hide(0);
		$("#show-search").hide(300);
		$("#search-form").show(600);
		$("#hide-search").show(600);
	})

	$("#hide-search").on("click", function(){
		$("#show-search").show(600);
		$("#search-form").hide(300);
		$("#hide-search").hide(300);
		$("#logo").show(0);
	})

	$("#menu-btn").on("click", function(){
		$('#menu-btn div').toggleClass('active');
		$('#menu-container').fadeIn();
		if($('#menu-btn div').hasClass('active')){
			$('body').css('overflow', 'hidden');
			$('#menu-container').css('display', 'none');
			$('#menu-container').show(600);			
		}else{
			$('body').css('overflow', 'auto');
			$('#menu-container').hide(300);
		}		
	})

	var sliderAnimate = false;
	function sliderAnimateEnd(){
		sliderAnimate = false;
	}

	$('#slider-banner').on('mousewheel', function(event) {
		if($(window).width() <= 520){
			if(!sliderAnimate){
				var delta = parseInt(event.originalEvent.wheelDelta || -event.originalEvent.detail);
				var el = $('#slider-banner');
				if (delta < 0) {
					if(el.css('left') != '-250px'){
						sliderAnimate = true;
						el.animate({left: "-250px"}, 500, sliderAnimateEnd);
					}
				}else {
					if(el.css('left') != '0px'){
						sliderAnimate = true;
						el.animate({left: "0px"}, 500, sliderAnimateEnd);
					}	
				}		    		    	  
			}
			event.preventDefault();
		}
	})

	var event = null;
	$('#slider-banner').on('touchstart', function (e) {
	    event = e;
	});
	$('#slider-banner').on('touchmove', function (e) {
		if($(window).width() <= 520){
		    if (event && !sliderAnimate) {
		        var delta =  (e.touches[0].pageX - event.touches[0].pageX);
		        if(delta>50 || delta <-50){
			        var el = $('#slider-banner');
			        if (delta < 0) {
			        	if(el.css('left') != '-250px'){
			        		sliderAnimate = true;
							el.animate({left: "-250px"}, 500, sliderAnimateEnd);
						}
					}else {
						if(el.css('left') != '0px'){
							sliderAnimate = true;
							el.animate({left: "0px"}, 500, sliderAnimateEnd);
						}	
					}
				}
		    }
		}
	});
	$('#slider-banner').on('touched', function (e) {
	    event = null;
	});

});
