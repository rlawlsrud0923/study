$(function(){
   //문서가 준비되면

  //  $( ".projekt_article li" ).find("h4").css("opacity","0");

   $( ".projekt_article li" ).hover(
     function() {
       $(this).find( "img" ).css("opacity","0.7");
       $(this).find( "h4" ).css("opacity","1");
     }, function() {
        $(this).find( "img" ).css("opacity","1");
        $(this).find( "h4" ).css("opacity","0");
     }
   );

   $( ".projekt_article li a h4" ).hover(
     function() {
       $(this).css("opacity","0.7");
     }, function() {
       $(this).css("opacity","1");
     }
   );

  //  $( "li.fade" ).hover(function() {
  //    $( this ).fadeOut( 100 );
  //    $( this ).fadeIn( 500 );
  //  });

})
