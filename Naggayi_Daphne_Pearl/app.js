const express = require('express'); 
const mongoose = require ('mongoose');  
const path = require ('path');

// Express-session middleware to help us save the session cookie by storing data on the server. 
const expressSession = require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
}); 

const app = express(); 

const config = require ('./config/database'); 

const register = require('./routes/register');

mongoose.connect(config.database);

const db = mongoose.connection; 

db.once('open', () => {
    console.log('connected successfully');
})

db.on('error', (err) => {
    console.log(err);
})

app.engine('pug', require('pug').__express); 
app.set('view engine', 'pug'); 
app.set('views', path.join(__dirname,'views'))

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({extended:true})); 
app.use(express.json());
app.use(expressSession);
 

// connecting our app declared in routes
app.use('/', register); 

//Error non existent path.
app.get('*', (req, res) => {
    res.send('404 Oops, it looks like the page doesnt exist');
  });

  
// creating a port for the information to pass from the front end to the backend 
app.listen (5000, () => {
    console.log('listening at port 5000');
})
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    