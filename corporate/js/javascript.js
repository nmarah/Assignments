//icon in side
let valueDisplays = document.querySelectorAll(".num");
let interval = 5000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval/endValue);
    let counter = setInterval(function(){
        startValue += 1;
        valueDisplay.textContent = startValue;
        if(startValue == endValue){
            clearInterval(counter);
        }
    },duration);
    
});


//hidden & show navbar
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";    
      document.getElementById("navbar").style.background='#000';

  } else {
    document.getElementById("navbar").style.top = "-50px";
    document.getElementById("navbar").style.backgroundColor = "transparent";
    document.getElementById("navbar").style.opacity = "1";

   
  }

  prevScrollpos = currentScrollPos;
}

let btn = document.querySelector('.btn');
let clip = document.querySelector('.clip');
let back = document.querySelector('.close');
let video = document.querySelector('video');
btn.onclick = function(){
  btn.classList.add('active');
  clip.classList.add('active');
  video.play();
  video.currentTime=0;
}
back.onclick = function(){
  btn.classList.remove('active');
  clip.classList.remove('active');
  video.pause();
}

