import { validate, Joi } from "express-validation";

export default validate({
  params: Joi.object({
    id: Joi.number().required(),
  }),
  body: Joi.object({
    nome: Joi.string(),
    email: Joi.string().email(),
    senha: Joi.string(),
    fone: Joi.string(),
    tipoUser: Joi.string().max(1),
    logradouro: Joi.string(),
    numero: Joi.string(),
    bairro: Joi.string(),
    cidade: Joi.string(),
    estado: Joi.string(),
    cep: Joi.string(),
    tipoEnd: Joi.string().max(1)
  }),
});
