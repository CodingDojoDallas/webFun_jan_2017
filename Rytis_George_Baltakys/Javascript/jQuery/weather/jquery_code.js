
$(document).ready(function() { // jQuery bootstrap

	$('form').submit(function() {
		var city = jQuery('#city').val();
		jQuery('#city').val('');

		// get weather data
		$.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&&appid=713a605ad5f61f33344b811369f8dcc5`, function(response) {
				var temperatureKelvin = response.main.temp;
				var city = response.name;
				var temperatureCelsius = Math.round(temperatureKelvin - 273.15);
				var temperatureFarenheit = Math.round(temperatureCelsius * 9 / 5 + 32);

				$('#cityname').text(city);
				$('#temperature').html("Temperature: " + temperatureCelsius + "c <small>(" + temperatureFarenheit + "f)</small>");
		}, "json");
		return false; // don't let form submit and refresh page
	});

}); // end of $(document).ready(function() {
