import { Router } from 'express';
import IBaseRoutes from '../../infra/interfaces/IBaseRoutes';
import { authMiddleware } from '../../infra/middlewares/authMiddleware';
import pedido_vendasController from './pedido_vendas.controller';
import pedidoVendasValidation from './validations';

class PedidoVendasRoutes implements IBaseRoutes{

    public routes: Router;

    public constructor(){
        this.routes = Router();
        this.buildRoutes();
    }

    buildRoutes(){
        this.routes.post('/pedido_vendas', authMiddleware, pedidoVendasValidation.create, pedido_vendasController.create);
        this.routes.get('/pedido_vendas', authMiddleware, pedido_vendasController.getAll);
        this.routes.get('/pedido_vendas/:id', authMiddleware, pedidoVendasValidation.getOne,pedido_vendasController.getByid);
        this.routes.put('/pedido_vendas/:id', authMiddleware, pedidoVendasValidation.update,pedido_vendasController.update);

    }
    getRoutes(){
        return this.routes;
    }
}

export default new PedidoVendasRoutes();