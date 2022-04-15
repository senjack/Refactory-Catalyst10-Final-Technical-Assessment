const mongoose = require('mongoose');
const { stringify } = require('querystring');
const { alphanumeric } = require('validator/lib/alpha');
 
const registrationSchema = mongoose.schema({
surname:{
    type:String,
    required:true
},
givenname:{
    type:String,
    required:true
},
nin:{
    type:alphanumeric,
    required:true
},
dateofbirth:{
    type:Number,
    required:true
},
occupation:{
    type:String,
    required:true
},
placeofwork:{
    type:String,
    required:true
},
gender:{
    type:String,
    required:true
},
loanamount:{
    type:String,
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

const Registration = module.exports = mongoose.model('Registartion',registrationSchema) 