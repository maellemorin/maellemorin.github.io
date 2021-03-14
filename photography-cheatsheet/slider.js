

var sliderApertureField = document.getElementById('myAperture_field');
var sliderApertureBright = document.getElementById('myAperture_bright');
var sliderSpeedBright = document.getElementById('mySpeed_bright');
var sliderSpeedBlur = document.getElementById('mySpeed_blur');
var sliderIsoNoise = document.getElementById("myIso_noise");
var sliderIsoBright = document.getElementById("myIso_bright")

sliderApertureField.oninput=function() {changeAperture()};
sliderApertureBright.oninput=function() {changeAperture()};
sliderSpeedBright.oninput=function() {changeSpeed()};
sliderSpeedBlur.oninput=function(){changeBlur()};
sliderIsoNoise.oninput=function(){changeIsoNoise()};
sliderIsoBright.oninput=function(){changeIsoBright()};



$(window).scroll(function() {
  document.getElementById("instructions").style.visibility ="hidden";
  //
  // }, 500);
  //    hT = $('#aperture_images').offset().top,
  //     hH = $('#aperture_images').outerHeight(),
  //     wH = $(window).height(),
  //     wS = $(this).scrollTop();
  // if (wS > (hT+hH-wH)){
  //   document.getElementById("instructions").style.visibility ="hidden";
  // setTimeout(function() {
  //}
  // document.getElementById("test_1").style.opacity= "1";

  // setTimeout(function() {
  //   document.getElementById("test_1").style.visibility= "visible";
  // }, 1000);

  // clearTimeout(time);

  // var boxes = document.getElementByClassName("yellow_boxes1");
  // for(var i=0; i<boxes.length; i++ ) {
  //   boxes[i].style.visibility = "visible";
  //}
  // }
});


function changeAperture() {
  document.getElementById('aperture_background').style.filter = "blur(" + sliderApertureField.value + "px)" + "brightness(" + sliderApertureBright.value + "%)" ;
}

function changeSpeed() {
  document.getElementById('speed_background').style.filter =  "brightness(" + sliderSpeedBright.value + "%)" ;

}

function changeBlur() {
  var flowerImage = document.getElementById('flower');

  if(sliderSpeedBlur.value==1) {
    flowerImage.src = "image/flower_10.png";
  }

  if(sliderSpeedBlur.value==2) {
    flowerImage.src = "image/flower_1.png";
  }

  if(sliderSpeedBlur.value==3) {
    flowerImage.src = "image/flower_4.png";
  }

  if(sliderSpeedBlur.value==4) {
    flowerImage.src = "image/flower_15.png";
  }

  if(sliderSpeedBlur.value==5) {
    flowerImage.src = "image/flower_60.png";
  }

  if(sliderSpeedBlur.value==6) {
    flowerImage.src = "image/flower_125.png";
  }

  if(sliderSpeedBlur.value==7) {
    flowerImage.src = "image/flower_250.png";
  }

  if(sliderSpeedBlur.value==8) {
    flowerImage.src = "image/flower_500.png";
  }

  if(sliderSpeedBlur.value==9) {
    flowerImage.src = "image/flower_1000.png";
  }



}
function changeIsoNoise() {
  document.getElementById('noise_image').style.opacity = sliderIsoNoise.value;
}


function changeIsoBright() {
  document.getElementById('iso_background').style.filter = "brightness(" + sliderIsoBright.value + "%)" ;
}
