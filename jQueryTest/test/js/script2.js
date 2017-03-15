var idx = 0
var menu = {
    event:function(){
        //Hover Menu
        var over = function(){
            $(this).css('background', 'pink').children('a').css('color','#fff')
        }
        var out = function(){
            $(this).css('background', 'initial').children('a').css('color','initial')
        }
        // ScrollMove Menu
        var scrtop = function(){
            idx = $(this).index();
            var scroll = $('.content section').eq(idx).offset().top;
            $('html,body').stop().animate({
                'scrollTop':scroll
            })
        }

        $('nav li').on({
            'mouseenter':over,
            'mouseleave':out,
            'click':scrtop
        })
    }
}

var banner = {
    //슬라이드 배너
    slide:function(){

        //랜덤 이벤트
        idx = Math.floor(Math.random() * $('.slidebanner li').length);
        $('.slidebanner li').eq(idx).addClass('on').find('img').css({
            'display':'block'
        })
        //next
        var swidth = $('.slidebanner').width();
        var next = function(){
            $('.slidebanner li').eq(idx).find('img').animate({
                'left':-swidth
            }).parent().removeClass().next().addClass('on').find('img').css({
                'left':swidth,
                'display':'block'
            }).stop().animate({
                'left':0
            })
            idx++
            if(idx == $('.slidebanner li').length){
                idx = 0;
                $('.slidebanner li').eq(idx).addClass('on').find('img').css({
                    'left':swidth,
                    'display':'block'
                }).stop().animate({
                    'left':0
                })
            }
        }
        //prev
        var prev = function(){
            $('.slidebanner li').eq(idx).find('img').animate({
                'left':swidth
            }).parent().removeClass().prev().addClass('on').find('img').css({
                'left':-swidth,
                'display':'block'
            }).stop().animate({
                'left':0
            })
            idx--
            if(idx < 0){
                idx = $('.slidebanner li').length-1;
                $('.slidebanner li').eq(idx).addClass('on').find('img').css({
                    'left':-swidth,
                    'display':'block'
                }).stop().animate({
                    'left':0
                })
            }
        }
        //a클릭 이벤트
        var aclick = function(){
            idx = $(this).parent().index();
            var onidx = $('.slidebanner li.on').index();

            if(idx > onidx){
                //이미지 들어는부분
                $('.slidebanner li').eq(onidx).find('img').stop().animate({
                    'left':-swidth
                })
                //클릭한 이미지 나오는 부분
                $('.slidebanner li').eq(idx).addClass('on').find('img').css({
                    'left':swidth,
                    'display':'block'
                }).stop().animate({
                    'left':0
                }).parent().siblings().removeClass()
            }else if(idx < onidx){
                //이미지 들어는부분
                $('.slidebanner li').eq(onidx).find('img').stop().animate({
                    'left':swidth
                })
                //클릭한 이미지 나오는 부분
                $('.slidebanner li').eq(idx).addClass('on').find('img').css({
                    'left':-swidth,
                    'display':'block'
                }).stop().animate({
                    'left':0
                }).parent().siblings().removeClass()
            }
        }

        // 자동 슬라이드 이벤트
        var inter = setInterval(function(){
            $('.next').click();
        },4500)

        // 마우스 enter
        var over = function(){
            clearInterval(inter)
        }
        // 마우스 leave
        var out = function(){
            inter = setInterval(function(){
                $('.next').click();
            },4500)
        }


        $('.next').on('click',next)
        $('.prev').on('click',prev)
        $('.slidebanner li a').on('click',aclick)
        $('.slidebanner').on({
            'mouseenter':over,
            'mouseleave':out
        })
    },
    // fade 배너
    fade:function(){
        //a클릭 이벤트
        var over = function(){
            idx = $(this).parent().index();
            $('.fadebanner li').eq(idx).addClass('on').find('img').fadeIn().parent().siblings().removeClass().find('img').fadeOut()
        }
        //자동 이벤트
        var idx = 1;
        var inter = setInterval(function(){
            $('.fadebanner li').eq(idx).children('a').click();
            idx++
            if(idx == $('.fadebanner li').length){
                idx = 0
            }
        },4800)

        // 마우스 enter
        var enter = function(){
            clearInterval(inter)
        }
        // 마우스 leave
        var leave = function(){
            inter = setInterval(function(){
                $('.fadebanner li').eq(idx).children('a').click();
                idx++
                if(idx == $('.fadebanner li').length){
                    idx = 0
                }
            },4800)
        }


        $('.fadebanner li a').on('click',over)
        $('.fadebanner').on({
            'mouseenter':enter,
            'mouseleave':leave
        })
    }
}
// 영상 가져오기
var movie = {
    event:function(){
        var aclick = function(){
            idx = $(this).parent().index();
            var code = $(this).attr('href');
            var url = "https://www.youtube.com/embed/"+code+"?rel=0&amp;controls=0&amp;showinfo=0"
            // 영상 불러오기
            $('.view iframe').attr('src',url)
            //a click 이벤트
             $('.movie-view li').eq(idx).fadeTo('fast',0.5).siblings().fadeTo('fast',1)

            return false;
        }
        $('.movie-view li a').on('click',aclick)
    }
}

// 윙배너
var wing = {
    event:function(){
        var fly = function(){
            var winscroll = $(this).scrollTop();
            $('.wing').stop().animate({
                'top': winscroll
            },500)
        }
        $(window).on('scroll',fly)
    }
}

var popup = {
    event:function(){
        // 팝업 오픈
        var open = function(){
            bl()
            $('.blaind').fadeTo('slow',0.8)
            idx = $(this).index();
            var cl = '.'+$('.btnevent').eq(idx).attr('id');
            var w = $(cl).width();
            var h = $(cl).height();
            var wh = $(window).height();
            var wscroll = $(window).scrollTop();


            $(cl).show().css({
                'top': wscroll-h-10,
                'left':"50%",
                'marginLeft':-w/2,
                'opacity':0
            }).stop().animate({
                'top': wscroll+(wh/2)-(h/2),
                'opacity':1
            },500)
        }
        // 팝업 닫기
        var close = function(){
            cl = '.'+$('.btnevent').eq(idx).attr('id');
            h = $(cl).height();
            wscroll = $(window).scrollTop();
            $('.pop').stop().animate({
                'top': wscroll-h-10,
                'opacity':0
            },500)

            $('.blaind').fadeTo('slow',0,function(){
                $(this).remove();
            })
        }

        function bl(){
            $('body').prepend('<div class="blaind"></div>')
        }

        $('.btnevent').on('click',open)
        $('.close').on('click',close)
        $('body').on({
            'click':close
        },'.blaind')
    }
}


$(function(){
    menu.event();
    banner.slide();
    banner.fade();
    movie.event();
    wing.event();
    popup.event();
})
