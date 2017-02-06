$(document).ready(function(){

	for(i=1; i<152; i++){
		var img =('<img id="'+i+'" src="http://pokeapi.co/media/img/'+i+'.png">');
		$('#left').append(img);
	}

	$('img').click(function(){
		var id=$(this).attr('id');
		$.get("http://pokeapi.co/api/v1/pokemon/"+id, function(res) {
		console.log(res);
		var information = '<h4>'+res.name+'</h4>';
		information += '<img src="http://pokeapi.co/media/img/'+id+'.png">';
		information += '<h6>Types</h6>';
		information += '<p>'+res.types[0].name+'<p>';
		information += '<h6>Height</h6>';
		information += res.height;
		information += '<h6>Weight</h6>';
		information += res.weight;
		$('#white').html(information);




		}, "json");
	});


});