var eventType = document.querySelector("#event-type"); 
var mouseEventsEl = document.querySelector("#click-events");
var keyEventsEl = document.querySelector("#key-events");

eventType.addEventListener('change',function(event){
  event.preventDefault;
  toggleDisplay(event);
})

document.addEventListener('click',function(event){
  console.log(event.clientX,event.clientY,event.target.eventType,event.target.value);
});

document.addEventListener('keydown',function(event){
  console.log(event.clientX,event.clientY,event.target.value);
});


function toggleDisplay(event) {
  //console.log(event)
  var value = event.target.value;
  if(value === "keydown") {
    console.log('Keydown!!!!!! ',event);
    mouseEventsEl.classList.add("hide");
    keyEventsEl.classList.remove("hide");
  }
  else {
    console.log('Clicked!!!!!! ',event);
    mouseEventsEl.classList.remove("hide");
    keyEventsEl.classList.add("hide");
  }
}