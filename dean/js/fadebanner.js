$(document).ready(function(){
	//fadebanner
	var fadeIdx = 0

	var hisfadeIdx = null
	var fadeheand = setInterval(fademotion,3800)

	$('.twitter_txt').on({
	  mouseenter:function(){
	    clearInterval(fadeheand)
	  },
	  mouseleave:function(){
	    fadeheand = setInterval(fademotion,3800)
	  }
	})

	function fademotion(){
	  $('.twitter_txt ul li').eq(fadeIdx).removeClass('on').fadeOut()
	  fadeIdx ++
	  $('.twitter_txt ul li').eq(fadeIdx).addClass('on').fadeIn()

	  if(fadeIdx == $('.twitter_txt ul li').length){
	    fadeIdx=0
	    $('.twitter_txt ul li').eq(fadeIdx).addClass('on').fadeIn().parent().siblings().removeClass('on')
	  }
	}
});
