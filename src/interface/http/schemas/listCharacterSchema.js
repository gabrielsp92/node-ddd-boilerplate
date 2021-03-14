const Joi = require('joi');

module.exports = () => Joi.object().keys({
    query: Joi.object().keys({
        name: Joi.string(),
        status: Joi.string(),
        species: Joi.string(),
        type: Joi.string(),
        gender: Joi.string(),
    })
});
