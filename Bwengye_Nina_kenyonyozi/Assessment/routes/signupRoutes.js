const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const expressValidator= require('express-validator');


// router.use(expressValidator());
// requring the schema of signup Signup variable singup model
const Signup = require('../models/Signup')

// handling routes of signup for get method to serve sign up view
router.get('/signup',(req,res)=>{
    res.render('signup')
});

// post from frontend using the dash route to backend 
router.post('/signup',(req,res)=>{
    // declaring the variables in the pug file name
    // we are requesting node js to foward the data and the body with the name given only uses name
    const surname = req.body.surname;
    const givenname = req.body.givenname;
    const nin = req.body.nin;
    const date = req.body.date;
    const occupation = req.body.occupation;
    const work = req.body.work;
    const gender = req.body.gender;
    const loanamount = req.body.loanamount;
    const loansecurity = req.body.loansecurity;
    const fallback = req.body.fallback;

    
    // handling errors
    // incase there is an error we serve back the form
    const errors = req.validationErrors;
    console.log();
    if (errors) {
        res.render('/signup')
    }
    else{
        // new variable asssigin it 
        // value(property name from schema):property(varible name in route)
        let newSignup = new Signup({
            surname:surname,
            givenname:givenname,
            nin:nin,
            date:date,
            occupation:occupation,
            work:work,
            gender:gender,
            loanamount:loanamount,
            loansecurity:loansecurity,
            fallback:fallback,
        });
        // saving the data
        // case of error return err incase no error give message in console and give dash 
        // controllers
        newSignup.save((err) =>{

            if(err){
                console.error(err);
                return;
            }
            else{
                // we first flash a message confirm save in data base
                // go to dashboard since user signed up
                console.log('data saved in database', );
                res.redirect('/signup')
            }
        })
    }
});
module.exports = router;