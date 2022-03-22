const mongoose = require('mongoose')
const User = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'please this is required'],
    minLength: 1,
    trim: true
  },
  password: {
    type: String,
    //required: [true, 'insert password']
  },

}
)
const Users = mongoose.model('User', User)
module.exports = {
  Users
}