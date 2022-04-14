const mongoose = require('mongoose');
const signupSchema = mongoose.Schema({
    surname:{
        type: String,
        required:true
    },
    givenname:{
        type: String,
        required:true
    },
    nin:{
        type: String,
        required:true
    },
    date:{
        type: String,
        required:true
    },
    occupation:{
        type: String,
        required:true
    },
    work:{
        type: String,
        required:true
    },
    gender:{
        type: String,
        required:true
    },
    loanamount:{
        type: Number,
        required:true
    },
    loansecurity:{
        type: String,
        required:true
    },
    fallback:{
        type: String,
        required:true
    },
});

// exporting the schema 
const Signup = module.exports = mongoose.model('Signup', signupSchema);