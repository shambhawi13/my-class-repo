var statusSpan = document.querySelector("#status");
var statusToggle = document.querySelector("#status-toggle");
var playButton = document.querySelector("#play");
var pauseButton = document.querySelector("#pause");
var stopButton = document.querySelector("#stop");
var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
var workMinutesInput = document.querySelector("#work-minutes");
var restMinutesInput = document.querySelector("#rest-minutes");
var switchElement = document.getElementsByClassName("switch")[0];


var totalSeconds = 0;
var secondsElapsed = 0;
var interval;
var timer = "work";

function startTimer() {
  // Write code to start the timer here
  // minutesDisplay.textContent = workMinutesInput.value; 
  console.log(workMinutesInput.value);
  if(totalSeconds <= 0) {
    totalSeconds = workMinutesInput.value * 60;
  } 
  
   timer = setInterval(function(){
    totalSeconds--;
    var minutes = Math.floor(totalSeconds / 60);
    var seconds = Math.floor(totalSeconds % 60);
    minutesDisplay.textContent = minutes;
    secondsDisplay.textContent = seconds;
    if(totalSeconds === 0) {
     alert("Take a break!");
      clearInterval(timer);
    }

  }, 1000)
}

playButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
function pauseTimer() {
  clearInterval(timer);

}
 stopButton.addEventListener('click', stopTimer);
function stopTimer() {
  clearInterval(timer);
  totalSeconds = 0;
  minutesDisplay.textContent = workMinutesInput.value;
  secondsDisplay.textContent = "00";

}

 function toggleTimer(){
   if(timer === "work") {
     timer = "Rest";
     minutesDisplay.textContent = restMinutesInput.value;
     secondsDisplay.textContent = "00";
     totalSeconds = 0; 
   } else {
     timer = "work";
     minutesDisplay.textContent = workMinutesInput.value;
     secondsDisplay.textContent = "00";
     totalSeconds = 0; 
   } 
   statusSpan.textContent = timer;
    
 }

  statusToggle.addEventListener("change", toggleTimer);


