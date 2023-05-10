const Joi = require("joi");
const createValidator = require("./createValidator");

const reviewSchema = Joi.object({
  sneaker_id: Joi.number().required(),
  reviewer: Joi.string().required(),
  content: Joi.string().required(),
  rating: Joi.number(),
});

module.exports = createValidator(reviewSchema);