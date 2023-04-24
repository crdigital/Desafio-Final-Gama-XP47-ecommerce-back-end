import { validate, Joi } from "express-validation";

export default validate({
  params: Joi.object({
    id: Joi.number().required(),
  }),
  body: Joi.object({
    dataPedido: Joi.string(),
    status: Joi.string(),
    itensPedido: Joi.array()
  }),
});
