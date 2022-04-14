const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const registerSchema = mongoose.Schema({
    sirname: {
        type: String,
        required: true
    },

    givenname: {
        type:String,
        required:true
    },

    nin: {
        type:String,
        required: true
    },

    dateofbirth: {
        type:String,
        required:true
    }, 
     placeofwork: {
        type: String,
        required:true
    }

    gender: {
        type: String,
        required:true
    }

    
    loanamount: {
        type: String,
        required:true
    }

    loansecurity:{
        type: String,
        required:true
    }

    fallbacksecurity:{
        type: String,
        required:true
    }



});

registerSchema.plugin(passportLocalMongoose, {
    usernameField: "email",
})

module.exports = mongoose.model('UserRegister', registerSchema);