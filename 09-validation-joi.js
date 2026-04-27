const schema = Joi.object({
  email: Joi.string().email().required()
});
