const express = require('express');
const router = express.Router();
const passport = require('passport');
const expressValidator = require('express-validator');
router.use(expressValidator());
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// requiring our model or schema of signup
const Signup = require('../models/signupModel')

// accessing the signup page
router.get('/',(req, res)=>{
// we are rendering the signup pug file
    res.render('signup')
});

// we are creating the route for the post method
router.post('/',(req,res)=>{
    // declaration of variables that correspond to the
    // names in the form.
    const username = req.body.username
    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const email = req.body.email
    const gender = req.body.gender
    const phonenumber = req.body.phonenumber
    const password = req.body.password
    const confirmpassword = req.body.confirmpassword
    

    // we are handling errors here
    const errors = req.validationErrors()
    if(errors){
    res.render('signup')
    }
    else {
    // we have a new variable assigning it 
        let newSignup = new Signup({
    // value(property name from signup schema):property(variable name)
            username:username,
            firstname:firstname,
            lastname:lastname,
            email:email,
            gender:gender,
            phonenumber:phonenumber,
            password:password,
            confirmpassword:confirmpassword
        });

    //encrypting the password using bcrypt
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newSignup.password, salt, (err, hash) => {
                if (err) {
                    console.error(err)
                    return;
                }else{
                    newSignup.password = hash;
                    // saving our model to
                    newSignup.save((err) => {
                        if(err){
                            console.error(err);
                        return;
                        }
                        else {
                        //we fisrt flash a message confirm the saving of a record
                        //we stay @ the same form to register a new entity
                        req.flash('success', 'You have successfully signed up')
                        console.log('we have saved your data in the database')
                        res.redirect('/signup')
                        }
                    })
                }
            })
        
        })
    }
})

//we exposing our route to any file that will require it.
module.exports = router