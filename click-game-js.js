
var clickCount;
var startButton = document.getElementById("start");
//var startButtonClass = document.getElementsByClass("btn btn-success");
var imageElements = document.getElementById("image");
// var stopButton =document.getElementsByID("stop");


//Timer Variables
var secondsCount;
var timerInterval;
var randomTime;

function addSeconds () {    //Counter "addSeconds"
  secondsCount++;
}; //End of function


//Timer Button with Start and Stop
function timer (){
  if( this.getAttribute("data-state") === "start"){
    alert("Starting Timer NOW!");
  } else if (this.getAttribute("data-state") === "stop") {
    alert("Stopping Timer NOW")
  }; // End of if statement
}; // End of function


function counter (){
  clickCount++;
}; 


function clicker () {
  for (var i = 0; i < imageElements.length; i++) {
    clickCount++;
    alert("Clicked!");
 }
};


function gameStart () { 
alert("Start!");
};

// function gameStop (){


// };






//Add event Listener for start button
//startButton.addEventListener("click", timer);
startButton.addEventListener("click", gameStart);
//Add event listener for clicker
//imageElements.addEventListener("click", counter);
//
