// schemas.js 
const Joi = require('joi') 
const schemas = { 
  login: Joi.object().keys({ 
    email_id: Joi.string().required(),
    password: Joi.string().required() 
  }) 
  // define all the other schemas below 
}; 
module.exports = schemas;
