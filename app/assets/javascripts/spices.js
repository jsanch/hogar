/***************************
        Landing Page
***************************/

$('#form-email.landingpage + .btn-large').click(function(){
  $(".thanks").show();
  $(".email-send").hide();
});

$('.input-landing + #btn-call').click(function(){
  $(".thanks-cta").show();
  $(".send-cta").hide();
});

/***************************
         Acertijos
***************************/

$('#show-ans').click(function(){
  $(".well.answer").show();
  $("#show-ans").hide();
});
<<<<<<< HEAD
=======

/***************************
         Scroller
***************************/

$('.scroll-button').click(function() {
  $("html, body").animate({ scrollTop: 500 }, "slow");
  return false;
});
>>>>>>> website-redesign
