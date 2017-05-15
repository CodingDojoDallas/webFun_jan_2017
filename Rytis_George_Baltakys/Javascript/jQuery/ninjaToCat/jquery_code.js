$(document).ready(function() { // jQuery bootstrap

	for (var i = 0; i < 5; i++) { // add ninjas and cats
		var img = $("<img src='img/ninja"+i+".png' data-alt-src='img/cat"+i+".png'>");
		$("#content").append(img);
		img.click(function() {
			var originalSrc = $(this).attr('src');
			$(this).attr('src', $(this).attr('data-alt-src'));
			$(this).attr('data-alt-src', originalSrc);
		});
	}
}); // end of $(document).ready(function() {