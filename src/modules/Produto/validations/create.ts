import { validate, Joi } from "express-validation";

export default validate({
  body: Joi.object({
    idCategoria: Joi.number().required(),
    nome: Joi.string().required(),
    descricao: Joi.string().required(),
    preco: Joi.number().required(),
    status: Joi.string().required(),
  }),
});
