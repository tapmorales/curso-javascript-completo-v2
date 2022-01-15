import { userId } from './../config.js'

export function Task(title, completed, createdAt, updatedAt, id) {
    if (!title) {
        throw new Error("Task need a required parameter: title")
    }

    this.title = title
    this.completed = completed || false
    this.createdAt = createdAt || Date.now()
    this.updatedAt = updatedAt || null
    this.toggleDone = function () {
        this.completed = !this.completed
    }
    this._id = id || null
    this.userId = userId
}