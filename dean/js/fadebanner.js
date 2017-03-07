$(document).ready(function(){
	//fadebanner
	// var fadeIdx = 0
	//
	// var hisfadeIdx = null
	// var fadeheand = setInterval(fademotion,3800)
	//
	// $('.twitter_txt').on({
	//   mouseenter:function(){
	//     clearInterval(fadeheand)
	//   },
	//   mouseleave:function(){
	//     fadeheand = setInterval(fademotion,3800)
	//   }
	// })
	//
	// function fademotion(){
	//   $('.twitter_txt ul li').eq(fadeIdx).removeClass('on').fadeOut()
	//   fadeIdx ++
	//   $('.twitter_txt ul li').eq(fadeIdx).addClass('on').fadeIn()
	//
	//   if(fadeIdx == $('.twitter_txt ul li').length){
	//     fadeIdx=0
	//     $('.twitter_txt ul li').eq(fadeIdx).addClass('on').fadeIn().parent().siblings().removeClass('on')
	//   }
	// }
	//

	var move = $('.twitter_txt').width()// 이동값
	var idx = 0; // 초기값

	$('.twitter_txt').load(function(){

		 $('.twitter_txt ul')
		 .eq(idx)//li 중에 idx 번째 해당하는 놈
		 .find('li')//의 자식한테
		 .animate({//움직임줘
				 left:-move//왼쪽으로 슬라이드 위드값 만큼 이동해
		 },10000)
		 .parent()//부모로 올라와
		 .next()//그다음놈
		 .find('li')//의 자식
		 .css({//한테  스타일줘
				 'display':'block', //눈에 보이게 하고
				 'left':move // 오른쪽 끝으로 이동해
		 })
		 .stop()
		 .animate({// 움직임줘
				 'left':0 // 눈에 보이는 0위치로 이동해
		 })

		 idx ++ // 그리고 idx 증가해 (다음 )

		 if(idx == $('.twitter_txt ul').length){
					idx = 0;
				 $('.twitter_txt ul').eq(idx).find('li').css({
						 'left':move
				 }).stop().animate({
						 'left':0
				 })
		 }


	});
});
