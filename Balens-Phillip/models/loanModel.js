// first we require mongoose package becoz it will help us define the schema
const mongoose = require('mongoose')

//creating the schema for batteryHireEntry file.
const loanSchema = mongoose.Schema({
 surname:{
     type:String,
     required:true
// the data that is coming in, its a string and is required
 },
 givenname:{
   type:String,
   required:true,
//the data that is coming in, its a number and is required
},
 nin:{
  type:String,
  required:true,
//the data that is coming in, its a number and is required
},
 dateofbirth:{
  type:String,
  required:true,
//the data that is coming in, its a number and is required
},
occupation:{
 type:String,
 required:true,
//the data that is coming in, its a number and is required
},
placeofwork:{
 type:String,
 required:true,
//the data that is coming in, its a number and is required
},
gender:{
 type:String,
 required:true,
//the data that is coming in, its a number and is required
},
loanamount:{
 type:Number,
 required:true,
//the data that is coming in, its a number and is required
},
loansecurity:{
 type:String,
 required:true,
//the data that is coming in, its a number and is required
},
fallbacksecurity:{
 type:String,
 required:true,
//the data that is coming in, its a number and is required
}
})

// we are exposing our schema to other files
const Loan = module.exports = mongoose.model('Loan', loanSchema);