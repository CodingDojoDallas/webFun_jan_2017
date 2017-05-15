$(document).ready(function() { // jQuery bootstrap

	$('form').submit(function() {
		var contactCard = $(`<div id="card"><div class="front"><h4>${$('input[name="fname"]').val()} ${$('input[name="lname"]').val()}</h4><p>Click for description<p></div><div class="back"><p>${$('textarea').val()}</div></div></p>`);
		$('.contactCards').append(contactCard);

		contactCard.flip({
		  trigger: 'click'
		});

		return false; // don't submit the form
	});
}); // end of $(document).ready(function() {
