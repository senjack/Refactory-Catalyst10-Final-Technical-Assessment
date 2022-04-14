const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
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
  },
  dob: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  pow: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
  security: {
    type: String,
    required: true,
  },
  fallback: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Registration', registrationSchema);