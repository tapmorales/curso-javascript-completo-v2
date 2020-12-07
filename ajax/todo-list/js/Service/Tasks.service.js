import { createXMLHttpRequest } from './../createXMLHttpRequest.js'
import { createPromise } from './../createPromise.js'
import { Task } from './../Model/Task.model.js'
import { urlUsers, urlTasks } from './../config.js'

export default class TasksService {
    constructor() {
        this.tasks = []
    }

    add(task, cb, error, userId) {
        const fn = (_task) => {
            const { title, completed, createdAt, updatedAt } = _task
            this.getTasks(userId, cb)
        }
        createXMLHttpRequest("POST", `${urlUsers}/${userId}/tasks`, fn, error, JSON.stringify(task))
    }

    getTasks(userId, sucess, error) {
        const fn = (arrTasks) => {
            console.log(arrTasks)

            this.tasks = arrTasks.map(task => {
                const { title, completed, createdAt, updatedAt, id } = task
                return new Task(title, completed, createdAt, updatedAt, id)
            })

            if (typeof sucess === "function") sucess(this.tasks)
        }
        // createXMLHttpRequest("GET", `${urlUsers}/${userId}/tasks`, fn, error)
        createPromise("GET", `${urlUsers}/${userId}/tasks`, fn, error)
    }

    remove(id, cb, error, userId) {
        const fn = () => {
            this.getTasks(userId, cb)
        }
        createXMLHttpRequest("DELETE", `${urlTasks}/${id}`, fn, error)
    }

    update(task, cb, error, userId) {
        task.updatedAt = Date.now()
        const fn = () => {
            this.getTasks(userId, cb)
        }
        createXMLHttpRequest("PATCH", `${urlTasks}/${task.id}`, fn, error, JSON.stringify(task))
    }

    getById(id) {
        return this.tasks.find(task => parseInt(task.id) === id)
    }
}