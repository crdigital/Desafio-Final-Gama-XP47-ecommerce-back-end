import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import UsuarioModel, { IUsuario }  from '../../models/Usuario';
import bcrypt from 'bcryptjs';

class AuthController {
    
    async login(req: Request, res: Response) {        

        const { email, senha } = req.body;

        const user = await UsuarioModel.findOne({ where: { email } }) as unknown as IUsuario;

        if (!user) {
            return res.status(400).json({userInvalid: 'Usuário inválido.'});
        }

        const verifyPassword = await bcrypt.compare(senha, user.senha);

        if(!verifyPassword){
            return res.status(400).json({erro: 'E-mail ou senha inválidos.'});
        }

        const token = jwt.sign({id: user.id, tipo: user.tipo}, process.env.SECRET_KEY as string,{
            expiresIn: '7d'
        });
        
        const { id, nome, tipo, email:_ } = user;

        return res.json({ 
            id: id,
            nome: nome,
            email:email,
            tipo: tipo,
            token: token,
            message: "Login efetuado com sucesso!"
        }); 
    }
}

export default new AuthController();