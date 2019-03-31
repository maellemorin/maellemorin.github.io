$(document).ready(function(){
            var scroll_pos = 0;
              $(".element-nav").css('color', 'white');
                $("#logo").css('background-image', 'url("../../img/logo_white.png")');
            $(document).scroll(function() {
                scroll_pos = $(this).scrollTop();
                if(scroll_pos > window.innerHeight-30) {
                    $("#logo").css('background-image', 'url("../../img/logo.png")');
                  ;
                    $(".element-nav").css('color', 'black');
                } else {
                $("#logo").css('background-image', 'url("../../img/logo_white.png")');
                      $(".element-nav").css('color', 'white');
                }
            });
        });
