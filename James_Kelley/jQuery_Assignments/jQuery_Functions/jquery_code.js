$(document).ready(function(){

	$("#b1").click(function(){
	$("#topParagraph").css("background-color", "red");
	});

	$("#b2").click(function(){
	$("#middleParagraph").slideToggle();
	$("img" ).show();
	$(".disappear").hide();
	});

	$(".b3").click(function(){
	$("#result").append("<h1>BOOM!</h1>");
	});


});