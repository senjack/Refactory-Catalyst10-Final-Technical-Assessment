const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


// Import database configurations
const config = require('./config/database');

// // Importing Routes
// const homeRoutes = require('./routes/homeRoutes');
 const registerRoute = require('./routes/registerRoute');
// const registrationRoutes = require('./routes/registrationRoutes');
//const signupRoute = require('./routes/signupRoute');
//const dashboardRoute = require('./routes/dashboardRoute');
// // post route variable for my sign up form is similar to the get route variable 
// // because they are in the same file
//const parkingRoute = require('./routes/parkingRoute');
//const tyresRoute = require('./routes/tyresRoute');


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
});+

// Setting up the view engine
app.engine('pug', require('pug').__express);
app.set('view engine', 'pug')
app.set('views', path.join(__dirname,'views')); 

// body Parser middleware section
// we are telling node to focus on information in the input fields
app.use(bodyParser.urlencoded({extended:false}));
// telling body parser to use json format
app.use (bodyParser.json());

// express validator
//  app.use(expressValidator({
//  errorFormatter:(param,msg,value) => {
//  var namespace = param.split('.')
//  var root = namespace.shift()
//  var formparam = root
//  while(namespace.length()){
//      formparam +='[' + namespace.shift()+ ']'
//  }
//     }
// }))

// Setting directory for static files
app.use(express.static(path.join(__dirname, "public")));



// use imported routes
//app.use('/', homeRoutes);
app.use('/', registerRoute);
//app.use('/', registrationRoutes);
// app.use('/', signupRoute);
// app.use('/dashboard', dashboardRoute);
// app.use('/', parkingRoute);
// app.use('/', tyresRoute);




// server listening port

app.listen(4000,()=>{
    console.log('server started on port 4000')
});


