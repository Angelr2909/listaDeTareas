// variables de datos
const dateNumber = document.getElementById('dateNumber');
const dateText = document.getElementById('dateText');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');

// contenedor de tareas 
const taskContainer = document.getElementById('taskContainer');

const setDate = () =>{
    const date = new Date();
    dateNumber.textContent = date.toLocaleDateString('es', {day: 'numeric'});
    dateText.textContent = date.toLocaleDateString('es', {weekday: 'long'});
    dateMonth.textContent = date.toLocaleDateString('es', {month: 'short'});
    dateYear.textContent = date.toLocaleDateString('es', {year: 'numeric'});
};

const addNewTask = event => {
    event.preventDefault();
    const { value } = event.target.taskText;
    if(!value) return;
    const task = document.createElement('div');
    task.classList.add('task', 'roundBorder');
    task.addEventListener('click', changeTaskState)
    task.textContent = value;
    taskContainer.prepend(task);
    event.target.reset();
};

const changeTaskState = event =>{
    event.target.classList.toggle('done');
}
const order = () =>{
    const done = [];
    const toDo = [];
    taskContainer.childNodes.forEach( elem => {
        elem.classList.contains('done') ? done.push(elem) : toDo.push(elem)
    })
    return [...toDo, ...done];
}

const renderOrderedTasks = () =>{
    order().forEach(elem => taskContainer.appendChild(elem))
}
setDate();
