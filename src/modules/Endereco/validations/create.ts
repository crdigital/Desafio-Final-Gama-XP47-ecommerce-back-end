import { validate, Joi } from "express-validation";

export default validate({
  body: Joi.object({
    idUsuario: Joi.number().required(),    
    logradouro: Joi.string().required(),
    numero: Joi.string().required(),
    bairro: Joi.string().required(),
    cidade: Joi.string().required(),
    estado: Joi.string().required(),
    cep: Joi.string().required(),
    tipo: Joi.string().required(),
  }),
});
