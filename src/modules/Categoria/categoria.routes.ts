import { Router } from 'express';
import IBaseRoutes from '../../infra/interfaces/IBaseRoutes';
import { authMiddleware } from '../../infra/middlewares/authMiddleware';
import upload from '../../infra/middlewares/upload';
import categoriaController from './categoria.controller';
import categoriaValidation from './validations';

class CategoriaRoutes implements IBaseRoutes {

    public routes: Router;

    public constructor(){
        this.routes = Router();
        this.buildRoutes();
    }

    buildRoutes(){
        this.routes.post('/categoria', authMiddleware,  upload.single("file"), categoriaValidation.create,categoriaController.create);
        this.routes.put('/categoria/:id', authMiddleware, upload.single("file"), categoriaValidation.update,categoriaController.update);
        this.routes.delete('/categoria/:id', authMiddleware, categoriaValidation.destroy, categoriaController.delete);
        this.routes.get('/categoria/',  categoriaController.getAll);
        this.routes.get('/categoria/:id',  categoriaValidation.getOne, categoriaController.getById);


    }
    getRoutes(){
        return this.routes;
    }
}

export default new CategoriaRoutes();