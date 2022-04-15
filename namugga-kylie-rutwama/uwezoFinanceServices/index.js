const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const expressValidator = require ('express-validator');
const app = express();

// Import database configurations
const config = require('./config/database');

// Importing Routes
const registrationRoutes = require('./routes/registrationRoutes');

// creating a connection between our Controller and Database
mongoose.connect(config.database)
const db = mongoose.connection
// Testing Connection to the data
db.once('open',()=>{
    console.log('connected to the Database Successfully');
});

db.on('error', (err)=>{
console.error(err);
});

// setting the view engine
app.engine('pug', require('pug').__express);
app.set('view engine', 'pug')
app.set('views', path.join(__dirname,'views')); 

// Setting directory for static files
app.use(express.static(path.join(__dirname, "public")));

// MIDDLEWARE SECTION
// we are telling node to focus on information in the input fields
app.use(express.urlencoded({extended:false}));
// telling body parser to use json format
app.use (express.json());

// using my imported routes
app.use('/', registrationRoutes);


// This message that appears in case someone searches for a route that doesnt exist on my server
app.get('*', (req, res) => {
    res.status(404).send('This is an invalid URL')
  })

// Setting connection port
app.listen(4000,()=>{
    console.log('server started on port 4000')
});
