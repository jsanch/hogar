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
