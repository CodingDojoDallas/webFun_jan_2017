$(document).ready(function() { // jQuery bootstrap

	$('.houses img').click(function() {

		// get the data
		$.get(`http://www.anapioficeandfire.com/api/houses/${$(this).attr('id')}`, function(res) {
			var html =	`<h1>${res.name}</h1>`;
					html +=	`<div class='info'>`;
					html +=		`<p>${res.words}</p>`;
					html +=		`<p>Region: ${res.region}</p>`;
					html +=		`<p>Coat of Arms: ${res.coatOfArms}</p>`;
					html +=		`<p>Founded ${res.founded}</p>`;
					html +=		`<ul>`;
					for (var i = 0; i < res.titles.length; i++) {
						html +=		`<li>${res.titles[i]}</li>`;
					}
					html +=		`</ul>`;
					html +=	`</div>`;
			$('.container').html(html);
		}, "json");
	});

}); // end of $(document).ready(function() {
