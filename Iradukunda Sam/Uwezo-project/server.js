// we are requiring our packages into the controller called app.js
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const expressValidator = require('express-validator');
// const flash = require('connect-flash');
const Registration = require('Registration')
// const session = require('express-session');
// const passport = require('passport');
// we are qualifying config to be a package but config package is
// our own i.e we just created it.
const config = require('./config/database');

//Create a model 
// const Article = require('./models/article');

// route section (these are controllers)
// let loginRoutes = require('./routes/')
// const mgtEntryRoutes = require('./routes/')
// const registrationRoutes = require('./routes/register')

const app = express();
//creating a connection to the mongo database from the 
// controller(specifying its location)
mongoose.connect(config.database);
// Incase of a connection
const db = mongoose.connection;
db.once('open', ()=> {
    console.log('Connected to mongodb');
})
db.on('error', (err)=> {
    console.error('Connection error',err)
}) 

// setting up the view engine
app.engine('pug', require('pug').__express)
app.set('view engine','pug')
app.set('views', path.join(__dirname,'views'))

// bodyparser middleware section: This helps to clean data
// that is within the forms.
// app.use(bodyParser.urlencoded({extended:false}))
// app.use(bodyParser.json())

// setting directory for static files
app.use(express.static(path.join(__dirname, "public")));

// intsructing the controller to point the login file.
// @ this line below we are using middleware
app.use('/register',registrationRoutes)

// app.use('/form/submit',registerRoutes)

//establish the server listening port
app.listen(3001, ()=> {
    console.log('The server has started on port 3001')
})


