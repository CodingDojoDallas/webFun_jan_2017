var pokemonData;

$(document).ready(function() { // jQuery bootstrap

	// get the pokemon data
	$.get("http://pokeapi.co/api/v2/pokemon/?limit=151", function(response) {
		pokemonData = response.results;
		$('.loading').hide();
		$('.container').show();
	}, "json");

	// get the pokemon images
	for (var i = 1; i < 152; i++) {
		var pokemon = $(`<img class="pokemon" id="${i}" src="http://pokeapi.co/media/img/${i}.png">`);
		pokemon.hover(function() { // mouse over
			var pokeId = $(this).attr('id') - 1;
			if (pokemonData != undefined) { // don't run this until we receive our pokemon data result
				var floatyDiv = $(`#floatyPokemon${$(this).attr('id')}`);
				if (floatyDiv.length) { // if floatyDiv already exists, show it
					floatyDiv.show();
				} else { // else get new data
					var floatyDiv = `<div class="floatyDiv" id="floatyPokemon${$(this).attr('id')}"><h3>${pokemonData[$(this).attr('id') - 1].name.toUpperCase()}</h3><img class="loadingPokeball" id="loadingPokeball${$(this).attr('id')}" src="loading_pokeball.gif"></div>`;
					$('body').append(floatyDiv);
					$.get(pokemonData[pokeId].url, function(pokemon) { // get info for a pokemon
						$(`#floatyPokemon${pokemon.id}`).prepend(`<img class="pokebackview" src="${pokemon.sprites.back_default}">`);
						var	pokeInfo	=		`<ul>`;
								pokeInfo	+=		`<li><span class='key'>Abilities</span>`;
								pokeInfo	+=			`<ul>`;
								for (var p = 0; p < pokemon.abilities.length; p++) {
									pokeInfo		+=		`<li>${pokemon.abilities[p].ability.name}</li>`;
								}
								pokeInfo	+=			`</ul>`;
								pokeInfo	+=		`</li>`;
								pokeInfo	+=		`<li><span class='key'>Species</span><span class='value'>${pokemon.species.name}</span></li>`;
								pokeInfo	+=		`<li><span class='key'>Height</span><span class='value'>${pokemon.height}</span></li>`;
								pokeInfo	+=		`<li><span class='key'>Weight</span><span class='value'>${pokemon.weight}</span></li>`;
								pokeInfo	+=		`<li><span class='key'>HP</span><span class='value'>${pokemon.stats[5].base_stat}</span></li>`;
								pokeInfo	+=		`<li><span class='key'>Attack</span><span class='value'>${pokemon.stats[4].base_stat}</span></li>`;
								pokeInfo	+=		`<li><span class='key'>Types</span>`;
								pokeInfo	+=			`<ul>`;
								for (var p = 0; p < pokemon.types.length; p++) {
									pokeInfo	+=			`<li>${pokemon.types[p].type.name}</li>`;
								}
								pokeInfo	+=			`</ul>`;
								pokeInfo	+=		`</li>`;
								pokeInfo	+=	`</ul>`;
						$(`#loadingPokeball${pokemon.id}`).remove();
						$(`#floatyPokemon${pokemon.id}`).append(pokeInfo);
					}, "json");
				}
			}
		}, function() { // mouse out
			$(`#floatyPokemon${$(this).attr('id')}`).hide();
		});
		$('.container').append(pokemon);
	}


}); // end of $(document).ready(function() {

// follow the mouse around
$(document).on('mousemove', function(e){
    $('.floatyDiv').css({
       left:  e.pageX + 20,
       top:   e.pageY + 20
    });
});
