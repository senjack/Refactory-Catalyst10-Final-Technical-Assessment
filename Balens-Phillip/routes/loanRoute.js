
const express = require('express');
const router = express.Router();
const expressValidator = require('express-validator');
router.use(expressValidator());


// requiring our model or schema of register
const Loan = require('../models/loanModel')

//accessing the mgtEntry page
router.get('/',(req, res)=>{
// we are rendering the register2 pug file
    res.render('loan')
});

// we are creating the route for the post method
router.post('/',(req,res)=>{
// declaration of variables that correspond to the names in the form.
const surname = req.body.surname
const givenname = req.body.givenname
const nin = req.body.nin
const dateofbirth = req.body.dateofbirth
const occupation = req.body.occupation
const placeofwork = req.body.placeofwork
const gender = req.body.gender
const loanamount = req.body.loanamount
const loansecurity = req.body.loansecurity
const fallbacksecurity = req.body.fullbacksecurity

// we are handling errors here
const errors = req.validationErrors()
if(errors){
res.render('loan')
}
else {
// we have a new variable assigning it 
    let newLoan = new Loan({
// value(property name from register schema):property(variable name)
        surname:surname,
        givenname:givenname,
        nin:nin,
        dateofbirth:dateofbirth,
        occupation:occupation,
        placeofwork:placeofwork,
        gender:gender,
        loanamount:loanamount,
        loansecurity:loansecurity,
        fallbacksecurity:fallbacksecurity,
    });
// saving our model to
   newLoan.save((err) => {
     if(err){
         console.error(err);
     return;
     }
     else {
        //we fisrt flash a message confirm the saving of a record
        //we stay @ the same form to register a new entity
        req.flash('success', 'You have successfully signed up')
        console.log('we have saved your data in the database')
        res.redirect('/loan')
     }
   })
}
})

//we exposing our route to any file that will require it.
module.exports = router