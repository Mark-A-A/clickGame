
var clickCount;
var startButton = document.getElementById("start");
var imageElements = document.getElementById("image");
// var stopButton =document.getElementsByID("stop");

function counter (){
  clickCount++;
}; 



function clicker () {
  for (var i = 0; i < imageElements.length; i++) {
    clickCount++;
    alert("Clicked!");
 };
  
//};


function gameStart () {
  
  alert("Start!");
};

// function gameStop (){


// };






//Add event Listener for start button

//Add event listener for clicker
startButton.addEventListener("click", gameStart);
//imageElements.addEventListener("click", clicker);
//
