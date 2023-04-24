import { NextFunction, Request, Response } from 'express';
import { UsuarioModel } from '../../models';
import bcrypt from 'bcryptjs';
import EnderecoModel from '../../models/Endereco';

class UsuarioController {
   
    public async create(req: Request, res: Response) {

        try {

            let { 
                nome, 
                email, 
                senha, 
                fone, 
                tipoUser,
                logradouro,
                numero,
                bairro,
                cidade,
                estado,
                cep,
                tipoEnd
             } = req.body;

            const  tipo = req.user;

            // testando se existe usuario cadastrado com o mesmo email
            const userExists = await UsuarioModel.findOne({ where: { email } });

            if (userExists) {
                return res.status(400).json({erro:`Existe um usuário cadastrado com o email: ${email}`});
            }

            // testando se o tipo é 1 e o userLogado.tipo também é 1
            // caso contrário retorna
            if( tipoUser == '1' && tipo != '1'){
                return res.status(400).json('Somente usuários administradores podem cadastrar outro administrador');                
            }

            const newSenha = bcrypt.hashSync(senha, 10);
            senha = newSenha;

            const usuario = await UsuarioModel.create({
                nome,
                email,
                senha,
                fone,
                tipo: tipoUser
            });

            // Retorno da inserção do usuário(pegando o id inserido)
            const userId = usuario.id;

            const userEndereco = await EnderecoModel.create({
                idUsuario: userId,
                logradouro,
                numero,
                bairro,
                cidade,
                estado,
                cep,
                tipo: tipoEnd /* '1' residencial e '2' comercial*/
            });

            const user  = { nome, email };

            // let userEnd =  Object.assign({}, usuario, userEndereco);
           
            return res.status(201).json({message: "Usuário cadastrado com sucesso!"});

            // return res.status(201).json({
            //     message: "Novo usuário criado com sucesso!",
            //     userId,
            //     user
            // });

        } catch (error) {
            return res.status(400).json({ error: `Erro na inserção do usuário: ${error}` });
        }
    }

    public async update(req: Request, res: Response) {
        try { 

            const { id } = req.params;
            const  tipo = req.user;
            const { tipoUser } = req.body;

            if (!id) {
                return res.json("O parâmetro id é obrigatório.");
            }

            if( tipoUser == '1' && tipo != '1'){
                return res.status(400).json('Somente usuários administradores podem cadastrar outro administrador');                
            } 

            const usuario = await UsuarioModel.findByPk(id);

            if (!usuario) {
                return res.json(`Usuario de id '${id} não encontrado.'`);
            }

            const payloadUser = {};

            if(req.body.nome){Object.assign(payloadUser, req.body.nome)};
            if(req.body.email){Object.assign(payloadUser, req.body.email)};
            if(req.body.fone){Object.assign(payloadUser, req.body.fone)};

            const payloadEnd = {};         
         
            if(req.body.logradouro){Object.assign(payloadEnd, req.body.logradouro)};
            if(req.body.numero){Object.assign(payloadEnd, req.body.numero)};
            if(req.body.bairro){Object.assign(payloadEnd,req.body.bairro)};
            if(req.body.cidade){Object.assign(payloadEnd, req.body.cidade)};
            if(req.body.estado){Object.assign(payloadEnd, req.body.estado)};
            if(req.body.cep){Object.assign(payloadEnd, req.body.cep)};
            if(req.body.tipoEnd){Object.assign(payloadEnd, {tipo: req.body.tipoEnd})};                       

            const { senha } = req.body;

            if ( senha ) {
                const newSenha = bcrypt.hashSync(senha, 10);
                Object.assign(payloadUser, { senha: newSenha });
            }

            if(tipoUser){
                Object.assign(payloadUser, {tipo: tipoUser});
            }
            
            const usuarioUpdate = await UsuarioModel.update(payloadUser, {
                where: { id },
            });
            
            if(Object.values(payloadEnd).length > 0){
                const enderecoUpdate = await EnderecoModel.update(payloadEnd,{
                    where: { idUsuario:  id }
                } );
            }            

            return res.status(200).json(usuarioUpdate);

        } catch (error) {
            return res.status(400).json(`Ocorreu algum erro na atualização do usuário: ${error}`);
        }
    }

    public async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            
            const userId = await UsuarioModel.findByPk(id);
            
            if (!userId) {
                return res.status(400).json(`Usuario de id '${id}' não encontrado`);
            }
            
            const enderecoUser = await EnderecoModel.findOne({
                where:{idUsuario: id}
            });

            if (enderecoUser) { 
                const removeEnderecoUser = await EnderecoModel.destroy({
                    where:{idUsuario:id}
                });
             }
            
            const userRemove = await UsuarioModel.destroy({
                where:{
                    id
                }
            });

            return res.status(204).json({message: 'Usuário removido'});
            
        } catch (error) {
            return res.status(400).json({erro: "Erro ao remover o usuário; ", error});
        }
    }

    public async getAll(req: Request, res: Response) {
        try {
            const users = await UsuarioModel.findAll({ 
                include:{ model: EnderecoModel, as: 'endereco'}
            });
            return res.status(200).json(users);
        } catch (error) {
            return res.status(400).json({message: `Erro na requisição: ${error}`});
        }
    }

    public async getById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const userId = await UsuarioModel.findByPk(id,{
                include:{ model: EnderecoModel, as: 'endereco'}
            });
            if (!userId) {
                return res.status(400).json(`Usuario de id '${id}' não encontrado`);
            }
            return res.status(200).json(userId);
        } catch (error) {
            return res.status(400).json({message: `Erro na requisição: ${error}`});
        }
    }
    
}

export default new UsuarioController();
