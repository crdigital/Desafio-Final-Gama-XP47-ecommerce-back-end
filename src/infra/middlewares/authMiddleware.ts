import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';

type JWTPayload = {
    id: number;
    tipo: string;
}

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const { authorization } = req.headers;

        if (!authorization) {
            return res.status(401).json('Não autorizado!');
        }

        const token = authorization.split(' ')[1];

        const { id, tipo } = jwt.verify(token, process.env.SECRET_KEY as string) as JWTPayload;        

        req.user = id;
        req.user = tipo;

       next();
        
    } catch (error) {
        return res.status(401).json(`Não autorizado: ${error} `);
    }    
}