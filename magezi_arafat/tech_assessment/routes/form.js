const express = require('express');
const router = express.Router();
const Form = require('../models/formModel');
const expressValidator = require('express-validator');

router.use(expressValidator());

router.get('/', (req, res) => {	
    res.render('index');
});

router.post('/form', (req, res) => {
    const surname = req.body.surname;
    const givenname = req.body.givenname;
    const nin = req.body.nin;
    const date = req.body.date;
    const occupation = req.body.occupation;
    const work = req.body.work;
    const gender = req.body.gender;
    const loan = req.body.loan;
    const security = req.body.security;
    const fallback = req.body.fallback;

    let errors = req.validationErrors();
    if(errors){
        res.render('index');
    }

    else{
        let newForm = new Form({
            surname: surname,
            givenname: givenname,
            nin: nin,
            date: date,
            occupation: occupation,
            work: work,
            gender:gender,
            loan:loan,
            security:security,
            fallback:fallback
    });

    newForm.save((err)=> {
            if(err){
                console.error(err);
            return;
            }

            else{
                console.log('Information posted successfully');
                res.redirect('/');
            }
    })
}

});

module.exports = router;