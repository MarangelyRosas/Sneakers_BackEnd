const Joi = require("joi");
const createValidator = require("./createValidator");

const reviewSchema = Joi.object({
  reviewer: Joi.string().required(),
  title: Joi.string().required(),
  content: Joi.string().required(),
  rating: Joi.number(),
  sneaker_id: Joi.number().required(),
});

module.exports = createValidator(reviewSchema);