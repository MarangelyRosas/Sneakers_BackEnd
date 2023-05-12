const Joi = require("joi");
const createValidator = require("./createValidator");

const sneakerSchema = Joi.object({
  name: Joi.string().required(),
  brand: Joi.string().required(),
  release_date: Joi.string(),
  price: Joi.number(),
  rating: Joi.number(),
  is_favorite: Joi.bool()
});

module.exports = createValidator(sneakerSchema);