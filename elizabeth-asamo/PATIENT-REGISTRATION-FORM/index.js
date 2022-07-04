const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const expressValidator = require ('express-validator');
const flash = require('connect-flash');
const passport = require('passport');
const expressSession = require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
});
const cors = require('cors')
const config = require('./config/database');
const formRoute = require('./routes/formRoute');

// Instantiating the app/server
const app = express();
// creating a connection between the controller and database
mongoose.connect(config.database)
const db = mongoose.connection
// checking if we've connected
db.once('open',()=>{
    console.log('connected to mongodb');
});
db.on('error', (err)=>{
console.error(err);
});
// Setting up the view engine
app.engine('pug', require('pug').__express);
app.set('view engine', 'pug')
app.set('views', path.join(__dirname,'views')); 
app.use(express.urlencoded({extended:false}));
// telling body parser to use json format
app.use (express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(expressSession);
// initialise
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());

app.use(require('connect-flash')());
app.use(function (req, res, next) {
    res.locals.messages = require('express-messages')(req, res);
    next();
  });
app.use('/', formRoute);
app.get('*', (req, res) => {
  res.status(404).send('This is an invalid URL')
})

app.listen(4000,()=>{
    console.log('server started on port 4000')
});