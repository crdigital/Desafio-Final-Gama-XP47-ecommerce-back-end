import { validate, Joi } from "express-validation";

export default validate({
  body: Joi.object({
    dataPedido: Joi.string().required(),
    valorTotal: Joi.number().required(),
    status: Joi.string().required(),    
    itensPedido: Joi.array().required()
  }),
});
