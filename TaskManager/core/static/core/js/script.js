function displayTaskMenu() {
    let taskInfo = document.querySelector(".task-info");

    if (taskInfo.className == "task_creation-field outline-secondary p-3 shadow task-info") {taskInfo.className = "task_creation-field outline-secondary p-3 shadow task-info w-75 d-none"} 
    else {taskInfo.className = "task_creation-field outline-secondary p-3 shadow task-info w-75"}    
};

function addElement(parent, elemType, className) {
    let child = document.createElement(elemType);
    parent.appendChild(child);
    child.className = className;
    return child
};

function markCompleted(task, className1, className2, newText) {
    task.className = className1;
    task.querySelector(".task-content").className = className2;
    task.querySelector(".completed-button").textContent = newText;
};

function createTask() {
    let taskInfo = document.querySelector(".task-info");
    let writtenText = taskInfo.querySelector(".text-input").value;
    taskInfo.querySelector(".text-input").value = "";

    // creating task div

    let newTask = addElement(document.querySelector(".task-list"), "div", "task d-flex p-4 mb-3 gap-4 shadow")

    let taskText = addElement(newTask, "div", "task-content");
    taskText.textContent = writtenText;

    let buttonContainer = addElement(newTask, "div", "d-flex f-direction-row gap-3");

    let completedButton = addElement(buttonContainer, "button", "completed-button btn btn-outline-primary btn-sm");
    completedButton.textContent = "Mark Completed";
    let removeButton = addElement(buttonContainer, "button", "btn btn-outline-danger btn-sm");
    removeButton.textContent = "Remove Task";

    // onclick events



    // draw a tree so u know the heirarchy of each class / element



    completedButton.onclick = function() {
        let task = this.parentElement.parentElement;
        let taskContent = task.querySelector(".task-content");
        if (taskContent.className == "task-content text-decoration-line-through text-danger") {
            markCompleted(task, "task d-flex p-4 gap-4 mb-3 shadow", "task-content", "Mark Completed");
        } else {
            markCompleted(task, "task d-flex p-4 gap-4 mb-3 shadow bg-light", "task-content text-decoration-line-through text-danger", "Mark Uncompleted");
        }
    }

    removeButton.onclick = function() {
        let task = this.parentElement.parentElement;
        task.remove();
    }

    if (document.querySelector(".recurring-btn").textContent == "Recurring") {
        //taskText.className = "task-content text-success"; // this part resets when marked completed and uncompleted.
                                                        // just have an icon to show that it repeats or smth.
                                                        // then as it removes all tasks at midnight, check
                                                        // which ones have recurring enabled
        setRecurring(new Date())
    };
};

function changeRecurring() {
    let recurringButton = document.querySelector(".recurring-btn");

    if (recurringButton.className == "btn btn-outline-secondary btn-sm recurring-btn") {
        recurringButton.className = "btn btn-success btn-sm recurring-btn";
        recurringButton.textContent = "Recurring";
    } else {
        recurringButton.className = "btn btn-outline-secondary btn-sm recurring-btn";
        recurringButton.textContent = "Not Recurring";
    }
}

function setRecurring(targetTime) {
    // resets at midnight?

    // add event listener and then loop through all tasks, setting the completed recurring ones to uncompleted

    dT = targetTime - new Date()
    setTimeout(alert, dT, "time's up!")
};
