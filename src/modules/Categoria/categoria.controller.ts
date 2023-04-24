import { Request, Response } from 'express';
import CategoriaModel from '../../models/Categoria';
import fs from 'fs';

class CategoriaController {

    public async create(req: Request, res: Response) {
        
        try {

            const tipo = req.user;

            if( tipo != '1'){
                return res.status(400).json({erro:'Somente usuários administradores podem criar categorias.'});                
            }

            const { file } = req;

            const { nome, descricao } = req.body;

            if(!file?.filename){
                return res.status(400).json({message: 'O arquivo de imagem é obrigatório'});
            } 

            const imagem = "/images/" + file?.filename;

            const categoria = await CategoriaModel.create({
                nome, descricao, imagem
            });
            return res.status(201).json(categoria);
        } catch (error) {
            return res.status(400).json({message: 'Erro ao inserir a categoria', erro: error});
        }
    }

    public async update(req: Request, res: Response) {
        try {

            const tipo = req.user;

            if( tipo != '1'){
                return res.status(400).json({erro:'Somente usuários administradores podem atualizar categorias.'});                
            }

            const { id } = req.params;
            const { file } = req;

            if (!id) {
                return res.json("O parâmetro id é obrigatório.");
            }            

            const categoria = await CategoriaModel.findByPk(id);

            if (!categoria) {
                return res.json(`Categoria de id '${id} não encontrada.'`);
            }

            let payloadUpdate = { };
            
            if(file?.filename){

                const imagem = "/images/" + file?.filename; 
                
                if(categoria.imagem != imagem){
                    fs.unlinkSync('./uploads' + categoria.imagem);
                }

                payloadUpdate = { imagem };                
             }

            Object.assign(payloadUpdate, req.body);

            const categoriaUpdate = await CategoriaModel.update(payloadUpdate, {
                where: { id },
            });

            return res.status(200).json(categoriaUpdate);

        } catch (error) {
            return res.status(400).json({erro: `Ocorreu algum erro na atualização da categoria: ${error}`});
        }
    }

    public async delete(req: Request, res: Response) {
        try {

            const tipo = req.user;

            if( tipo != '1'){
                return res.status(400).json({erro:'Somente usuários administradores podem apagar categorias.'});                
            }

            const { id } = req.params;
            const categoriaId = await CategoriaModel.findByPk(id);

            if (!categoriaId) {
                return res.status(400).json(`Usuario de id '${id}' não encontrado`);
            }
                        
            fs.unlinkSync('./uploads' + categoriaId.imagem);

            const categoriaRemove = await CategoriaModel.destroy({
                where: {
                    id
                }
            });

            return res.status(204).json({ message: 'Categoria removida' });
        } catch (error) {
            return res.status(400).json(error);
        }
    }
    public async getAll(req: Request, res: Response) {
        try {
            const categorias = await CategoriaModel.findAll();
            return res.status(200).json(categorias);
        } catch (error) {
            return res.status(400).json({erro: "Erro na listagem das categorias: ", error});
        }
    }

    public async getById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const categoriaId = await CategoriaModel.findByPk(id);
            if (!categoriaId) {
                return res.status(400).json(`Categoria de id '${id}' não encontrada.`);
            }
            return res.status(200).json(categoriaId);
        } catch (error) {
            return res.status(400).json({erro: 'Erro ao listar a categoria: ', error});
        }
    }
}

export default new CategoriaController();