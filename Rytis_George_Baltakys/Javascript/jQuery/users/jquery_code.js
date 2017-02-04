$(document).ready(function() { // jQuery bootstrap

	$('form').submit(function() {
		$('tbody').append('<tr><td>'+$('input[name="fname"]').val()+'</td><td>'+$('input[name="lname"]').val()+'</td><td>'+$('input[name="email"]').val()+'</td><td>'+$('input[name="phone"]').val()+'</td></tr>');

		return false; // don't submit the form
	});
}); // end of $(document).ready(function() {