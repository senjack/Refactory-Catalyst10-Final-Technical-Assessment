const mongoose = require('mongoose');
const formSchema = mongoose.Schema({
    surname: {
        type: String,
        required: true
    },
    givenname: {
        type: String,
        required: true
    },
    nin: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    occupation: {
        type: String,
        required: true
    },
    work: {
        type: String,
        required: true
    },
    gender: {
        type:String,
        required:true
    },
    loan: {
        type: Number,
        required:true
    },
    security:{
        type:String,
        required:true
    },
    fallback: {
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Form', formSchema);