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
}

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
}

const validateInputs = () => {
    const surname = surname.value.trim();
    const givenname = givenname.value.trim();
    const nin = nin.value.trim();
    const date = date.value.trim();
    const occupation = occupation.value.trim()
    const work = work.value.trim()
    const gender = gender.value.trim()
    const loan = loan.value.trim()
    const security = loan.vaulue.trim()
    const fullback = load.value.trim()

    if(surname === '' || surname.length < 2 ) {
        setError(surname, 'Surname is required');
    } else {
        setSuccess(username);
    }

     if(givenname === '' || givenname.length < 2 ) {
        setError(givenname, 'Surname is required');
    } else {
        setSuccess(givenname);
    }

     if(surname === '' ) {
        setError(nin, 'Surname is required');
    } else {
        setSuccess(username);
    }
};






//exporting the route
module.exports = router