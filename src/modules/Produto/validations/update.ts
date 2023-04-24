import { validate, Joi } from "express-validation";

export default validate({
  params: Joi.object({
    id: Joi.number().required(),
  }),
  body: Joi.object({
    idCategoria: Joi.number(),
    nome: Joi.string(),
    descricao: Joi.string(),
    preco: Joi.number(),
    imagem: Joi.string(),
    status: Joi.string(),
  }),
});
