var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

renderTodos();

function renderTodos() {
  // Clear todoList element and update todoCountSpan
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;

  // Render a new li for each todo
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute('data-index', i);
    todoList.appendChild(li);

    var completeBtn = document.createElement('button');
    completeBtn.textContent = "Complete";
    completeBtn.setAttribute('class', 'complete');
    li.appendChild(completeBtn);

    completeBtn.addEventListener('click', clicked);

  }
}

function clicked(event) {
  event.preventDefault();
  console.log(event.target.parentElement.getAttribute('data-index'));
  var index = event.target.parentElement.getAttribute('data-index');
  todos.splice(index,1);
  renderTodos();
}

// When form is submitted...
todoForm.addEventListener("submit", function (event) {
  event.preventDefault();

  var todoText = todoInput.value.trim();

  // Return from function early if submitted todoText is blank
  if (todoText === "") {
    return;
  }

  // Add new todoText to todos array, clear the input
  todos.push(todoText);
  todoInput.value = "";

  // Re-render the list
  renderTodos();
});

// var completeButton = document.getElementsByClassName('complete');
// completeButton.addEventListener('click',function(event){
//   event.preventDefault();
//   console.log(event);
// })
