$( document ).ready( function() { //준비되면 실행해

  var gnb_wrapOffset = $( '.gnb_wrap' ).offset(); //gnb_wrap 위치값 알아내

  $( window ).scroll( function() { //스크롤 발생하면 함수를 실행시켜

    if ( $( document ).scrollTop() > gnb_wrapOffset.top ) { //문서의 스크롤바 위치가 gnb_wrap의 수직 위치보다 아래일 경우

      $( '.gnb_wrap' ).addClass( 'fix' ); //gnb_wrap에 클래스 fix를 만들어 줘서 고정시켜주기

    }

    else { //그렇지 않을 경우

      $( '.gnb_wrap' ).removeClass( 'fix' ); // .fix를 제거해
    }

  });

} );
