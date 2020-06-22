var poem = "Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";

var poemArr = poem.split('.');

function prepareRead() {
  // Create the countdown timer.
  var counter = 5;
  var h4El = document.getElementById('h4Tag');
  var pEl = document.getElementById('pTag');

  var interval = setInterval(function(){ 
    counter--;
    console.log(counter,h4El);
    var index = counter-1;
    h4El.textContent  = 'Timer : ' + counter;
    pEl.textContent = poemArr[index];
    if(counter === 0) clearInterval(interval);
   }, 1000);
}

prepareRead();

function speedRead() {
  // Print words to the screen one at a time.
}
