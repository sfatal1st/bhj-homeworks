const inputTask = document.querySelector(".tasks__input");
const tasksList = document.getElementsByClassName("tasks__list")[0];

function addTask() {    
    if ((event.key === "Enter") && (inputTask.value)) {   
        let divTask = document.createElement("div");
        divTask.classList.add("task");
        let divTitle = document.createElement("div");
        divTitle.classList.add("task__title");
        divTitle.append(inputTask.value);
        let taskRemove = document.createElement("a");
        taskRemove.classList.add("task__remove");
        taskRemove.href = "#";
        taskRemove.append('x');
        divTask.appendChild(divTitle);
        divTask.appendChild(taskRemove);
        tasksList.appendChild(divTask);  
        taskRemove.addEventListener("click", () => {
            tasksList.removeChild(divTask);
            event.preventDefault();
        })
        inputTask.value = "";
    }; 
    event.preventDefault();
};

inputTask.addEventListener("keyup", addTask);
