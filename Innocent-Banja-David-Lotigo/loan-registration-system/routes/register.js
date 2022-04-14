const express = require('express')
const router = express.Router()


//setting the route
router.get('/', (req, res) => {
    res.render('registration-form')
})

//exporting the route
module.exports = router