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

	var idx = 0; //초기값

 	// auto slide
 // 	var inters = setInterval(function(){
 // 		 $('.twitter_txt').trigger('click')
 // 	},3000);




	 function movement(start,end,i){
			$('.view li').eq(i).addClass('on').find('div').css({
					left:start,
					'display':'block'
			}).stop().animate({
					left:end
			}).parent().siblings().removeClass();
				// 선택된 요소(부모,형제요소)의 클래스 이름을 제거해.


			if(idx == $('.view li').length){
					idx = 0
					movement('100%',0,idx)
			}else if(idx < 0){
					idx = $('.view li').length -1;
					movement('-100%',0,idx)
			}
	 }






});
