const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser= require('body-parser');
const expressValidate = require('express-validator');
const session = require('express-session');
const flash = require('connect-flash');
const config = require('./config/database');
let loginRoutes = require ('./routes/login')
let signupRoutes = require ('./routes/signup')
//create a model
const usersignup = require('./models/usersignup');
const app = express();


//connectiong to the database
mongoose.connect(config.database);
const db = mongoose.connection;
db.once('open',()=>{
    console.log('connected to mongo db');
})
db.on('error',(err)=>{
console.error(err)
})

//routes

app.use('/login',loginRoutes)
app.use('signup',signupRoutes)

app.listen (5500, () => {
    console.log ('listeing on port 5500')});