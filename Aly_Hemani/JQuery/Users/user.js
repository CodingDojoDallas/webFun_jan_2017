$(document).ready(function(){

	$("form").submit(function(){
		var first_name = $('#first').val()
		var last_name = $('#last').val()
		var email = $('#email').val()
		var phone = $('#phone').val()
		console.log(first_name, last_name, email, phone);
		var html_str = '';
		html_str += '<table>';
		html_str += '<tbody>';
		html_str += '<tr>';
		html_str += '<td>';
		html_str += first_name;
		html_str += '</td>';
		html_str += '<td>';
		html_str += last_name;
		html_str += '</td>';
		html_str += '<td>';
		html_str += email;
		html_str += '</td>';
		html_str += '<td>';
		html_str += phone;
		html_str += '</td>';
		html_str += '</tr>';
		html_str += '</tbody>';
		html_str += '</table>';
		$("#formdata").append(html_str);
		return false;
	});

})