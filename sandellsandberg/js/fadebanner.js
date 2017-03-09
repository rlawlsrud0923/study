
$(document).ready(function(){

  //fadebanner
  var fadeIdx = 0

  var hisfadeIdx = null
  var fadeheand = setInterval(fademotion,3800)

  $('.fadebanner').on({
    mouseenter:function(){
      clearInterval(fadeheand)
      $('.fadebanner button,.fadebanner li a').css('display','block')//마우스enter일 경우 버튼 보이게
    },
    mouseleave:function(){
      fadeheand = setInterval(fademotion,3800)
      $('.fadebanner button,.fadebanner li a').css('display','none')//마우스enter일 경우 버튼 숨기기
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
