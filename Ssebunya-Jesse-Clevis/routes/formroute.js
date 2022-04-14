const express = require('express');
const router = express.Router();
const passport = require('passport');
const expressValidator = require('express-validator');
router.use(expressValidator());


// requiring our model or schema of register
const form1 = require('../models/formmodel')

//accessing the mgtEntry page
router.get('/',(req, res)=>{
// we are rendering the register2 pug file
    res.render('form')
});
router.get('/form', async(req,res)=>{
    // to pick data from the 
    try {
        // helps return all .....
        const data = await formentries.find({}).sort({$natural:-1});
       
        res.render('form', {
          formentries : data, 
       
        })
      } catch(error) {
        return res.status(400).send(
          { 
            status: 400,
            message: 'Oops failed to fetch all registrations',
            error
          });
    }
});

// we are creating the route for the post method
router.post('/',(req,res)=>{
// declaration of variables that correspond to the names in the form.
const surname = req.body.surname
const givenname = req.body.givenname
const nationalidnumber = req.body.nationalidnumber
const placeofwork = req.body.placeofwork
const gender = req.body.gender
const loanamount = req.body.loanamount
const loansecurity = req.body.loansecurity
const fallbackamount = req.body.fallbackamount


// we are handling errors here
const errors = req.validationErrors()
if(errors){
res.render('form')
}
else {
// we have a new variable assigning it 
    let form1 = new form1({
// value(property name from register schema):property(variable name)
          surname: surname,
          givenname: givenname,
          nationalidnumber: nationalidnumber,
          placeofwork:placeofwork,
          gender:gender,
          loanamount: loanamount,
          loansecurity:loansecurity,
          fallbackamount:fallbackamount,  
    });
// saving our model to
   newform1.save((err) => {
     if(err){
         console.error(err);
     return;
     }
     else {
        //we fisrt flash a message confirm the saving of a record
        //we stay @ the same form to register a new entity
        req.flash('success', 'You have successfully signed up')
        console.log('we have saved your data in the database')
        res.redirect('/form')
     }
   })
}
})

//we exposing our route to any file that will require it.
module.exports = router