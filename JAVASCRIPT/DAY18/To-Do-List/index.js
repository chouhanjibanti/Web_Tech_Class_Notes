const taskInput =document.getElementById("task-input")
const taskList =document.getElementById("task-list")
const addButton =document.getElementById("add-btn")

function addTask(){
   const taskText =  taskInput.value.trim();// remove white spaces

   if(taskText === ""){
    alert("please Enter Your Task.....")
    return;
   }

   // crearte a task
   const task = {
     text :taskText,
     completed:false,
   }

   // save the task in the locakStorage
   saveTaskToLocalStorage(task);

   // clear input box after adding 
   taskInput.value = "";

   displayTask();
}

function saveTaskToLocalStorage(task){

    // first get existing task from the localStorage
   let tasks = getTaskFromLocalStorage();

   tasks.push(task);

   localStorage.setItem("tasks",JSON.stringify(tasks))
}


function getTaskFromLocalStorage(){

    return tasks ? JSON.parse(tasks) : [];
}


