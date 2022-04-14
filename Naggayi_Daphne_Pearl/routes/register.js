// route will specify a path on your web browser
const express = require('express')
const router = express.Router(); 

const Register = require('../models/register'); 
const expressValidator = require('express-validator'); 

router.use(expressValidator());

router.get('/register', (req,res) => {  
    res.render('register')
});


router.post('/register', (req,res) =>{
    // creating a variable that picks the body of the field like surname
    const surname = req.body.surname; 
    const givename = req.body.givename;
    const nin = req.body.nin;  
    const dob = req.body.dob; 
    const occupation = req.body.occupation; 
    const placeofwork = req.body.placeofwork; 
    const loanamount = req.body.loanamount; 
    const loansecurity = req.body.loansecurity; 
    const fallback = req.body.fallback; 
    
    
    let error = req.validationErrors();
    if(error){
        res.render('register');
    }
    // registering new users to the database
    else {
        let newEntry = new Register({
            surname: surname, 
            givename:givename, 
            dob:dob,
            nin: nin, 
            occupation:occupation, 
            placeofwork:placeofwork, 
            loanamount:loanamount, 
            loansecurity:loansecurity, 
            fallback:fallback

        });

        // saving a new entry
        newEntry.save((err)=>{
            if(err){
                console.err1or(err)
                return;
            } 
            else {
                console.log('new loan request registered');
                res.redirect('/register');
            }
        })
    }
})


// gives access to someone to access our router
module.exports = router; 