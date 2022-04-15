const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();


  
//Defining variables, routes and models
const config = require('./config/database');
const registerRoutes = require('./routes/register');
const app = express();

//Establishing connection to the database
mongoose.connect(config.database);
const db = mongoose.connection;

//Testing the connection to the database
db.once('open', () => {
    console.log('You are connected to the Database');
});

db.on('error', (err) => {
    console.error(err);
});

//Setting the view engine
app.engine('pug', require('pug').__express);
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views') );


//Body parser middle-ware section
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

//Routes section
app.use('/',registerRoutes);


//This is a message just incase a user hits unexistent router instead of crushing
app.get('*', (req, res) => {
    res.status(404).send('This is an invalid URL')
  }); 

//Establishing a port to a connection to the database
app.listen(5000, () => {
    console.log('Listening at port 5000');
});

