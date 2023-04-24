import { validate, Joi } from "express-validation";

export default validate({
  body: Joi.object({
    nome: Joi.string().required(),
    email: Joi.string().email().required(),
    senha: Joi.string().required(),
    fone: Joi.string().required(),
    tipoUser: Joi.string().max(1).required(),
    logradouro: Joi.string().required(),
    numero: Joi.string().required(),
    bairro: Joi.string().required(),
    cidade: Joi.string().required(),
    estado: Joi.string().required(),
    cep: Joi.string().required(),
    tipoEnd: Joi.string().max(1).required()
  }),
});
