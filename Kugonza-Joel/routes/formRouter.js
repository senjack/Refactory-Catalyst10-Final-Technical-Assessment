const express = require ('express');
const router = express.Router();
const formRegister = require('../models/formmodel');
const expressvalidator = require('express-validator');
router.use(expressvalidator());


router.get('/form',(req,res)=>{
    res.render('formReg');
});

router.post('/parking',(req,res)=>{
    const sirname = req.body.sirname;
    const givename = req.body.givename;
    const nin       = req.body.nin;
    const dateofbirth  = req.body.dateofbirth;
    const occupation = req.body.occupation;
    const placeofwork  = req.body.placeofwork;
    const gender   = req.body.gender;
    const loanamount   = req.body.loanamount;
    const loansecurity   = req.body.loansecurity;
    const fallbacksecurity   = req.body.fallbacksecurity;
    

    let errors = req.validationErrors();
    if(errors){
        res.render('vehicleReg');
    
    }
    else{
        const newReg = new formRegister({
            sirname:sirname,
            givename:givename,
            nin:nin,
            dateofbirth:dateofbirth,
            occupation:occupation,
            gender:gender,
            loanamount:loanamount,
            loansecurity:loansecurity,
            fallbacksecurity:fallbacksecurity,


        });
        newReg.save((err)=>{
            if(err){
                console.error(err);
                return;
            }
            else{
                res.redirect('/formReport');
            }

        });
    

            
    }   
});


module.exports = router;