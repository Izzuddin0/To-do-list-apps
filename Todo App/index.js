const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById("taskList")
const deleteButton = document.getElementById("button");

function addTask (){
    if (taskInput.value === '' ) {
        alert("You must write something")
    } else {
        let li = document.createElement("li")
        li.innerHTML = taskInput.value;
        taskList.appendChild(li);
    }
    
}
    

function clearTask(){
    taskList.innerText = "Add a task!"
}

