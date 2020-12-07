function generateLiTask(obj) {

    const li = document.createElement("li")
    const p = document.createElement("p")
    const checkButton = document.createElement("button")
    const editButton = document.createElement("i")
    const deleteButton = document.createElement("i")

    li.className = "todo-item"
    li.setAttribute("data-id", obj.id)

    checkButton.className = "button-check"
    checkButton.innerHTML = `
        <i class="fas fa-check ${obj.completed ? "" : "displayNone"}" data-action="checkButton"></i>`
    checkButton.setAttribute("data-action", "checkButton")

    li.appendChild(checkButton)

    p.className = "task-name"
    p.textContent = obj.title
    li.appendChild(p)

    editButton.className = "fas fa-edit"
    editButton.setAttribute("data-action", "editButton")
    li.appendChild(editButton)


    const containerEdit = document.createElement("div")
    containerEdit.className = "editContainer"
    const inputEdit = document.createElement("input")
    inputEdit.setAttribute("type", "text")
    inputEdit.className = "editInput"
    inputEdit.value = obj.title

    containerEdit.appendChild(inputEdit)
    const containerEditButton = document.createElement("button")
    containerEditButton.className = "editButton"
    containerEditButton.textContent = "Edit"
    containerEditButton.setAttribute("data-action", "containerEditButton")
    containerEdit.appendChild(containerEditButton)
    const containerCancelButton = document.createElement("button")
    containerCancelButton.className = "cancelButton"
    containerCancelButton.textContent = "Cancel"
    containerCancelButton.setAttribute("data-action", "containerCancelButton")
    containerEdit.appendChild(containerCancelButton)

    li.appendChild(containerEdit)



    deleteButton.className = "fas fa-trash-alt"
    deleteButton.setAttribute("data-action", "deleteButton")
    li.appendChild(deleteButton)

    return li
}


export default class TasksView {
    constructor(container) {
        this.container = container
    }

    render(tasks) {
        this.container.innerHTML = ""
        tasks.forEach(taskObj => {
            this.container.appendChild(generateLiTask(taskObj))
        });
    }
}