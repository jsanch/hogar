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
         Signup Page
***************************/

$('.input-signup + #btn-call').click(function(){
  $(".thanks-cta").show();
  $(".newsletter-signup").show();
  $(".send-cta").hide();
});

$('#no-content').parent().css("padding-top", "0px")
/***************************
         Acertijos
***************************/

$('#show-ans').click(function(){
  $(".well.answer").show();
  $("#show-ans").hide();
});

/***************************
         Scroller
***************************/

$('.scroll-button').click(function() {
  $("html, body").animate({ scrollTop: 500 }, "slow");
  return false;
});

$(document).ready(function() {
  $('.test-popup-link').magnificPopup({type:'iframe'});
});


