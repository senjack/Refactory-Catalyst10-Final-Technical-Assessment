const express = require('express');
const router = express.Router();

//accessing the login page

router.get('/login',(req,res)=>{
   res.render('signup') 
});