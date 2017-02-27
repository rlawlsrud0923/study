$(function(){
   //문서가 준비되면

   $( ".projekt_article li" ).find("a").css("opacity","0");

   $( ".projekt_article li" ).hover(
     function() {
       $( ".projekt_article li a" ).css("opacity","1");
     }, function() {
       $( ".projekt_article li img" ).css("opacity","0.7");
     }
   );

  //  $( "li.fade" ).hover(function() {
  //    $( this ).fadeOut( 100 );
  //    $( this ).fadeIn( 500 );
  //  });

})
