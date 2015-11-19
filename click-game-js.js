
var startButton = document.getElementById("start");

var imageElements = document.getElementsByTagName('img');

var clickCount = 0;           //Keeps score of clicks

//Timer Variables
var secondsCount = 20;        //Timer for Countdown

var timeElapsed =0;      

var gameOver = "Time is up!"; //Display this message when game is done


function countSeconds () {    
  secondsCount--;     //Counter "secondsCount"
 
}; //End of function


function clickCounter(){
  clickCount++;
  alert("Clicked!");
};

for (var i = 0; i < imageElements.length; i++) {
  imageElements.addEventListener("click", function(){
    clickCount++;
    alert("Clicked!");
  });
};  


/*
function gameStart () { 
  alert("Start!");

  //Timer Button with Start and Stop
  
    if(this.getAttribute("data-state") === "start"){
      alert("Starting Timer NOW!");
      this.innerHTML = "Stop";
      this.setAttribute("class", "btn btn-danger");
      this.setAttribute("data-state","stop");
      timerCountdown = setInterval( countSeconds,1000);                            //time with setInterval of 1000 to countdown

    } else if (this.getAttribute("data-state") === "stop") {
      alert("Stopping Timer NOW");
      this.innerHTML = "Start";
      this.setAttribute("class", "btn btn-success" );
      this.setAttribute("data-state","start");
    }; // End of if statement
};

// function gameStop (){


// };

*/



//Add event Listener for start button
//startButton.addEventListener("click", timer);

//startButton.addEventListener("click", gameStart);
//Add event listener for clicker

/*if (secondCount === 0){
    setTimeout (function () {alert("Time is up! You scored " + clickCount + "points!")}, 1000)
} */
