const express = require("express")
const tasks = require('./data/tasks.json')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/tasks", (req, res) => {
    res.send(tasks)
})

app.post("/tasks", (req, res) => {
    console.log(req.body)
    const { title, userId } = req.body

    const newTask = {
        title,
        completed: false,
        createdAt: Date.now(),
        updatedAt: null,
        userId,
        id: tasks[tasks.length - 1].id + 1
    }

    tasks.push(newTask)
    res.send(newTask)
})

app.route("/tasks/:id")
    .get((req, res) => {
        res.send(tasks.filter(task => task.id === parseInt(req.params.id)))
    })
    .put((req, res) => {
        const { title, completed, createdAt, updatedAt, id, userId } = req.body
        const newTask = { title, completed, createdAt, updatedAt, id, userId }

        const taskIndex = tasks.findIndex(task => task.id === parseInt(req.params.id))
        tasks.splice(taskIndex, 1, newTask)

        res.send(newTask)

    })
    .patch((req, res) => {
        const { title, completed, userId } = req.body
        const taskById = tasks.filter(task => task.id === parseInt(req.params.id))[0]
        const taskIndex = tasks.findIndex(task => task.id === parseInt(req.params.id))

        const updatedAt = Date.now()

        const taskUpdated = { title, completed, userId, updatedAt }

        for (let prop in taskUpdated) {
            if (typeof taskUpdated[prop] === "undefined") delete taskUpdated[prop]
        }

        const newTask = { ...taskById, ...taskUpdated }
        tasks.splice(taskIndex, 1, newTask)
        res.send(newTask)
    })
    .delete((req, res) => {
        const taskIndex = tasks.findIndex(task => task.id === parseInt(req.params.id))

        const deletedTask = tasks.splice(taskIndex, 1)
        res.send(deletedTask)
    })





app.listen(3001)