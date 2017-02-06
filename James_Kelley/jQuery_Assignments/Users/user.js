 $(document).ready(function(){

     $('#btn').click(function(){
     	var firstname = $("input[name=First]").val();
     	var href ='';
     	href += '<tr>';
     // $('#first').submit();
     $('#first').append(href).append(firstname);
 });

     $('#btn').click(function(){
     	var lastname = $("input[name=Last]").val();
     	var href ='';
     	href += '<tr>';
     // $('#first').submit();
     $('#last').append(href).append(lastname);
 });

     $('#btn').click(function(){
     	var email = $("input[name=Email]").val();
     	var href ='';
     	href += '<tr>';
     // $('#first').submit();
     $('#email').append(href).append(email);
 });

     $('#btn').click(function(){
     	var num = $("input[name=Phone]").val();
     	var href ='';
     	href += '<tr>';
     // $('#first').submit();
     $('#num').append(href).append(num);
 });



 });
