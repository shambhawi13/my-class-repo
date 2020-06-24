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
    todoList.appendChild(li);
  }
}

//todos add element
var addBtn = document.createElement('button');
todoForm.appendChild(addBtn);
addBtn.textContent = 'Add todos';

addBtn.addEventListener('click',function(event){
  event.preventDefault();
  var input = todoInput.value.trim();
  todos.push(input);
  console.log(todos);
  renderTodos();
});

