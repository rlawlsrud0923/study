
$(document).ready(function(){

  //fadebanner
  var fadeIdx = 0

  var hisfadeIdx = null
  var fadeheand = setInterval(fademotion,3800)

  $('.fadebanner').on({
    mouseenter:function(){
      clearInterval(fadeheand)
    },
    mouseleave:function(){
      fadeheand = setInterval(fademotion,3800)
    }
  })

  function fademotion(){
    $('.fadebanner ul li img').eq(fadeIdx).removeClass('on').fadeOut()
    fadeIdx ++
    $('.fadebanner ul li img').eq(fadeIdx).addClass('on').fadeIn()

    if(fadeIdx == $('.fadebanner ul li').length){
      fadeIdx=0
      $('.fadebanner ul li img').eq(fadeIdx).addClass('on').fadeIn().parent().siblings().removeClass('on')
    }
  };

});
