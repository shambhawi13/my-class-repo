var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

function render(){
    for (let i of todos) {
        let liEl = document.createElement('li');
        todoList.appendChild(liEl);
        liEl.textContent = i;
    }
}

function renderElement(element){
    let liEl = document.createElement('li');
        todoList.appendChild(liEl);
        liEl.textContent = element;
}

render();

renderElement("test");

