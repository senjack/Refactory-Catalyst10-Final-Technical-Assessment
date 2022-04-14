// importing the required dependencies
const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const config = require('./config/database')

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


//setting up routes
const register = require('./routes/register')

//using the route
app.use('/', register)

//setting the server to listen
app.listen(3000, () =>  {
    console.log('Server listening on PORT 3000.....')
})