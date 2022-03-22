const Todo = require('../models/todo_schema')


exports.postTodo = async (req, res)=> {
  try {
    /* code */

    const todoSave = await Todo.create(req.body)
    console.log(todoSave)
    if (todoSave) {
      res.status(200).json({
        success: true,
        data: todoSave
      })
    }
  } catch (error) {
    res.status(404).json({
      erorr: error
    })
  }

}