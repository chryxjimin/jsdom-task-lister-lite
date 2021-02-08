document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const taskForm = document.getElementById("create-task-form");
  const taskDescription = document.getElementById("new-task-description");
 
  
  const task = document.getElementById("tasks");

  taskForm.addEventListener("submit", createNewTask); 
});
  
  
  const createNewTask = evt => {
    evt.preventDefault();
    const taskDescription = document.getElementById("new-task-description");
    const newTask = document.createElement("li");
    newTask.innerText = taskDescription.value;

    appendNewTask(newTask);
    evt.target.reset();
};

const appendNewTask = task => {
  document.getElementById("tasks").appendChild(task)
};
