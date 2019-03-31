var myVar;
function myFunction() {
  myVar = setTimeout(hideLoader, 1000);
}

function hideLoader() {
    $('#loading').hide();
}

$(document).ready( function() {
  setTimeout( function() {

    hideLoader();
    playVideo();
     ;}, 2500);




});


function playVideo() {
  var video = document.getElementById('video_landing');
  video.autoplay = true;
  video.load();
}
