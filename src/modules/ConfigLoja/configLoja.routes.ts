import { Router } from 'express';
import IBaseRoutes from '../../infra/interfaces/IBaseRoutes';
import { authMiddleware } from '../../infra/middlewares/authMiddleware';
import configLojaValidation from './validations';
import configLojaController from './configLoja.controller';
import upload from '../../infra/middlewares/upload';

class ConfigLojaRoutes implements IBaseRoutes {

    public routes: Router;

    public constructor(){
        this.routes = Router();
        this.buildRoutes();
    }

    buildRoutes(){
        this.routes.get('/configLoja', authMiddleware, configLojaController.list);
        this.routes.put('/configLoja/:id', authMiddleware, upload.single("file"), configLojaValidation.update, configLojaController.update);
    }
    getRoutes(){
        return this.routes;
    }
}

export default new ConfigLojaRoutes();