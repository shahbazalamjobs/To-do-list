
// Set up event listeners for "Add" button
document.querySelector('#push').onclick = function () {
    // Check if input field is empty
    if (document.querySelector('#newtask input').value.length == 0) {
        alert("Please Enter a Task");
    }

    else {
        // Add a new task to the tasks container
        document.querySelector('#tasks').innerHTML +=
            `
        <div class = task>
            <span id="taskname">
                ${document.querySelector('#newtask input').value}
            </span>
            <button class="delete">
                <i class="fa-solid fa-trash-can"></i>
            </button>
        </div>

        `;
    }

    // Deleting a task
    let current_tasks = document.querySelectorAll(".delete");
    for (let i = 0; i < current_tasks.length; i++) {
        current_tasks[i].onclick = function () {
            // Remove parent task when delete button is clicked
            this.parentNode.remove();
        }
    }

    // Toggle completed status when clicking a task
    let taskList = document.querySelectorAll(".task")
    for(var i=0; i<taskList.length; i++) {
        taskList[i].onclick = function(){
            this.classList.toggle("completed");
        }
    }

    // Clearing an input field when completed a task
    document.querySelector("#newtask input").value = "";

}