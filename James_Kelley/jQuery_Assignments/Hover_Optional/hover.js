$(document).ready(function(){

	$("img").hover(function(){
	var temp1 = $(this).attr("src");
	var temp2 = $(this).attr("alt-src")
	$(this).attr("src", temp2)
	$(this).attr("alt-src", temp1);

	});
});