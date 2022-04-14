const Joi = require('joi');

const registerSchema = Joi.object({
    surName:Joi.string().min(2).max(255).required(),
    givenName:Joi.string().min(2).max(255).required(),
    nin:Joi.string().min(13).max(14).required(),
    dateOfBirth:Joi.string().min(2).max(255).required(),
    gender:Joi.string().min(2).max(255).required(),
    loanAmount:Joi.string().min(2).max(255).required(),
    loanSecurity:Joi.string().min(5).max(255).required(),
    fallBackSecurity:Joi.string().min(5).max(255).required(),
});

module.exports = {
    registerSchema
}