// model File 
// will retrive our data 

const mongoose = require ('mongoose'); 

// creating a schema
const registerSchema = mongoose.Schema({
    surname: {
        type: String, 
        required: true
    },
    givename: {
        type: String, 
        required: true
    },
    nin: {
        type: String, 
        required: true
    },  
    dob: {
        type: String, 
        required: true
    }, 
    occupation: {
        type: String, 
        required: true

    },
    placeofwork: {
        type: String, 
        required: true
    }, 
    loanamount: {
        type: String, 
        required: true
    }, 
    loansecurity: {
        type: String, 
        required: true
    },
    fallback: {
        type: String, 
        required: true
    }
});

// we are exporting information to another file to acccess database
module.exports = mongoose.model('Register', registerSchema);