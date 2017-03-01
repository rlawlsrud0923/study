
// html dom 이 다 로딩된 후 실행
$(document).ready(function(){
    $(".show_title").first("dt").css('color','#fcbe46');

    // show_wrap 클래스 바로 하위에 있는 show_title를 클릭했을 때
    $(".show_title").click(function(){
        $(".show_title").first("dt").css('color','#FFF');

        var show_desc = $(this).next(".show_desc");

        // show_desc 가 화면상에 보일 때 위로 접기
        if( show_desc.is(":visible") )
        {
            $(".show_desc").slideUp();
            $(".show_title").css('color', '#FFF');
        }
        else{ // 아니면 아래로 펼치기
            show_desc.slideDown();
            $(this).css('color', '#fcbe46');
        }
    });
});
