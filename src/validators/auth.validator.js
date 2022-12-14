const Joi = require('joi');

const authPostSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const registerPostSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required().min(8),
});

module.exports = { authPostSchema, registerPostSchema };
