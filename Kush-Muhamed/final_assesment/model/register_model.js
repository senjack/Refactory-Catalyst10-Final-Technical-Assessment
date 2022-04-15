const mongoose = require('mongoose');

// Signup schema
const registerSchema = mongoose.Schema({
Surname: {
    type: String,
    required: true
  },
  
Givenname: {
    type: String,
    required: true
  },

NIN: {
    type: String,
    required: true
  },

Date: {
    type: String,
    required: true
  },

work: {
    type: String,
    required: true
  },
Gender:{
      type:String,
      required: true
  },

loanamount:{
    type:String,
    required: true
},
loansecurity:{
    type:String,
    required: true
},
fallback:{
    type:String,
    required: true
}

});

const Register = module.exports = mongoose.model('Register', registerSchema);