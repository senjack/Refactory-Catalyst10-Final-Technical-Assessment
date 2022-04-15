const mongoose = require("mongoose");

const registerSchema = mongoose.Schema({
  surName: {
    type: String,
    trim: true,
  },
  givenName: {
    type: String,
    trim: true,
  },
  nin: {
    type: String,
    trim: true,
  },
  dateOfBirth: {
    type:String,
    trim: true,
  },
  occupation: {
    type: String,
    trim: true,
  },
  placeOfWork: {
    type: String,
    trim: true,
  },
  gender: {
    type: String,
    trim: true,
  },
  loanAmount: {
    type: Number,
    trim: true,
  },
  loanSecurity: {
    type: String,
    trim: true,
  },
  fallBackSecurity: {
    type: String,
    trim: true,
  },
});

const Client = module.exports = mongoose.model('Client', registerSchema);

