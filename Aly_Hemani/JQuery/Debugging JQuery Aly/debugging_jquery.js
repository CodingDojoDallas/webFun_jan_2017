$(document).ready(function(){
	
			$('p, h3, li').hover(function(){
				$(this).css('color', 'white');
				},function(){   
				$(this).css('color', 'black');
			});

			$('a').click(function(){
				alert("we don't actually serve pizza...");
			});

			$('img').click(function(){
				$(this).slideUp();
			});

			$('h5').click(function(){
				$('img').slideDown();
			});

			$('button').click(function(){
				var result = $('input:checked').val()  
				alert("Thank you for your input, we like " + result + " too!");
			});	
	});