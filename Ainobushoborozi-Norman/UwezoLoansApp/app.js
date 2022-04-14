require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const routes = require('./routes/index');
// const bodyParser = require('body-parser');
// const validate = require('express-validator');
const app = express();


// const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use('/', routes);
app.use(express.static('public'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


require('./models/Registration');

mongoose.connect(process.env.DATABASE, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).then(() => {
    app.listen(5000, () => {
        console.log('Server listening on port 5000');
    });
});
