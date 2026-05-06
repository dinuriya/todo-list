const taskList=document.getElementById('taskList');
const taskCount=document.getElementById('taskCount');

let tasks=[];

function addTask(){
const input=document.getElementById('taskInput');

if(input.value===''){
alert('Enter task');
return;
}

tasks.push({
text:input.value,
completed:false
});

input.value='';
renderTasks();
}

function renderTasks(filter='all'){
taskList.innerHTML='';

let filtered=tasks;

if(filter==='completed'){
filtered=tasks.filter(task=>task.completed);
}
else if(filter==='pending'){
filtered=tasks.filter(task=>!task.completed);
}

filtered.forEach((task,index)=>{
const li=document.createElement('li');

if(task.completed){
li.classList.add('completed');
}

li.innerHTML=`
<span onclick="toggleTask(${index})">${task.text}</span>
<button onclick="deleteTask(${index})">Delete</button>
`;

taskList.appendChild(li);
});

taskCount.innerText='Total Tasks: '+tasks.length;
}

function toggleTask(index){
tasks[index].completed=!tasks[index].completed;
renderTasks();
}

function deleteTask(index){
tasks.splice(index,1);
renderTasks();
}

function filterTasks(type){
renderTasks(type);
}
