
    // html dom 이 다 로딩된 후 실행된다.
    $(document).ready(function(){

        // show_wrap 클래스 바로 하위에 있는 show_title를 클릭했을 때
        $(".show_wrap > .show_title").click(function(){
            // $(this).css('color', '#fcbe46');

            var show_desc = $(this).next(".show_desc");

            // show_desc 가 화면상에 보일때는 위로 접고 아니면 아래로 펼치기
            if( show_desc.is(":visible") ){
                show_desc.slideUp();
                $(this).css('color', '#FFF');
            }
            else{
                show_desc.slideDown();
                $(this).css('color', '#fcbe46');
            }
        });
    });
