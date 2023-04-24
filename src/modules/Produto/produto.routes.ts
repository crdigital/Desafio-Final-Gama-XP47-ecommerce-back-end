import { Router } from 'express';
import IBaseRoutes from '../../infra/interfaces/IBaseRoutes';
import { authMiddleware } from '../../infra/middlewares/authMiddleware';
import upload from '../../infra/middlewares/upload';
import produtoController from './produto.controller';
import produtoValidation from './validations';

class ProdutoRoutes implements IBaseRoutes {

    public routes: Router;

    public constructor(){
        this.routes = Router();
        this.buildRoutes();
    }

    buildRoutes(){
        this.routes.post('/produto', authMiddleware,  upload.single("file"), produtoValidation.create, produtoController.create);
        this.routes.put('/produto/:id', authMiddleware, upload.single("file") , produtoValidation.update, produtoController.update);
        this.routes.delete('/produto/:id', authMiddleware, produtoValidation.destroy, produtoController.delete);
        this.routes.get('/produto/:id', produtoValidation.getOne, produtoController.getById);
        this.routes.get('/produto',  produtoController.getAll);
        this.routes.get('/produto/categoria/:id', produtoController.listByCategoria);
    }
    getRoutes(): Router {
        return this.routes;
    }
}

export default new ProdutoRoutes();