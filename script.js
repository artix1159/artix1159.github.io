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
});