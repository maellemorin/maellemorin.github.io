$(document).ready(function() {
    $('#fullpage').fullpage({
        navigation: true,
        controlArrows: false,
        slidesNavigation: true,
        normalScrollElements: '#gallery'
        });


      $(".iframe").colorbox({iframe:true, width:"80%", height:"80%", opacity: 0.85});
$("#graphic1").colorbox({width:"80%", height:"80%"});
        $(document).scroll(function () {
      console.log("hello");
       //$("#navbar").css("background-color", "rgba(45,58,88,0.5)");
      //  $("#navbar").css("position", "absolute")
    })
});
