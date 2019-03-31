$(document).ready(function() {
var s = skrollr.init();
AOS.init( {
  disable: 'mobile'
});
if (s.isMobile()) {
    s.destroy();
}

//scrolling method for the arrow
$('body').on('click', '#arrow', function() {
     $('html, body').animate({scrollTop: $('#scrolling_page').offset().top }, 'slow');
     return false;
   });


//scrolling method to go to the work section
   $('body').on('click', '#work_nav', function() {
        $('html, body').animate({scrollTop: $('.work').offset().top }, 'slow');
        return false;
      });

      $('body').on('click', '#about_nav', function() {
           $('html, body').animate({scrollTop: $('#about').offset().top }, 'slow');
           return false;
         });

         $('body').on('click', '#contact_nav', function() {
              $('html, body').animate({scrollTop: $('#contact').offset().top }, 'slow');
              return false;
            });


      $('body').on('click', '#logo', function() {
           $('html, body').animate({scrollTop: $('#landingPage').offset().top }, 'slow');
           return false;
         });





});
