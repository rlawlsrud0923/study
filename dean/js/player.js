$( document ).ready( function() {

  var toggle=true;

  $( "#player_wrap" ).click(function(){
    // console.log(toggle);

    if( toggle == true) //보이게
    {
      $( "#player_wrap" ).animate( {bottom: '-100px'},"fast");
      toggle = false;
    }
    else { //안보이게
      $( "#player_wrap" ).animate( {bottom: '-171px'},"fast");
      toggle = true;
    }

  });


});
