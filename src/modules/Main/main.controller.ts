import {Request, Response} from 'express';

class MainController {

    public main(req: Request, res: Response){
        return res.json({
            message: `Api ecommerce! Seja bem vindo!`
        });
    }
}

export default new MainController();