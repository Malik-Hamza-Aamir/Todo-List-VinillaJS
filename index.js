const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");
const taskList = document.getElementById("task-list");

addButton.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the form from submitting
  if (todoInput.value === "") return; // Do nothing if the input is empty
  
  // Create a new list item for the task
  const newTask = document.createElement("li");
  newTask.innerText = todoInput.value;
  newTask.classList.add("task");
  
  // Add a "complete" button to the task
  const completeButton = document.createElement("button");
  completeButton.innerText = "Complete";
  completeButton.classList.add("complete-button");
  newTask.appendChild(completeButton);
  
  // Add a "delete" button to the task
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.classList.add("delete-button");
  newTask.appendChild(deleteButton);
  
  // Add the task to the list
  taskList.appendChild(newTask);
  
  // Clear the input field
  todoInput.value = "";
});

taskList.addEventListener("click", function(event) {
  if (event.target.matches('.complete-button')) {
    event.target.parentElement.classList.toggle("completed");
  } else if (event.target.matches('.delete-button')) {
    event.target.parentElement.remove();
  }
});
