var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function (event) {
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']");
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    console.log(taskTypeInput);

    var taskNameInput = document.querySelector("input[name='task-name']").value;
    console.log(taskNameInput);

    // create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    // create div

    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";

    
    taskInfoEl.innerHTML = "<h3 class-'task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";

    listItemEl.appendChild(taskInfoEl);

    // listItemEl.textContent = taskNameInput;
    tasksToDoEl.appendChild(listItemEl);

    console.dir(listItemEl);
}
formEl.addEventListener("submit", createTaskHandler);

