//importing required dependencies
const mongoose = require('mongoose')

//defining the schema
let tireSchema = mongoose.Schema({
    //fields to insert
    surname         :{ type: String, required: true },
    givenname       :{ type: String, required: true },
    nin             :{ type: Number, required: true },
    date            :{ type: Date, required: true },
    occupation      :{ type: String, required: true },
    work            :{ type: String, required: true},
    gender          :{ type: String, required: false },
    loan            :{ type: Number, required: true },
    security        :{ type: String, required: true},
    fullback        :{ type: String, required: false}
})

//exporting the module
let Tire = module.exports = mongoose.model('Tire', tireSchema)