const express = require("express")

const router = express.Router()

const controller = require('./../controllers/tasks.controller')

router.get("/", controller.get)

router.post("/", controller.post)

router.route("/:id")
    .get(controller.getById)
    .put(controller.put)
    .patch(controller.patch)
    .delete(controller.delete)

module.exports = router