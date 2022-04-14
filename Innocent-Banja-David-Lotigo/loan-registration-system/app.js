// importing the required dependencies
const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const config = require('./config/database')
const expressValidator = require('express-validator')
const flash = require('connect-flash')
const session = require('express-session')

//setting express to a variable app
const app = express()

//MIDDLEWARE engines
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))


//setting the database
mongoose.connect(config.database)
let db = mongoose.connection;
//checking connection
db.once('open', () => {
    console.log('Connected to MongoDB')
})
//checking for db error
db.on('error', (err) => {
    console.log(err)
})

//express - session
app.use(session({
    secret: 'dkfa;sdklfja',
    resave: true,
    saveUninitialized: true,
}))

//express - messages
app.use(require('connect-flash')())
app.use((req, res, next) => {
    res.locals.messages = require('express-messages')(req, res)
    next()
})
//express - validator 
app.use(expressValidator({
  errorFormatter: function (param, msg, value) {
    var namespace = param.split('.')
      , root = namespace.shift()
      , formParam = root;

    while (namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param: formParam,
      msg: msg,
      value: value
    };
  }
}));

//setting up routes
const register = require('./routes/register')

//using the route
app.use('/', register)

//setting the server to listen
app.listen(3000, () =>  {
    console.log('Server listening on PORT 3000.....')
})