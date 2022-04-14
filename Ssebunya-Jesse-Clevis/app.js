//we are requiring our packages into app.js
const express = require('express');


const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

//we are qualifying config to be a package but config package is our own i.e we just created it.
const config = require('./config/database');

const path = require("path");



mongoose.connect(config.database);
const db = mongoose.connection;
db.once('open',(err)=>{
    console.log('Connected to mongo db')
})
db.on('error',(err)=>{
    console.error('Connection error',err)
})

 // setting up the view engine
app.engine('pug', require('pug').__express)
app.set('view engine','pug')
app.set('views', path.join(__dirname,'views'))

//body parser middleware section: This helps to clean data that is within the forms.
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// setting directory for static files
app.use(express.static(path.join(__dirname, 'public')));

const passport = require('passport');

//we are qualifying config to be a package but config package is our own i.e we just created it.

const formRoutes = require('./routes/formRoute')


app.get('*', (req, res, next) => {
    res.locals.user = req.user || null;
    next();
});

app.use('/form',formRoutes)

app.listen(7000, ()=> {
    console.log('The server has started on port 7000')
})

