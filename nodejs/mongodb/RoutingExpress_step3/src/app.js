const express = require("express")

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const tasksRoutes = require("./routes/tasks")

app.get("/", (req, res) => {
    res.status(200).send({ "message": "API works !" })
})

app.use("/tasks", tasksRoutes)

module.exports = app
