$(function(){
   //문서가 준비되면

   //li hover
   $( ".projekt_article li" ).hover(
     function() {
       $(this).find( "img" ).css("opacity","0.7");
       $(this).find( "h4" ).css("opacity","1");
     }, function() {
        $(this).find( "img" ).css("opacity","1");
        $(this).find( "h4" ).css("opacity","0");
     }
   );

   //li text opacity
   $( ".projekt_article li h4" ).hover(
     function() {
       $(this).css("opacity","0.7");
     }, function() {
       $(this).css("opacity","1");
     }
   );

})
