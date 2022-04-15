const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

const config = require('./config/database');

const RegisterRoutes = require('./routes/registerRoutes');

mongoose.connect(config.database)
const db = mongoose.connection

db.once('open',()=>{
    console.log('Successfully connected to mongodb');
});

db.on('error', (err)=>{
console.error(err);
});+


app.engine('pug', require('pug').__express);
app.set('view engine', 'pug')
app.set('views', path.join(__dirname,'views')); 

app.use(express.static(path.join(__dirname, "public")));

app.use('/', RegisterRoutes);

app.get('*', (req, res) => {
  res.status(404).send('This is an invalid URL')
})

app.listen(3000,()=>{
    console.log('UFS Server is running at port 3000')
});

