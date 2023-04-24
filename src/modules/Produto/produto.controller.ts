import { Request, Response } from 'express';
import { CategoriaModel } from '../../models';
import ProdutoModel from '../../models/Produto';
import fs from 'fs';

class ProdutoController {

    public async create(req: Request, res: Response) {
        try {
            const { file } = req;

            let { idCategoria, nome, descricao, preco, status } = req.body;            
            
            if(!file?.filename){
                return res.json('O arquivo de imagem é obrigatório.');
            } 

            let imagem = "/images/" + file?.filename;
            idCategoria = Number(idCategoria);
            preco = Number(preco);

            const produto = await ProdutoModel.create({
                idCategoria, nome, descricao, preco, imagem, status
            });
            return res.status(201).json(produto);

        } catch (error) {
            return res.status(400).json({erro:"Erro ao criar produto."});
        }
    }

    public async update(req: Request, res: Response) {
        try {

            const { id } = req.params;
            const { file } = req;
            let { idCategoria, nome, descricao, preco, status } = req.body;  

            if (!id) {
                return res.json("O parâmetro id é obrigatório.");
            }

            const produto = await ProdutoModel.findByPk(id);

            if (!produto) {
                return res.json(`produto de id '${id} não encontrado.'`);
            }
         
            idCategoria = Number(idCategoria);
            preco = Number(preco);     
            
            let produtoUpdate: any;
            
            if(file?.filename){
                const imagem = "/images/" + file?.filename; 

                if(produto.imagem != imagem){
                    fs.unlinkSync('./uploads' + produto.imagem);
                }   

                produtoUpdate = await ProdutoModel.update({
                    idCategoria, nome, descricao, preco, imagem, status 
                }, {
                    where: { id },
                });
               
                return res.status(200).json(produtoUpdate);

             }else{
                produtoUpdate = await ProdutoModel.update({
                    idCategoria, nome, descricao, preco, status 
                }, {
                    where: { id },
                });
    
                return res.status(200).json(produtoUpdate);
             }   

        } catch (error) {
            return res.status(400).json({erro:"Erro ao atualizar produto."});
        }
    }

    public async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const produtoId = await ProdutoModel.findByPk(id);
            if (!produtoId) {
                return res.status(400).json(`Produto de id '${id}' não encontrado`);
            }

            fs.unlinkSync('./uploads' + produtoId.imagem);

            const produtoRemove = await ProdutoModel.destroy({
                where: {
                    id
                }
            });
            return res.status(204);
        } catch (error) {
            return res.status(400).json({erro:"Erro ao remover produto."});
        }
    }
    public async getAll(req: Request, res: Response) {
        try {
            const produtos = await ProdutoModel.findAll({ 
                include:{ model: CategoriaModel, as: 'categoria'}
            });
            return res.status(200).json(produtos);
        } catch (error) {
            return res.status(400).json({erro:"Erro ao listar produto."});
        }
    }

    public async getById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const produtoId = await ProdutoModel.findByPk(id,{ 
                include:{ model: CategoriaModel, as: 'categoria'}
            });
            if (!produtoId) {
                return res.status(400).json(`Produto de id '${id}' não encontrado.`);
            }
            return res.status(200).json(produtoId);
        } catch (error) {
            return res.status(400).json({erro:"Erro ao listar produto."});
        }
    }
}

export default new ProdutoController();