/*
//Hover Menu
$(function(){
  $('nav ul li').hover(function(){
      $(this).css('background','red');
      },function(){
      $(this).css('background','initial');
  })
})


//ScrollMove Menu
$(function(){
  $('nav ul li').click(function(){

    var idx = $(this).index();
    var idxtop =  $('.content section').eq(idx).offset().top;

    $('html,body').stop().animate({
      scrollTop:idxtop
  },500)
    return false;
  })
})


//Slide Banner
var idx = 0;
var slide = {
  event:function(){
    $('.slidebanner .next').click(function(){
      var wid = $('slidebanner').width()
      $('.slidebanner ul li').eq(idx)
      .find('img')
      .animate({
        'left':-wid
      },1000).perent().next().find('img').animate({
        'left':0
      },1000).css({
        'left':move,
        'display':'block'
      })
      idx++
    })
  }
}
/*






/*방법1

// //콜백
// sum(function(){ return 1})
//
// function sum(x){
//     console.log(x);
// }

// 익명함수
var over = function(){
  $(this).css('background','red');
}
var out = function(){
  $(this).css('background','initial');
}


var scrollEvent = function(){
  var idx = $(this).index();  // this(=li)의 index를 알아내
  //console.log($(this).index());
  var sot = $('.content section').eq(idx).offset().top; // ?번째 li의 top값을 가져와서
  //console.log(sot);
  $('html,body').stop().animate({
    scrollTop:sot //세로 스크롤 막대 위치에 놔
  },500)

  return false;
}

$(function(){
  $('nav li')
  .mouseenter(over)
  .mouseleave(out)
  // $('nav li').mouseover(over).mouseout(out)
  //mouseover와 mouseenter 차이점 http://api.jquery.com/mouseover/
  .click(scrollEvent)
})
*/


/*방법2

$(function(){

  $('nav li').hover(function(){
      //마우스오버
      $(this).css('background','red');
    },function(){
      //마우스아웃
      $(this).css('background','initial');
    })

  $('nav li').click(function(){
    var idx = $(this).index();
    var sot = $('.content section').eq(idx).offset().top;
    $('html,body').stop().animate({
        scrollTop:sot
    },500)

    return false;
    })
})
*/

//방법3
//A.Hover Menu
var navEvent ={ // mouseEvent fuction
    mouse:function(){
        var over = function(){
            $(this).css('background','red').children('a').css('color','#FFF');
        }
        var out = function(){
            $(this).css('background','initial').children('a').css('color','initial');
        }
        //B.ScrollMove Menu
        var scroll = function(){
            navEvent.idx = $(this).index();
            var sot = $('.content section').eq(navEvent.idx).offset().top;
            $('html,body').stop().animate({
                scrollTop:sot
            })
            return false;
        }

        $('nav li').on({
            mouseenter:over,
            mouseleave:out,
            click:scroll
        })
     }
}


//C.Slide Banner
/*

*/
var idx = 0 //초기값 설정 - 전역변수에 해주기
var slide = {
    Event:function(){
        $('.slidebanner .next').click(function(){
            //console.log('aa'); //클릭 적용 확인
            var move = $('.slidebanner').width()

            //$('.slidebanner ul li:first') //첫번째 li의
            $('.slidebanner ul li').eq(idx)
            .find('img') //img를
            .animate({ //animate는 무조건 객체형식으로 써야 함
              'left': -move //왼쪽으로 옮겨
            },1000).parent().next().find('img').animate({ //다음 이미지를
              'left': 0 //왼쪽으로 이동시켜
            },1000).css({
              'left':move,  //시작점 잡아줌.
              'display':'block' //다음 이미지 보이게 해줌
            })
            idx++
        })
    }
}

$(function(){
  //mouseEvent
  navEvent.mouse()
  slide.Event()
})


var idx = 0;
var slide = {
    event:function(){
        var wid = $('.slidebanner').width();
        var next = function(){
            $('.slidebanner ul li').eq(idx).find('img').animate({
                'left':-wid
            }).parent().removeClass().next().addClass('on').find('img').css({
                'left':wid,
                'display':'block'
            }).stop().animate({
                'left':0
            })
            idx++
            if(idx == $('.slidebanner ul li').length){
                idx = 0
                $('.slidebanner ul li').eq(idx).addClass('on').find('img').css({
                    'left':wid
                }).stop().animate({
                    'left':0
                })
            }
        }



$(function(){
    var fidx;
    $('.fadebanner li a').click(function(){

         idx = $(this).parent().index();
         $('.fadebanner li.on').removeClass().find('img').fadeOut(4500);
         $('.fadebanner li').eq(idx).addClass('on').find('img').fadeIn();

        return false

    })

//E. SNS Move List Gellary

  //방법1
  // $('.movie-view li a').click(function(){

  //     var movecode = $(this).attr('href');
  //     var url = "https://www.youtube.com/embed/"+movecode+"?rel=0&amp;controls=0&amp;showinfo=0"
  //     $('.movie-view iframe').attr('src',url)


  //     return false //link 끊기
  // })

  //방법2
//리스트의 이미지 클릭시 반투명 0.5 로 설정 방법1
  var tt = false;
  $('.movie-view li a').click(function(){

      var movecode = $(this).attr('href');
      var url = "https://www.youtube.com/embed/"+movecode+"?rel=0&amp;controls=0&amp;showinfo=0"
      //src속성바꿔주기

      $('.movie-view iframe').attr('src',url)

      if(!tt){
          $(this).fadeTo(500,0.5)
          tt = true
      }else if(tt){
          $(this).fadeTo(500,1)
          tt=false
      }

    return false
  })


/*리스트의 이미지 클릭시 반투명 0.5 로 설정 방법2

  $('.movie-view li a').click(function(){

      var movecode = $(this).attr('href');
      var url = "https://www.youtube.com/embed/"+movecode+"?rel=0&amp;controls=0&amp;showinfo=0"
      $('.movie-view iframe').attr('src',url)


      $(this).children('img').fadeTo(500,0.5).parent().slibings().children('img').fadeIn()



      return false
  })
*/

})
