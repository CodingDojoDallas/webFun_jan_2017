$(document).ready(function(){
// this is hiding the player select lists
$("select").hide();
//this is changing the background when
//clicking on a button
  $("button[name='beach']").click(function() {
     $('body').css('background', 'url("images/Beach.jpg")').css('background-size','cover');
    });
  $("button[name='dojo']").click(function() {
     $('body').css('background', 'url("images/dojo.jpg")').css('background-size','cover');
    });
  $("button[name='volcano']").click(function() {
     $('body').css('background', 'url("images/volcano.jpg")').css('background-size','cover');
    });
  $("button[name='uwLair']").click(function() {
     $('body').css('background', 'url("images/uwLair.jpg")').css('background-size','cover');
    });

//this is the click to next phase
$("a").click(function(){
    $(this).hide();
    $('h1').html('Select Player');
    $('button').hide();
    $('select').show();
    });

// this is where we select
// which player we want on the left
$('select[name=left]').change(function() {
   if ($(this).val() == 'ninja') {
     console.log('working');
      $('#leftPanel').html('<img src="images/ninja.png">');
       }
   else if ($(this).val() == 'samurai') {
      $('#leftPanel').html('<img src="images/samurai.jpg">');
       }
   else if ($(this).val() == 'bob') {
      $('#leftPanel').html('<img src="images/bob.jpg">');
      $('#leftPanel img').css('height', '400px').css('margin-left','300px').css('margin-top','100px')
       }
});
// this is where we select
// which player we want on the right
$('select[name=right]').change(function() {
   if ($(this).val() == 'ninja') {
      $('#rightPanel').html('<img src="images/ninja.png">');
       }
   else if ($(this).val() == 'samurai') {
      $('#rightPanel').html('<img src="images/samurai.jpg">');
       }
   else if ($(this).val() == 'steve') {
    $('#rightPanel').html('<img src="images/steve.png">');
     }
});

})
