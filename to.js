let taskList = document.getElementById('task-list');
let taskInput = document.getElementById('task-input');
let addTaskBtn = document.getElementById('add-task-btn');

let tasks = [];

addTaskBtn.addEventListener('click', addTask);

function addTask() {
    let task = taskInput.value.trim();
    if (task !== '') {
        tasks.push(task);
        taskInput.value = '';
        renderTasks();
    }
}

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        let taskElement = document.createElement('li');
        taskElement.className = 'task';
        taskElement.innerHTML = `
            ${task}
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(taskElement);
    });
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}