var addBtn = document.querySelector("#add-btn");
var peopleListEl = document.querySelector("#people-list");
var nameEl = document.querySelector("#name");
var modalEl = document.querySelector("#modal-container");
var modalNameEl = document.querySelector("#modal-name");
var descriptionEl = document.querySelector("#description");
var closeEl = document.querySelector(".close");
var saveBtn = document.querySelector("#save");
var editBtn = document.getElementById("edit");

var people = [{ name: "Bob" }];
var currentId = 0;

function addPersonToList(event) {
  event.preventDefault();
  console.log(event);
  var name = nameEl.value;
  people.push({
    name: name
  });
  var li = document.createElement("li");
  li.id = people.length;
  li.innerHTML = name + " <button>edit</button>";
  people.push({ name: name });
  peopleListEl.append(li);
  console.log(li);
}

function close() {
  modalEl.style.display = "none";
}

function handleClick(event) {
  // Use event delegation to handle when the user clicks "edit"
  if(event.target.matches("button")){
    event.preventDefault();
    modalEl.style.display = "block";
    currentId = parseInt(event.target.parentElement.id);
    var name = people[currentId].name;
    var description = people[currentId].description;
    modalNameEl.textContent = name;
    if(description){
      descriptionEl.value = description;
    }
    else{
      descriptionEl.value = '';
    }
  }
  
}

function saveDescription(event){
  modalEl.style.display = "none";
}

closeEl.addEventListener("click", close);
addBtn.addEventListener("click", addPersonToList);
peopleListEl.addEventListener("click", handleClick);
saveBtn.addEventListener('click', saveDescription);


