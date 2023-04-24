import { validate, Joi } from "express-validation";

export default validate({
  params: Joi.object({
    id: Joi.number().required(),
  }),
  body: Joi.object({
    idUsuario: Joi.number(),    
    logradouro: Joi.string(),
    numero: Joi.string(),
    bairro: Joi.string(),
    cidade: Joi.string(),
    estado: Joi.string(),
    cep: Joi.string(),
    tipo: Joi.string(),
  }),
});
