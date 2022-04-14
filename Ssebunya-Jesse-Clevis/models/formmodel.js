const mongoose = require('mongoose');
const formSchema = mongoose.Schema({
    surname:{
        type:String,
        required:true,
    },
    givenname:{
        type:String,
        required:true,
    },
    nationalidnumber:{
        type:String,
        required:true,
    },
    placeofwork:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        required:true,
    },
    loanamount:{
        type:Number,
        required:true,
    },
    loansecurity:{
        type:String,
        required:true,
    },
    fallbackamount:{
        type:Number,
        required:true,
    },
    
    
});
// we are exposing our schema to other files
const form  = (module.exports = mongoose.model(
    "form1",
     formSchema
  ));
  