const express = require('express');
const router = express.Router();

//requiring our model/schema ie the path to the file with the schema
const Register = require('../models/loanForm')

//Accessing the loanForm page
//the route for get
router.get('/register', (req,res)=>{
	res.render('loanForm');
})

router.post('/register', async (req,res)=>{
	console.log(req.body)
	const newRegister = new Register(req.body);
	try {
		//we are awaiting as we are waiting to save this object to the database
		await newRegister.save();

		res.redirect('/register')
		console.log('data successfully saved');

	} catch(err){
		console.error(err);
		res.send('your data has not been saved to the database');

 	}
 })



module.exports = router;
