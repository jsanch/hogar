/***************************
        Landing Page
***************************/

$('#form-email.landingpage + .btn-large').click(function(){
  $(".thanks").show();
  $(".email-send").hide();
});

$('#form-email.landingpage + .btn-large').click(function(){
  $(".thanks").show();
  $(".email-send").hide();
});

/***************************
         Acertijos
***************************/

$('#show-ans').click(function(){
  $(".well.answer").show();
  $("#show-ans").hide();
});

$('.scroll-button').click(function() {
  $("html, body").animate({ scrollTop: 500 }, "slow");
  return false;
});