const express = require("express")

const app = express()

app.use(express.static('./public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const tasksRoutes = require("./routes/tasks")

app.use("/tasks", tasksRoutes)

module.exports = app
