var sixImageDiv = document.getElementsByClassName('sixImageDiv');
var sixImageBlackDivInside = document.getElementsByClassName('sixImageBlackDivInside');
var instaBG = document.getElementsByClassName('instaBG');

// six image flexbox
// six image flexbox
// six image flexbox
for (var i = 0; i < sixImageDiv.length; i++) {
  sixImageDiv[i].addEventListener('mouseenter',(e)=>{
    e.target.childNodes[3].style.left = '0vw';
    e.target.childNodes[3].style.bottom = '0vw';
    setTimeout(function () {
      e.target.childNodes[3].style.opacity = '1';
    }, 200);
  });
  sixImageDiv[i].addEventListener('mouseleave',(e)=>{
    e.target.childNodes[3].style.left = '-15.793vw';
    e.target.childNodes[3].style.bottom = '-13.653vw';
    e.target.childNodes[3].style.opacity = '0';
  })
}


// cheap anim
// cheap anim
// cheap anim
function cheapAnim() {
  if(window.innerHeight / 100 * 60 > instaBG[0].getBoundingClientRect().top){
    instaBG[0].style.background = 'rgba(253,207,202,1)';
  }else{
    instaBG[0].style.background = 'rgba(249,242,242,1)';
  }
  // console.log(instaBG[0].getBoundingClientRect());
}



// windows events
window.addEventListener('scroll',()=>{
  cheapAnim();
})
