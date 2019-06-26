var carContainer = document.getElementsByClassName('carContainer');
var headingTextInside = document.getElementsByClassName('headingTextInside');
var textBoxFixed = document.getElementsByClassName('textBoxFixed');
var rightArrow = document.getElementsByClassName('rightArrow');
var leftArrow = document.getElementsByClassName('leftArrow');
var sectionCar = document.getElementsByClassName('sectionCar');

// element jsx
var picNum  = 1;
var elem;
function setElem() {
elem = `
  <div class="rightCarBox">
    <img src="assets/images/slider/${picNum % 6}.jpg" alt="">
  </div>
  <div class="headingText">
    <div class="headingTextInside">
      <img src="assets/images/textImages/PopularPosts.png" alt="">
    </div>
  </div>
  <div class="leftTextBox">
    <div class="arrows">
      <img onclick="leftTest()" class="leftArrow" src="assets/images/leftArrow.jpg" alt="">
      <img onclick="rightTest()" class="rightArrow" src="assets/images/rightArrow.jpg" alt="">
    </div>
    <div class="button buttonCar">
      <p>Travel</p>
    </div>
    <p class="carDate">11/22/2018</p>
    <div class="textBoxFixed">
      <div class="textBox">
        <h2>A SUNNY DAY AT THE LOCAL <br> LAKE IN SAN MARINO </h2>
        <p class="carLorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
           ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com</p>
        <p class="pinkCyrus">By Cyrus Khamak</p>
      </div>
    </div>
  </div>
`
}
// element jsx

function carContainerShrink() {
  carContainer[1].style.width = '0%';
}

function initWidth() {
  headingTextInside[1].style.width = '47vw';
  textBoxFixed[1].style.width = '100%';
}

function setWidth() {
  headingTextInside[0].style.width = '47vw';
  textBoxFixed[0].style.width = '100%';
}

initWidth();


var checkArrow = 0;
function leftTest() {
  if (checkArrow === 0){
    picNum--;
    setDivs();
    carContainerShrink();
    setTimeout(function () {
      initWidth();
      setWidth()
      checkArrow = 0;
    }, 1500);
  }
  checkArrow = 1;
}

function rightTest() {
  if (checkArrow === 0){
    picNum++;
    setDivs();
    carContainerShrink();
    setTimeout(function () {
      initWidth();
      setWidth()
      checkArrow = 0;
    }, 1500);
  }
  checkArrow = 1;
}


function setDivs() {
  setElem();
  var newDiv = document.createElement('div');
  newDiv.className = 'carContainer';
  newDiv.innerHTML = elem;
  sectionCar[0].removeChild(sectionCar[0].children[1]);
  sectionCar[0].insertAdjacentElement('afterbegin',newDiv);

}



// listeners
rightArrow[0].addEventListener('click',()=>{
  if (checkArrow === 0) {
    rightTest();
  }

});

rightArrow[1].addEventListener('click',()=>{
  if (checkArrow === 0) {
    rightTest();
  }
})

leftArrow[0].addEventListener('click',()=>{
  console.log(123);
  if (checkArrow === 0) {
    leftTest();
  }

});

leftArrow[1].addEventListener('click',()=>{
  console.log(123);
  if (checkArrow === 0) {
    leftTest();
  }
});

rightTest();
setInterval(function () {
  if (checkArrow === 0) {
    rightTest();
  }
}, 6000);
