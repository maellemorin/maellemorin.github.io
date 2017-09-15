$(document).ready(function() {
    $('#fullpage').fullpage({
        navigation: true,
        controlArrows: false,
        slidesNavigation: true,
        normalScrollElements: '#gallery'
        });


// $("#graphic1").colorbox({width:"90%", height:"90%", opacity: 0.8, retinaImage:true, retinaUrl:true});
// $("#graphic2").colorbox({width:"90%", height:"90%", opacity: 0.8, retinaImage:true, retinaUrl:true});

$(".graphic").colorbox({width:"90%", height:"90%", opacity: 0.8, retinaImage:true, retinaUrl:true});
$(".prog").colorbox({width:"90%", height:"90%", opacity: 0.8, retinaImage:true, retinaUrl:true});

//disbale scrolling when colorbox is opened
$(document).on('cbox_open', function() {
  $.fn.fullpage.setAllowScrolling(false);
  $.fn.fullpage.setKeyboardScrolling(false);
});

//enable scrolling when colorbox is closed
$(document).on('cbox_closed', function() {
  $.fn.fullpage.setAllowScrolling(true);
  $.fn.fullpage.setKeyboardScrolling(true);
});

});
