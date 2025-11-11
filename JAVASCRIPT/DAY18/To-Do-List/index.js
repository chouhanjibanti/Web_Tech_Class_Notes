const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const addButton = document.getElementById("add-btn");

addButton.addEventListener("click", addTask);
document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter your task...");
    return;
  }

  const task = {
    text: taskText,
    completed: false,
  };

  saveTaskToLocalStorage(task);
  taskInput.value = "";
  displayTask();
}

function saveTaskToLocalStorage(task) {
  let tasks = getTaskFromLocalStorage();
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function getTaskFromLocalStorage() {
  const tasks = localStorage.getItem("tasks");
  return tasks ? JSON.parse(tasks) : [];
}

function loadTasks() {
  displayTask();
}

function displayTask() {
  const tasks = getTaskFromLocalStorage();
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    if (task.completed) {
      li.classList.add("completed");
    }

    const span = document.createElement("span");
    span.textContent = task.text;
    span.addEventListener("click", () => toggleTaskCompletion(index));

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", () => deleteTask(index));

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}

function toggleTaskCompletion(index) {
  const tasks = getTaskFromLocalStorage();
  tasks[index].completed = !tasks[index].completed;
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTask();
}

function deleteTask(index) {
  let tasks = getTaskFromLocalStorage();
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTask();
}
