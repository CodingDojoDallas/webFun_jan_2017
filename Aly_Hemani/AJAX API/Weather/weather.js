$(document).ready(function(){

	$('form').submit(function(){
		var city =$('#search').val();
		console.log(city);
		$.get('http://api.openweathermap.org/data/2.5/weather?q='+city+'&&appid=8aaa642117a91c21f71c9d707060b5e0',function(res){
			console.log(res);
			var result = '<h1>'+res.name+'</h1>';
			result += '<h3>'+(res.main.temp*9/5-459.67)+' &#8457</h3>';
			$('#result').html(result);
		}, 'json');
		return false;
	});
});
