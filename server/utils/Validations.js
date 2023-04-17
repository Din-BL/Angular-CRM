const Joi = require("joi");

module.exports.registerSchema = Joi.object({
  name: Joi.string().trim().min(3).max(30).required(),
  email: Joi.string().trim().lowercase().email().required(),
  password: Joi.string().trim().min(8).max(128).required()
});

module.exports.loginSchema = Joi.object({
  email: Joi.string().trim().lowercase().email().required(),
  password: Joi.string().trim().min(8).max(128).required(),
});

module.exports.customerSchema = Joi.object({
  first: Joi.string().min(2).max(30).required(),
  last: Joi.string().min(2).max(30).required(),
  email: Joi.string().trim().lowercase().email().required(),
  address: Joi.string().trim(),
  phone: Joi.string().trim().required()
});

module.exports.employeeSchema = Joi.object({
  full: Joi.string().min(5).max(30).required(),
  email: Joi.string().trim().lowercase().email().required(),
  phone: Joi.string().trim().required(),
  birthday: Joi.date().max('now').iso().required()
});
