const express = require('express');
const router = express.Router();
const passport = require('passport');
const expressValidator = require('express-validator');

router.use(expressValidator());

// requiring our schema
const User = require('../model/register_model');
// const signup = require('../models/signupmodel');

// handling the sign up route for get

// SignUp form
router.get('/register', function(req, res){
    res.render('register');
  });

  router.post('/register', function(req, res){
    const Surname = req.body.Surname;
    const Givenname = req.body.Givenname
    const NIN = req.body.NIN;
    const Date = req.body.Date;
    const Occupation = req.body.Occupation;
    const work = req. body.work ;
    const Gender= req. body.Gender ;
    const loanamount  = req. body.loanamount;
    const loansecurity = req. body.loansecurity;
    const fallback= req. body.fallback;
    
    


    
    let errors = req.validationErrors();

    if(errors){
        res.render('register', {
          errors: errors
        });
      } else {
        let newUser = new User({
          Surname: Surname,
          Givenname: Givenname,
          NIN: NIN,
          Date: Date,
          Occupation: Occupation,
          work:work,
          Gender:Gender,
          loanamount :loanamount,
          loansecurity: loansecurity,
          fallback:fallback,




        });
          
        bcrypt.genSalt(10, function(err, salt){
          bcrypt.hash(newUser.password, salt, function(err, hash){
            if(err){
              console.error(err);
            }
            newUser.password = hash;
    
            newUser.save(function(err){
              if(err) {
                console.error(err);
                return;
              } else {
                console.log('success', 'You are now registered and can log in');
                res.redirect('/register');
              }
            });
          });
        })
      }
    });
    
    // Login form
    router.get('/login', function(req, res) {
      res.render('login');
    });
    
    // Login process
    router.post('/login', function(req, res, next){
      passport.authenticate('local', { 
        successRedirect: '/',
        failureRedirect: '/users/login',
        failureFlash: true
      })(req, res, next);
    });
    
    // Logout form
    router.get('/logout', function(req, res) {
      req.logout();
      req.flash('success', 'You are logged out');
      res.redirect('/login');
    });
    
    module.exports = router;
  