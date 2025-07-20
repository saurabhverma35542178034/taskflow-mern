const mongoose = require('mongoose');
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please enter your name'],
    },
     email: {
    type: String,
    required: [true, "Email is required"],
    unique: true
  },
  password: {
    type: String,
    required: [true, "Password is required"]
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user'
  }

},
{
  timestamps: true
});