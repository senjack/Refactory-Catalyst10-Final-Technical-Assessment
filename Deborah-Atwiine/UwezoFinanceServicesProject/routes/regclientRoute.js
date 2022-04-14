const express = require('express');
const router = express.Router();
const expressValidator = require('express-validator');
router.use(expressValidator());
const mongoose = require('mongoose');


//requiring the model so that it can be used
const Register = require('../models/regclientModel');


//route for accessing/viewing the signup page
router.get('/register', (req, res) => {
    res.render('regClient')
});

// route for the post method
router.post('/register', (req, res) => {
    //declare variables that correspond to the names of the different input fields in the form
    const surname = req.body.surname
    const givenname = req.body.givenname
    const nin = req.body.nin
    const date = req.body.date
    const occupation = req.body.occupation
    const pwork = req.body.pwork
    const gender = req.body.gender
    const loan = req.body.loan
    const lsecurity = req.body.lsecurity
    const fsecurity = req.body.fsecurity


    //Handling errors
    const errors = req.validationErrors()
    if (errors){
        //in case of an error, remain on signup
        res.render('regClient')
    }
    else {
        let newRegister = new Register({
//value(as used in the schema): property(as used in the form as the name of the input type)
            surname : surname,
            givenname : givenname,
            nin : nin,
            date : date,
            occupation : occupation,
            pwork : pwork,
            gender : gender,
            loan : loan,
            lsecurity : lsecurity,
            fsecurity : fsecurity 
        });
        
    

        //saving the model
        newRegister.save( (err)=> {
            if (err) {
                console.error(err)
                return; 
            }
            else {
                //since this is a register page, it should redirect you to the login page
                req.flash('success', 'You have successfully signed up')
                console.log('You have saved your data to the database')
                res.redirect('/register')
            }
        })
    
    }


});

//exposing the route to any file that will need to access it
module.exports = router;