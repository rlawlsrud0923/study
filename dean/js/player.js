$( document ).ready( function() {

  //
  // $("#plus").click(function(){
  //   $("#player_wrap").animate({bottom: '-100px'},"fast", function(){
  //     $("#plus").click(function(){
  //       $("#player_wrap").animate({bottom: '-171px'},"fast")
  //     });
  //   },function(){
  //     $("#player_wrap").animate({bottom: '-171px'},"fast")
  //   });
  // });


// $( "#plus" ).unbind({
//   click: function() {
//     $( "#player_wrap" ).animate({bottom: '-100px'},"fast")
//   },
// });



$( "#plus").bind( "click", function( event ) {
  $( "#player_wrap" ).animate( {bottom: '-100px'},"fast");
});
$( "#plus").bind( "click", function( event ) {
  $( "#player_wrap" ).animate( {bottom: '-171px'},"fast");
});



});
