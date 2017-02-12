$(document).ready(function(){
  $(window).load(function(){
    $('.intro').animate({
     opacity:0},
    {duration: 3000
    });
  });
});

$(function (){
  $("#lnb_logo").click(function () { //lnb_logo 클릭하면
    $('html,body').animate({scrollTop: 0}, 'normal'); //스크롤 top값 0으로
    return false;
  });
});
