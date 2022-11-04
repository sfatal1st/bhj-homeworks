const inputTask = document.querySelector(".tasks__input");
const tasksList = document.getElementsByClassName("tasks__list")[0];
const formSubmit = document.querySelector(".tasks__control"); 

function createTask() {
    let divTask = document.createElement("div");
    let divTitle = document.createElement("div");
    let taskRemove = document.createElement("a");

    divTask.classList.add("task");   
    divTitle.classList.add("task__title");
    divTitle.append(inputTask.value);    
    taskRemove.classList.add("task__remove");
    taskRemove.href = "#";
    taskRemove.append('x');
    divTask.appendChild(divTitle);
    divTask.appendChild(taskRemove);
    tasksList.appendChild(divTask);  
    taskRemove.addEventListener("click", () => {
        tasksList.removeChild(divTask);
    })
}

function addTask(event) {    
    if ((event.key === "Enter" ) && (inputTask.value)){   
        createTask();
        inputTask.value = "";                
    };
    event.preventDefault();
};

function buttonAddTask(event) {    
    if (inputTask.value) {   
        createTask();
        inputTask.value = "";                
    };
    event.preventDefault();
};

inputTask.addEventListener("keyup", addTask);

formSubmit.addEventListener("submit", buttonAddTask);