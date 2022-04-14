const mongoose = require("mongoose");

const loanSchema = new mongoose.Schema({
  surName: {
    type: String,
    required: true,
  },
  givenName: {
    type: String,
    required: true,
  },
  nin: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  work: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  loanAmount: {
    type: Number,
    required: true,
  },
  loanSecurity: {
    type: String,
    required: true,
  },
  fbSecurity: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Loan", loanSchema);
