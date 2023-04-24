import { Router } from 'express';
import IBaseRoutes from '../../infra/interfaces/IBaseRoutes';
import { authMiddleware } from '../../infra/middlewares/authMiddleware';
import CupomController from './cupom.controller';
import cupomValidation from './validations';

class CupomRoutes implements IBaseRoutes{
    
    public routes: Router;

    public constructor(){
        this.routes = Router();
        this.buildRoutes();
    }
    
    buildRoutes() {
        this.routes.post('/cupom', authMiddleware, cupomValidation.create, CupomController.create);        
        this.routes.put('/cupom/:id', authMiddleware, cupomValidation.update, CupomController.update);        
        this.routes.delete('/cupom/:id', authMiddleware, cupomValidation.destroy, CupomController.delete);
        this.routes.get('/cupom', CupomController.getAll);
        this.routes.get('/cupom/:id', cupomValidation.getOne, CupomController.getById);

    }
    getRoutes() {
        return this.routes;
    }
}

export default new CupomRoutes();