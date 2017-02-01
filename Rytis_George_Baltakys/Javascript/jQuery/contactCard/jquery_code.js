$(document).ready(function() { // jQuery bootstrap

	$('form').submit(function() {
		var contactCard = '<div></div>';
		$('contactcards').append(contactCard);

		return false; // don't submit the form
	});
}); // end of $(document).ready(function() {