$(document).ready(function() { // jQuery bootstrap

	// get the pokemons
	for (var i = 1; i < 152; i++) {
		$('.container').append(`<img src="http://pokeapi.co/media/img/${i}.png">`);
	}

}); // end of $(document).ready(function() {