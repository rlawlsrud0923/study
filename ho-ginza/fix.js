$( document ).ready( function() { //준비되면 실행해

  var lnb_areaOffset = $( '.lnb_area' ).offset(); //lnb_area 위치값 알아내

  $( window ).scroll( function() { //스크롤 발생하면 함수를 실행시켜

    if ( $( document ).scrollTop() > lnb_areaOffset.top ) { //문서의 스크롤바 위치가 lnb_area의 수직 위치보다 아래일 경우

      $( '.lnb_area' ).addClass( 'fix' ); //lnb_area에 클래스 fix를 만들어 줘서 고정시켜주기

    }


    else { //그렇지 않을 경우

      $( '.lnb_area' ).removeClass( 'fix' ); // .fix를 제거해
    }

  });

} );
