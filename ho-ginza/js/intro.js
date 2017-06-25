$(document).ready(function(){

  //intro
  $(window).load(function(){
    $('.intro').animate({
     opacity: 0
   }, {
      duration: 3000,
      complete: function(){
      $('.intro').css("display", "none");
      }
    });
  });

  //logo 클릭 - 맨위로
  $("#lnb_logo").click(function () { //lnb_logo 클릭하면
    $('html,body').animate({scrollTop: 0}, 'normal'); //스크롤 top값 0으로
    return false;
  });

  //icon_scroll 클릭 - 맨아래로
  $("#icon_scroll").click(function () { //lnb_logo 클릭하면
    $('html,body').animate({scrollTop: $('body').height()}, 'normal'); //스크롤 top값 0으로
    return false;
  });




});
