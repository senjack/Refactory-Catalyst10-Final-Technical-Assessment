const Loan = require("../models/Loan");
const router = require("../routes/loan");

const registerLoanRequest = async (req, res) => {
  try {
    const loanRequest = await Loan.create({ ...req.body });
    res.send("your data has been saved successfully");
    res.redirect("/success");
  } catch (error) {
    console.log(error);
    res.send("your data could not be saved");
  }
};

module.exports = { registerLoanRequest };
