$(document).ready(function(){

$("#but1").click(function(){
	$("#p1").css("color", "red");
});
$("#but2").click(function(){
	$("#p2").slideToggle();
	$("img").show();
	$(".disappear").hide();
});
$("#but3").click(function(){
	$("#result").append("<h1>There you go. Click again</h1>");
});
$("#but4").click(function(){
	$("#faded").fadeIn("slow",function(){
	});
});
$("#but5").click(function(){
	$("#fadeout").fadeOut("slow");
});

});