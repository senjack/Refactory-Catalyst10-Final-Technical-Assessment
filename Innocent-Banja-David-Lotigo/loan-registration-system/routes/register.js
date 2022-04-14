const express = require('express')
const router = express.Router()

//importing the model
let Users = require('../models/user')

//setting the route
router.get('/', (req, res) => {
    res.render('registration-form')
})

//adding SUBMIT POST   
router.post('/', (req, res) => {
    
    insertCustomer(req, res)
})

function insertCustomer(req, res) {
    //getting the model
    let user = new Users()
    //preparing fields to insert to the datebase
    user.surname        = req.body.surname
    user.givenname      = req.body.givenname
    user.nin            = req.body.nin
    user.date           = req.body.date
    user.occupation     = req.body.occupation
    user.work           = req.body.work
    user.gender         = req.body.gender
    user.loan           = req.body.loan
    user.security       = req.body.security
    user.fullback       = req.body.fullback

    req.checkBody('surname', 'surname required').notEmpty()
    req.checkBody('givenname', 'given name  required').notEmpty()
    req.checkBody('nin', 'nin should be a number').notEmpty()
    req.checkBody('date', 'date of birth required').notEmpty()
    req.checkBody('occupation', 'occupation required').notEmpty()
    req.checkBody('work', 'place of work required').notEmpty()
    req.checkBody('gender', 'gender required').notEmpty()
    req.checkBody('loan', 'loan is a number').notEmpty()
    req.checkBody('security', 'security required').notEmpty()
    req.checkBody('fullback', 'full back security required').notEmpty()

    let errors = req.validationError();
    //if errors
    if(errors){
        res.render('/', {
            errors: errors
        })
    } else {

         //saving the date
    user.save((err) => {
        //checking for errors
        if(err){

            console.log(err)
            return
        } else {
            req.flash('success', 'User Registration Successful')
            res.redirect('/')
        }
    })

    }

}


//exporting the route
module.exports = router