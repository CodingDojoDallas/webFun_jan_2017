$(document).ready(function(){

	$("img").click(function(){
		var temp1 = $(this).attr("src");
		var temp2 = $(this).attr("data-alt-src");
		$(this).attr("src", temp2);
		$(this).attr("data-alt-src", temp1);
	});
});