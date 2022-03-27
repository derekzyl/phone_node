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

exports.getTodo = async (req, res) => {
  try {
    const todoo = await Todo.find()
    if (todoo) {
      res.status(200).json({
        success: true,
        todo: todoo
      })
    }
  }catch(err) {
    res.status(404).json({
      success: false,
      error: err
    })
  }
}


exports.getSingleTodo = async(req, res)=> {
  const {
    id
  } = req.params
  try {
    const todoo = await Todo.findById(id)
    if (todoo) {
      res.status(200).json({
        success: true,
        todoo
      })
    }}catch(e) {
    res.status(400).json({
      success: true,
      error: e
    })
  }
  //
}