var incrementBtn = document.getElementById('increment');
var decrementBtn = document.getElementById('decrement');
var count = document.getElementById('count');
var counter = 0;

incrementBtn.addEventListener('click',function(){
    count.textContent = counter++;
});

decrementBtn.addEventListener('click',function(){
    count.textContent = counter--;
})