/***************************
        Landing Page
***************************/

$('#form-email.landingpage + .btn-large').click(function(){
  $(".well.thanks").show();
  $(".well.rec").hide();
});

/***************************
         Acertijos
***************************/

$('#show-ans').click(function(){
  $(".well.answer").show();
  $("#show-ans").hide();
});

$('.scroll-button').click(function ()
{ window.scrollBy(0,450);
	animateDuration(100);
})