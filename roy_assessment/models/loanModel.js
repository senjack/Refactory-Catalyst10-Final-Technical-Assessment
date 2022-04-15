const mongoose = require('mongoose');

//creating a schema for loan form.
const loanSchema = mongoose.Schema({
    //describing the fields that were used to input data as in our pug file.
    surname:{
        type:String,
        required:true
        //Data is of type string and is required.
    },
    givenname:{
        type:String,
        required:true
    },
    nin:{
        type:String,
        required:true
    },
    birthday:{
        type:Date,
        required:true
    },
    job:{
        type:String,
        required:true
    },
    workplace:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    loanamount:{
        type:Number,
        required:true
    },
    loansecurity:{
        type:String,
        required:true
    },
    fallbacksecurity:{
        type:String,
        required:true
    }
    
})

//We are exposing our schema to other files
const Loan = module.exports = mongoose.model('Loan', loanSchema);