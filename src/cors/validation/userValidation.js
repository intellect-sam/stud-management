const Joi = require('joi');

const userSchema = Joi.object().keys({
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net'] },
    })
    .required(),
  password: Joi.string().required(),
  firstName: Joi.string().min(3).max(30).required(),
  lastName: Joi.string().min(3).max(30).required(),
  phoneNumber: Joi.string().required(),
  department: Joi.string().required(),
  level: Joi.string().required(),
});

module.exports = userSchema;
