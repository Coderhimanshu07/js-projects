let taskList = document.getElementById("taskList");
let inputElement = document.getElementById("inputValue");

window.onload = loadTasks;

function addTask(){
    let task = inputElement.value;
    console.log(task)
    if(task === ""){
        window.alert("Please enter a task");
        return;
    }

    createTaskElement(task);
    saveTask(task);

    inputElement.value = "";
}

function createTaskElement(task){
    let li = document.createElement("li");
    li.textContent = task;

    // lets create a remove button 

    let R_btn = document.createElement("button")
    R_btn.textContent = "Remove";
    R_btn.className = "remove-btn";
    R_btn.onclick = function (){
        li.remove();
        removeTask("Task");
    };

    li.appendChild(R_btn);
    taskList.appendChild(li);
}

    function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  // Remove one task from localStorage
  function removeTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(t => t !== task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  // Remove all tasks
  function removeAllTasks() {
    taskList.innerHTML = "";
    localStorage.removeItem("tasks");
  }

  // Load saved tasks
  function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => createTaskElement(task));
  }

  // ✅ Add "Enter" key feature
  inputElement.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      addTask();
    }
     });
