$(document).ready(function(){
  $(".fadebanner button").css({"background-color":"rgba(0,0,0,0.7)","color":"#FFF"})

  //fadebanner btn mouseover
  $(".fadebanner ul li a,.fadebanner button")
  .mouseover(function() {
    $(this).css({"color":"rgba(0,0,0,0.7)","background-color":"rgba(252,237,35,0.9)"});
  })
  .mouseout(function() {
    $(".fadebanner ul li a").css("background-color","#FFF");
    $(".fadebanner button").css({"color":"#FFF","background-color":"rgba(0,0,0,0.7)"});
  });




  //kontakt btn
  $("#kontakt button:nth-child(1)")
  .css({"color":"#000","background":"#dbdbdb"});


  $("#kontakt button").not("#kontakt button:nth-child(1)")
  .mouseover(function () {
    $(this).css({"color":"#000","background-color":"#dbdbdb"});
  })
  .mouseout(function() {
    $("#kontakt button").css({"color":"#FFF","background-color":"#0c0c0c"});
  });

});
