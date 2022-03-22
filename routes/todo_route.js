const express = require('express')
const router = express.Router()

const todoController = require("../controller/todo_controller")

router
.route('/')
.post(todoController.postTodo)
module.exports = router