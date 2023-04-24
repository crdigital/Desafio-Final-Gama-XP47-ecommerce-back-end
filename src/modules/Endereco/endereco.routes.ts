import { Router } from 'express';
import IBaseRoutes from '../../infra/interfaces/IBaseRoutes';
import { authMiddleware } from '../../infra/middlewares/authMiddleware';
import enderecoValidation from './validations';
import enderecoController from './endereco.controller';

class EnderecoRouter implements IBaseRoutes {

    public routes: Router;

    public constructor(){
        this.routes = Router();
        this.buildRoutes();
    }

    buildRoutes(){
        this.routes.post('/endereco', enderecoValidation.create, enderecoController.create);
        this.routes.put('/endereco/:id', authMiddleware, enderecoValidation.update, enderecoController.update);
    }
    getRoutes(): Router {
       return this.routes;
    }   
}

export default new EnderecoRouter();