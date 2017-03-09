$(function(){

  var idx = 0; //초기값

  function movement(start,end,i){
     $('.view li').eq(i).addClass('on').find('img').css({
         left:start,
         'display':'block'
     }).stop().animate({
         left:end
     }).parent().siblings().removeClass();


     if(idx == $('.view li').length){
         idx = 0
         movement('100%',0,idx)
     }else if(idx < 0){
         idx = $('.view li').length -1;
         movement('-100%',0,idx)
     }
  }

  $('.next').click(function(){
      console.log(idx)
      movement(0,'-100%',idx);
      idx++
      movement('100%',0,idx);
  })

   $('.prev').click(function(){
      movement(0,'100%',idx);
      idx--
      movement('-100%',0,idx);
   })


   $('.view li a').click(function(){
       var hinum = $('.view li.on').index();
       idx = $(this).parent().index()

       if(hinum < idx){
           movement(0,'-100%',hinum);
           movement('100%',0,idx);
       }else if(hinum > idx){
           movement(0,'100%',hinum);
           movement('-100%',0,idx);
       }

       return false;
   })


})
