const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs/dist/bcrypt');

const passport = require('passport');
const expressValidator = require('express-validator');
router.use(expressValidator());

//Requiring the schema of registration page
const Loan = require('../models/loanModel'); 

//Accessing the registration page
router.get('/',(req,res)=>{
    res.render('loanForm')
});

router.post('/',(req,res)=>{
    //declaration of variables that correspond to the names in the form.
    const surname = req.body.surname;
    const givenname = req.body.givenname;
    const nin = req.body.nin;
    const birthday = req.body.birthday;
    const job = req.body.job;
	const workplace = req.body.workplace;
	const gender = req.body.gender;
	const loanamount = req.body.loanamount;
	const loansecurity = req.body.loansecurity;
	const fallbacksecurity = req.body.fallbacksecurity;
        
    //Error handling.
    const errors = req.validationErrors();
    if(errors){
        //incase of an error display the form
        res.render('loanForm')
    }
    else{
        //New variable
        let newLoan = new Loan({
            //value(property name from schema):property(variable name targeting the required field)
            surname:surname,
            givenname:givenname,
            nin:nin,
            birthday:birthday,
			job:job,
			workplace:workplace,
			gender:gender,
			loanamount:loanamount,
			loansecurity:loansecurity,
			fallbacksecurity:fallbacksecurity
        });
        //Saving our model
		bcrypt.genSalt(10, function(err, salt){
			bcrypt.hash(newLoan.loansecurity, salt, function(err, hash){
			  if(err){
				console.error(err);
			  }
			  newLoan.loansecurity = hash;
		
			  newLoan.save(function(err){
				if(err) {
				  console.error(err);
				  return;
				} else {
				  req.flash('success', 'You are now registered and can log in');
				  res.redirect('/login');
				}
			  });
			});
		  })
		}
		});
		
		module.exports = router;
module.exports = router;