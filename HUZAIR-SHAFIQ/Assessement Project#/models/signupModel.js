// first we require mongoose package becoz it will help us define the schema
const mongoose = require('mongoose')

//creating the schema for batteryHireEntry file.
const signupSchema = mongoose.Schema({
  username:{
    type:String,
    required:true,
    unique:true
  },
  firstname:{
    type:String,
    required:true,
  },
  lastname:{
    type:String,
    required:true,
  },
   email:{
    type:String,
    required:true,
    unique:true,
  },
  gender:{
    type:String,
    required:true,
 },
 phonenumber:{
  type:String,
  required:true,
},
   password:{
    type:String,
    required:true,
  },
  confirmpassword:{
    type:String,
    required:true,
  },
 
})

// we are exposing our schema to other files
const Signup = module.exports = mongoose.model('signup', signupSchema);