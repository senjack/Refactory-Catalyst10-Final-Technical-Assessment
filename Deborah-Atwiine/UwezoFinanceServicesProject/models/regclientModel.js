const mongoose = require('mongoose')

//creating the schema
const registerSchema = mongoose.Schema({
 surname:{
     type:String,
     required:true
 },

 givenname:{
    type:String,
    required:true
},

nin:{
    type:String,
    required:true,
    unique:true
},

date:{
    type:String,
    required:true,
},

occupation:{
    type:String,
    required:true
},

pwork:{
    type:String,
    required:true
},

gender:{
    type:String,
    required:true
},

loan:{
    type:Number,
    required:true
},

lsecurity:{
    type:String,
    required:true
},

fsecurity:{
    type:String,
    required:true
},

});

// we are exposing our schema to other files
module.exports = mongoose.model('Register', registerSchema);