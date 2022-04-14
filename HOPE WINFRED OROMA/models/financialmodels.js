// model refers to the database
// in the model folder we store schemas there 
// we are going to describe a schema
// a schema refers to the structure of a database

// first we require mongoose package coz it will help us define the schema
const mongoose = require ('mongoose');

// creating the schema for register file
const  registerschema = mongoose.Schema({
    surname:{
            type:String,
            required:true
      //the data that id coming in is a string and required     
 },
 givenname:{
       type:string,
       required:true,
       //the data that is coming in is a string and is required
 },
 occupation:{
       type:Number,
       required:true,
      // the data that is coming in is a string and required
    },
      gender:{
        type:Number,
        required:true,
       // the data that is coming in is a string and required
 },
 ninnumber:{
    type:Number,
    required:true,
   // the data that is coming in is a string and required
},
placeofwork:{
    type:Number,
    required:true,
   // the data that is coming in is a string and required
},
dateofbirth:{
    type:Number,
    required:true,
   // the data that is coming in is a string and required
},loanamount:{
    type:Number,
    required:true,
   // the data that is coming in is a string and required
},
loansecurity:{
    type:Number,
    required:true,
   // the data that is coming in is a string and required
},
fallbacksecurity:{
    type:Number,
    required:true,
   // the data that is coming in is a string and required
},
})
// we are exposing our schema to otherfiles 
const Register = module.exports =mongoose.model('Register', registerschema);