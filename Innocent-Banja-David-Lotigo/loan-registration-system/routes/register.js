const express = require('express')
const { validate } = require('../models/user')
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

function Validation() {
    const form = document.getElementById('form')
    const surname = document.getElementById('surname')
    const givenname = document.getElementById('givenname')
    const nin  = document.getElementById('nin')
    const loan = document.getElementById('loan')

    form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
})
//if error existts
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};




}






//exporting the route
module.exports = router