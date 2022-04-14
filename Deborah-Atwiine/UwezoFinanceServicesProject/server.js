const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressValidate = require('express-validator');
const session = require('express-session');
const flash = require('connect-flash');

//requiring the database
const config = require('./config/database');


//requiring routes
const register = require('./routes/regclientRoute');


//instantiating the server/app/index
const server = express();

//creating a connection to the mongo database from the controller(specifying its location)
mongoose.connect(config.database);
const db = mongoose.connection;
db.once('open', ()=> {
    console.log('Connected to mongodb')
});
db.on('error', (err)=> {
    console.error(err)
}); 

//setting up the view engine
server.engine('pug', require('pug').__express);
server.set('view engine', 'pug');
server.set('views', path.join(__dirname, 'views'));

//body parser middle ware section
server.use(bodyParser.urlencoded({
    extended:false
}));

//express flash middle ware
server.use(require('connect-flash')());
server.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});


server.use(bodyParser.json());


//setting the directory for static files
server.use(express.static(path.join(__dirname, "public")));

//express session middle ware
server.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
}));


//the route section
server.use('/', register);

//establish the server listening port
server.listen(5000, ()=> {
    console.log('The server has started on port 5000')
})