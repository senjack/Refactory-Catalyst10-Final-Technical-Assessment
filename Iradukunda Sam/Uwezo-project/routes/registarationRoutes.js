const express = require('express');
// const passport = require('passport');
const router = express.Router();
const expressValidator = require('express-validator')

router.use(expressValidator());

//requiring my schema
const Registration = require('./models/RegistrationModel')
router.get('/register', (req, res) => {
	res.render('Registration')
});

router.post('/register',  { failureRedirect: '/register' }), (req, res) => {
	const surname = req.body.surname,
	const givenname = req.body.givenname,
	const nin = req.body.nin,
	const dateofbirth = req.body.dateofbirth,
	const occupation = req.body.occupation,
	const palceofwork = req.body.placeofwork,
	const gender = req.body.gemder,
	const loanamount = req.body.loanamount,
	const loansecurity = req.body.loansecurity,
	const fallbacksecurity = req.body.fallbacksecurity,
	if newRegistration 
	console.log("This is the debtor's data", req.body)
	req.session.user = req.user
	res.redirect('/Registration');
};



module.exports = router;