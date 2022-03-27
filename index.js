const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')

//local imports
const {
  Todos
} = require('./models/todo_schema')
const {
  Users
} = require('./models/user_schema')
const todoRoute = require('./routes/todo_route')

const app = express()
app.use(morgan('dev'))
app.use(bodyParser.json())

//routes
app.use('/api/todo', todoRoute)

//local server connect
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`listening to port ${port}`)})

//database
const db = 'mongodb+srv://derekzyl:derekzyl@cluster0.6kgd1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(db, {
  useNewUrlParser: true
}).then(()=>console.log('database is now connected'))
module.exports = app