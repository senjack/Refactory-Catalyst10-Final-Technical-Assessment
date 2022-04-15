const express = require('express');
const mongoose = require('mongoose');
const { body, validationResult } = require('express-validator');
const router = express.Router();
// const Registration = mongoose.model('Registration');
const bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({ extended: true });

router.get('/', (req, res) => {
  res.render("loan-registration", {title: "Uwezo Finance Services | Loan Registration Form"});
});

router.post('/', [
      body('surname')
      .isLength({ min: 1 })
      .withMessage('Please enter a surname'),
      body('givenname')
      .isLength({ min: 1 })
      .withMessage('Please enter a given name'),
      body('nin')
      .isLength({ min: 1 })
      .withMessage('Please enter NIN'),
      body('dob')
      .isLength({ min: 1 })
      .withMessage('Please enter DOB'),
      body('occupation')
      .isLength({ min: 1 })
      .withMessage('Please enter occupation'),
      body('pow')
      .isLength({ min: 1 })
      .withMessage('Please enter a Place of Work'),
      body('gender')
      .isLength({ min: 1 })
      .withMessage('Please enter gender'),
      body('amount')
      .isLength({ min: 1 })
      .withMessage('Please enter amount'),
      body('security')
      .isLength({ min: 1 })
      .withMessage('Please enter security'),
    body('fallback')
      .isLength({ min: 1 })
      .withMessage('Please enter fallback'),
  ], (req, res) => {
    // console.log(req.body);
    const errors = validationResult(req);

    if (errors.isEmpty()) {
        const registration = new Registration(req.body);
        registration.save()
        .then(() => { res.send('Thank you for your registration!');
        }).catch(() => { res.send('Sorry! Something went wrong'); });
    } else {
      res.render('loan-registration', {
        title: 'Registration form with Errors',
        errors: errors.array(),
        data: req.body,
      });
    }
});

module.exports = router;