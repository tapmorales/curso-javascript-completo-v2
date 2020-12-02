
import { Task } from './Model/Task.model.js'
import { createXMLHttpRequest } from './createXMLHttpRequest.js'
import TasksService from './Service/Tasks.service.js'
import TaskController from './Controller/Tasks.controller.js'
import TasksView from './View/Tasks.View.js'

// const url = "https://jsonplaceholder.typicode.com/users/1/todos/"
const urlUsers = "http://localhost:3000/users"
const urlTasks = "http://localhost:3000/tasks"

const userId = 2

const taskService = new TasksService()

const ul = document.getElementById("todo-list")

const tasksView = new TasksView(ul)

const taskController = new TaskController(taskService, tasksView)

const itemInput = document.getElementById("item-input")
const todoAddForm = document.getElementById("todo-add")

const lis = ul.getElementsByTagName("li")

// createXMLHttpRequest("GET", `${urlUsers}/${userId}/tasks`, init)
taskService.getTasks(userId, init)

todoAddForm.addEventListener("submit", function (e) {
    e.preventDefault()
    taskController.add(itemInput.value, userId)
    itemInput.value = ""
    itemInput.focus()
});

function init(arrInstancesTasks) {
    // a partir de um array de objetos literais, crie um array contendo instancias de Tasks. 
    // Essa array deve chamar arrInstancesTasks

    if (arrInstancesTasks.error) return

    tasksView.render(taskService.tasks)

    function clickedUl(e) {
        const dataAction = e.target.getAttribute("data-action")
        console.log(e.target)
        if (!dataAction) return

        let currentLi = e.target
        while (currentLi.nodeName !== "LI") {
            currentLi = currentLi.parentElement
        }
        const currentLiIndex = [...lis].indexOf(currentLi)

        const actions = {
            editButton: function () {
                const editContainer = currentLi.querySelector(".editContainer");

                [...ul.querySelectorAll(".editContainer")].forEach(container => {
                    container.removeAttribute("style")
                });

                editContainer.style.display = "flex";


            },
            deleteButton: function () {
                taskController.remove(currentLi.getAttribute("data-id"), userId)

            },
            containerEditButton: function () {
                const title = currentLi.querySelector(".editInput").value
                const id = currentLi.getAttribute("data-id")
                // arrInstancesTasks[currentLiIndex].setTitle(val)
                // renderTasks()
                taskController.update({ title, id }, userId)
            },
            containerCancelButton: function () {
                currentLi.querySelector(".editContainer").removeAttribute("style")
                currentLi.querySelector(".editInput").value = arrInstancesTasks[currentLiIndex].getTitle()
            },
            checkButton: function () {

                // DEVE USAR O MÉTODO toggleDone do objeto correto
                // arrInstancesTasks[currentLiIndex].toggleDone()
                // renderTasks()
                const id = currentLi.getAttribute("data-id")
                taskController.toggleDone(id, userId)
            }
        }

        if (actions[dataAction]) {
            actions[dataAction]()
        }
    }

    ul.addEventListener("click", clickedUl)
}



