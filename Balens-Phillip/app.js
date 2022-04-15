//we are requiring our packages into app.js
const express = require('express');

const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressValidate = require('express-validator');
const flash = require('connect-flash');
const session = require('express-session')({
//Express session middle ware
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
//The above keeps track of the different users that have successfully accessed the system according to their sessions.
});


//we are qualifying config to be a package but config package is our own i.e we just created it.
const config = require('./config/database');

//creating models (these are controllers)
// const editSignupRoutes = require('./routes/editSignupRoute')
const loanRoutes = require('./routes/loanRoute')


//creating a variable for express(we are instatiating our server).
const app = express();

//creating a connection to the mongo database from the controller(specifying its location)
mongoose.connect(config.database);
//incase of a connection we are creating a variable for the database. 
const db = mongoose.connection;
//Incase of a connection
db.once('open', ()=> {
    console.log('Connected to mongodb');
})
//Or else the connection fails
db.on('error', (err)=> {
    console.error('Connection error',err)
}) 

//setting up the view engine
app.engine('pug', require('pug').__express)
app.set('view engine','pug')
app.set('views', path.join(__dirname,'views'))

//bodyparser middleware section: This helps to clean data that is within the forms.
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


//express flash middle ware
app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});

// setting directory for static files
app.use(express.static(path.join(__dirname, 'public')));



// //password configuration
// require('./config/passport')(passport);


//* means all. 
app.get('*', (req, res, next) => {
    res.locals.user = req.user || null;
    next();
});

// Instructing the controller to point the login file.
// @ this line below we are using middleware
// app.use('/editSignup',homeRoutes)
app.use('/loan',loanRoutes)


//This is a post route middleware whereas we are using the same variable that we created for indexRoutes for it to work
// app.use('/form/submit',indexRoutes)

//Establishing the server listening port
app.listen(2022, ()=> {
    console.log('The server has started on port 2022')
})

