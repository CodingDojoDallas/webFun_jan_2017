$(document).ready(function(){
	console.log("working");
	$("img").hide();
	    $("#dojo").click(function(){
		$("#wrapper").css("background-image","url(tree.jpg)");
	});
	    $("#beach").click(function(){
		$("#wrapper").css("background-image","url(beach.jpg)");
	});
	    $("#links").click(function(){
	    $("#box").remove();
	    });
	    $("#links").click(function(){
	    $("h1").html("Select Players");
	    });
			$("#select1").change(function(){
				if($(this).val == "yellow"){
					$("#firstPlayer").show("fast", function(){
						//animation complete
					})
					else if($(this).val == "black"){

						$("#secondPlayer").show("fast", function({
							//animation complete
						})
					}
			}))

})
