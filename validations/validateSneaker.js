const Joi = require("joi");
const createValidator = require("./createValidator");

const sneakerSchema = Joi.object({
  name: Joi.string().required(),
  image: Joi.string().required(),
  release_date: Joi.string(),
  rating: Joi.number(),
  url: Joi.string()
});

module.exports = createValidator(sneakerSchema);