const express = require("express");
const router = express.Router();
const { registerLoanRequest } = require("../controllers/loan");

router.post("/register", registerLoanRequest);

//render routes
router.get("/register", (req, res) => {
  res.render("register");
});

//success route
router.get("/success", (req, res) => {
  res.render("success");
});

module.exports = router;
