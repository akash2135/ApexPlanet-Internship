const taskInput =
document.getElementById("taskInput");

const addBtn =
document.getElementById("addBtn");

const taskList =
document.getElementById("taskList");

const taskCount =
document.getElementById("taskCount");


let tasks =
JSON.parse(localStorage.getItem("tasks"))
|| [];

renderTasks();

addBtn.addEventListener("click", addTask);

taskInput.addEventListener(
"keypress",
function(e){

if(e.key==="Enter"){
addTask();
}

}
);

function addTask(){

const text =
taskInput.value.trim();

if(text==="") return;

tasks.push({
text:text,
completed:false
});

saveTasks();

taskInput.value="";

renderTasks();
}

function renderTasks(){

taskList.innerHTML="";

tasks.forEach(
(task,index)=>{

const li =
document.createElement("li");

li.classList.add("task");

if(task.completed){
li.classList.add("completed");
}

li.innerHTML=`

<span>${task.text}</span>

<div class="actions">

<button
class="complete-btn"
onclick="toggleTask(${index})">

<i class="fa-solid fa-check"></i>

</button>

<button
class="delete-btn"
onclick="deleteTask(${index})">

<i class="fa-solid fa-trash"></i>

</button>

</div>
`;

taskList.appendChild(li);

}
);

taskCount.textContent =
tasks.length;
}

function toggleTask(index){

tasks[index].completed =
!tasks[index].completed;

saveTasks();

renderTasks();
}

function deleteTask(index){

tasks.splice(index,1);

saveTasks();

renderTasks();
}

function saveTasks(){

localStorage.setItem(
"tasks",
JSON.stringify(tasks)
);

}