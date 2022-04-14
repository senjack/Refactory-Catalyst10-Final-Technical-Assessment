
const mongoose = require('mongoose');

const loanFormSchema = mongoose.Schema({
 surname: {
    type: String,
    required: true,
  },
  givenname: {
    type: String,
    required: true,
  },
  nin: {
    type: String,
    required: true,
		unique:true,
  },
  birthdate: {
    type: String,
    required: true,
  },
	occupation: {
		type: String,
		required: true,
	},
	workplace: {
		type: String,
		required: true,
	},
	genderoption: {
		type: String,
		required: true,
	},
	loanamount: {
		type: Number,
    required: true,
	},
	loansecurity: {
		type: String,
		required: true,
	},
	fallbacksecurity: {
		type: String,
		required: true,
	},
}, {timestamps: true});

const Register =  module.exports = mongoose.model('Register', loanFormSchema);
