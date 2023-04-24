import { Router } from 'express';
import IBaseRoutes from '../../infra/interfaces/IBaseRoutes';
import { authMiddleware } from '../../infra/middlewares/authMiddleware';
import dashboardController from './dashboard.controller';

class DashboardRoutes implements IBaseRoutes {

    public routes: Router;

    public constructor(){
        this.routes = Router();
        this.buildRoutes();
    }

    buildRoutes(){
        this.routes.get('/dashboard/vendas', authMiddleware, dashboardController.vendasPeriodo);
    }
    getRoutes(){
        return this.routes;
    }
}

export default new DashboardRoutes();