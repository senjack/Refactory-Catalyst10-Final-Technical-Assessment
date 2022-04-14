const express = require('express');
const router = express.Router();
const passport = require('passport');
const expressValidator= require('express-validator');
const mongoose = require('mongoose');

const financial= require('../models/financialmodels')
// handling routes of home
// router.get('/registration',(req,res)=>{
//     res.render('registration')
// });


//handles fetching client data from the db to populate the table
router.get('/registration', async(req,res)=>{
    // to pick data from the 
    try {
        // helps return all the members in the collection clients
        const data = await registration.find({}).sort({$natural:-1});
        console.log('>>>>>> all clients',data);
        // gives us the file dash and come with the client data or client has same info with data
        res.render('financial', {financial:data})
      } catch(error) {
        return res.status(400).send(
          { 
            status: 400,
            message: 'Oops failed to fetch all clients',
            error
          });
    }
});
// handling routes of dash for post to access reg form on route /dash
// post from frontend using the dash route to backend 
router.post('/financial',(req,res)=>{
    // declaring the variables in the pug file name
    // we are requesting node js to foward the data and the body with the name given only uses name
    const name = req.body.name;
    const occupation = req.body.occupation;
    const gender = req.body.gender;
    const ninnumber = req.body.ninnumber;
    const dateofbirth= req.body.dateofbirth;
    const loanamount= req.body.loanamount;
    const loansecurity= req.body.loansecurity;
    const fallbacksecurity= req.body. fallbacksecurity;

    
    // handling errors
    // incase there is an error we serve back the form
    const errors = req.validationErrors();
    console.log();
    if (errors) {
        res.render('/financial')
    }
    else{
        // new variable asssigin it 
        // value(property name from schema):property(varible name in route)
        let newregistration = new financial({
            name:name,
           loanamount:loanamount,
            gender:gender,
            ninnumber: ninnumber,
            occupation:occupation,
            dateofbirth: dateofbirth,
            loansecurity:loansecurity,
            fallbacksecurity:fallbacksecurity,
           
        });
        // saving the data
        // case of error return err incase no error give message in console and give dash 
        // controllers
        newSignoff.save((err) =>{

            if(err){
                console.error(err);
                return;
            }
            else{
                // we first flash a message confirm save in data base
                // go to dashboard since user signed up
                console.log('data saved in database', );
                res.redirect('/financial')
            }
        })
    }
});

// delete user
// router.get('/deleteuser/:id',async (req,res)=>{
//     try {
//         // console.log('client')
//         await registration.deleteOne({_id:req.params.id})
//         res.redirect('back')
//     } catch (error) {
//         res.status(400).send('unable to delete user')
//     }
// });


module.exports = router;
// exporting the router