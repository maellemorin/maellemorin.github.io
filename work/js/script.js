$(document).ready(function() {
var s = skrollr.init();

if (s.isMobile()) {
    s.destroy();
}

//scrolling method for the arrow
$('body').on('click', '#arrow', function() {
     $('html, body').animate({scrollTop: $('#info').offset().top }, 'slow');
     return false;
   });



});
