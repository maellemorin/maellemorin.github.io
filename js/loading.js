
function hideLoader() {
    $('#loading').hide();
}

$(window).on('load', function() {
  // setTimeout( function() {

    hideLoader();
    playVideo();
     // ;}, 1000);




});


function playVideo() {
  var video = document.getElementById('video_landing');
  video.autoplay = true;
  video.load();
}
