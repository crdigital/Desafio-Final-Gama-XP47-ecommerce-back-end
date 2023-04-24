import { validate, Joi } from "express-validation";

export default validate({
  params: Joi.object({
    id: Joi.number().required(),
  }),
  body: Joi.object({
    nomeFantasia: Joi.string(),
    endCompleto: Joi.string(),
    email: Joi.string(),
    fone: Joi.string(),
    instagram: Joi.string(),
    facebook: Joi.string(),
    twitter: Joi.string(),
    logotipo: Joi.string()
  }),
});
