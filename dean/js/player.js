$( document ).ready( function() {

  var toggle=true;

  $( "#plus" ).click(function(){
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



  container = $('#player_wrap');
	cover = $('#fap-cover-replacement');
	play = $('#play');
	// pause = $('#pause');
	mute = $('#mute');
	// muted = $('#muted');
	// close = $('#close');
	song = new Audio('music/music.mp4a');
	duration = song.duration;

  play.on('click',function(e){
    e.preventDefault();
		song.play();

    $(this).replaceWith('<a class="button gradient" id="pause" href="" title=""></a>');
		container.addClass('containerLarge');
		cover.addClass('coverLarge');
		$('#close').fadeIn(300);
		$('#seek').attr('max',song.duration);
  });







});
