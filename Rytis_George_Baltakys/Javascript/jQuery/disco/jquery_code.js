function animate() {
	for (var y = 1; y < 7; y++) {
		for (var x = 1; x < 7; x++) {
			var divx = $(`.divy:nth-child(${y}) .divx:nth-child(${x})`);
			divx.css('background-color', random_color());
		}
	}
}

function resetColor() {
	for (var y = 1; y < 7; y++) {
		for (var x = 1; x < 7; x++) {
			var divx = $(`.divy:nth-child(${y}) .divx:nth-child(${x})`);
			divx.css('background-color', 'rgba(0,0,0,0)');
		}
	}
}

function random_color() {
   var rgb = ['a','b','c','d','e','f','0','1','2','3','4','5','6','7','8','9'];
   color = '#'  //this is what we'll return!
   for(var i = 0; i < 6; i++) 
   {
      x = Math.floor((Math.random()*16))
      color += rgb[x]; 
   }
   return color;
}

var on = false;
var animateFunction;

$(document).ready(function() { // jQuery bootstrap

	for (var y = 0; y < 6; y++) {
		var div = $('<div class="divy"></div>');
		$('#boxes').append(div);
		for (var x = 0; x < 6; x++) {
			div.append('<div class="divx"></div>');
		}
	}

	$('#reset').click(function() {
		resetColor();
	});

	$('#onoff').click(function() {

		// toggle
		on = !on;
		console.log(on);
		
		if (on) { // animate
			animateFunction = window.setInterval(function(){
							animate();
						}, 100);
		} else { // turn it off
			clearInterval(animateFunction);
		}
		
	});
}); // end of $(document).ready(function() {