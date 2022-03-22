const mongoose = require('mongoose')
const Tod = new mongoose.Schema({
  text: {
    type: String,
    required: [true, 'please this is required'],
    minLength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
    },
    completedAt: {
      type: Number
    }
  }
)
  const Todo = mongoose.model('Todo', Tod)
  module.exports =Todo