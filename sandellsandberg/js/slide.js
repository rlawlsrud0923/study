$(function(){

    var move = $('.fadebanner').width()// 이동값
    var idx = 0; // 초기값

    $('.next').click(function(){

       $('.fadebanner ul li')
       .eq(idx)//li 중에 idx 번째 해당하는 놈
       .find('img')//의 자식 img
       .animate({//움직임줘
           left:-move//왼쪽으로 슬라이드 위드값 만큼 이동해
       })
       .parent()//부모로 올라와
       .next()//그다음놈
       .find('img')//의 자식
       .css({//한테  스타일줘
           'display':'block', //눈에 보이게 하고
           'left':move // 오른쪽 끝으로 이동해
       })
       .stop()
       .animate({// 움직임줘
           'left':0 // 눈에 보이는 0위치로 이동해
       })

       idx ++ // 그리고 idx 증가해 (다음 )

       if(idx == $('.fadebanner ul li').length){
            idx = 0;
           $('.fadebanner ul li').eq(idx).find('img').css({
               'left':move
           }).stop().animate({
               'left':0
           })
       }




       //console.log($('.slide .view ul li').find('div').parent().next().html())
    })

    $('.prev').click(function(){

        $('.fadebanner ul li')// 슬라이드 안에 뷰 안에 유엘 안에 엘아이 선택해
        .eq(idx)//엘아이 중에 idx 번째 해당하는 놈
        .find('img')//의 자식 img
        .animate({//움직임줘
            left: move//왼쪽으로 슬라이드 위드값 만큼 이동해
        })
        .parent()//부모로 올라와
        .next()//그다음놈
        .find('img')//의 자식
        .css({//한테  스타일줘
            'display':'block', //눈에보이게하고
            'left': -move // 오른쪽 끝으로 이동해
        })
        .stop()
        .animate({// 움직임줘
            'left':0 // 눈에보이는 0위치로 이동해
        })

        idx ++ // 그리고 idx 증가해 (다음)

        if(idx == $('.fadebanner ul li').length){
             idx = 0;
            $('.fadebanner ul li').eq(idx).find('img').css({
                'left': -move
            }).stop().animate({
                'left':0
            })
        }



    })




})
