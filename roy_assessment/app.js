//Importing our packages into the controller.
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//const expressValidator = require('express-validator');
//const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
//Qualifying config to be a package.
const config = require('./config/database');

//Register model
//const Register = require('./models/registerModel');

mongoose.connect(config.database);
const db = mongoose.connection;

// Check connection
db.once('open', function(){
  console.log('Connected to MongoDB');
});

// Check for db errors
db.on('error', function(err){
  console.error(err);
});
 
const app = express();

//Setting up the view engine
app.engine('pug', require('pug').__express);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Body Parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Setting up a directory for static files.
app.use(express.static(path.join(__dirname, 'public')));

// Express Messages Middleware
// app.use(require('connect-flash')());
// app.use(function (req, res, next) {
//   res.locals.messages = require('express-messages')(req, res);
//   next();
// });


// Route Files
let loan_route = require('./routes/loanRoute');

app.use('/', loan_route);


app.listen(3000, function(){
  console.log(`Server started on port 3000`);
})