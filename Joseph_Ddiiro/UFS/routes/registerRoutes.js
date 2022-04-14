const express = require('express');
const router = express.Router();
const {registerSchema} = require('../validators/register');


// importing our schema
const Client = require('../models/registerModel');

//working on our register validation
router.post("/register", async (req, res) => {
    const { error } = registerSchema.validate(req.body);
    if (error) return res.status(400).send({message:error.details[0].message});
  
    //Check if the user is already in the db using the nin number as the unique identifer
    const clientExists = await Client.findOne({dateOfBirth:req.body.dateOfBirth});
  
    if (clientExists) return res.status(400).send({meaasge:"User has already registered for this service"});
  
  
    //create new user
    const client = new Client({
        surName:req.body.surName,
        givenName:req.body.givenName,
        nin:req.body.nin,
        dateOfBirth:req.body.dateOfBirth,
        occupation:req.body.occupation,
        placeOfWork:req.body.placeOfWork,
        gender:req.body.gender,
        loanAmount:req.body.loanAmount,
        loanSecurity:req.body.loanSecurity,
        fallBackSecurity:req.body.fallBackSecurity,

    });
  
    try {
      const customer = await client.save();
      res.redirect("/register") ; 
    } catch (err) {
      res.status(400).send({message:err});
    }
  });

router.get('/register', (req,res) => {
    res.render('register');
});

module.exports = router;
