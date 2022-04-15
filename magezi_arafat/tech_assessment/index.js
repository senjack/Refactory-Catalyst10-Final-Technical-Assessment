const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const path = require('path')
const config = require('./config/database');
const application = express();
const form = require('./routes/form');


//Establishing connection to the database
mongoose.connect(config.database);
const db = mongoose.connection;

//Testing the connection
db.once('open', ()=> {
    console.log('Connected to the database sucessfully');
});

db.on('error', ()=>{
    console.error(err);
});

//Setting a pug engine to render pug files
application.engine('pug', require('pug').__express);
application.set('view engine', 'pug');
application.set('views', path.join(__dirname, 'views') );

//Body parser middle-ware section
//url gets the form and exposes the input fields
application.use(express.urlencoded({extended:false}));
application.use(express.json());
application.use(express.static(path.join(__dirname, "public")));


//Using the routes in the application
application.use('/', form);

//Setting a connection port
application.listen(3000, ()=> {
    console.log('Listening at port 3000');
});


