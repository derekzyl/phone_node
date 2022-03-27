const express = require('express')
const router = express.Router()
// const Newrouter = express.Router()


const todoController = require("../controller/todo_controller")

router
.route('/')
.post(todoController.postTodo)
.get(todoController.getTodo)

router.route('/:id').get(
  todoController.getSingleTodo)
  module.exports = router