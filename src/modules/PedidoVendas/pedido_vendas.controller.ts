import { Request, Response } from 'express';
import { PedidoModel, UsuarioModel } from '../../models';
import { ItensPedidoModel } from '../../models';
import { NUMBER } from 'sequelize';

class PedidoVendasController {

    public async create(req: Request, res: Response) {

        try {

            const   id   = Number(req.user) ;

            const {
                dataPedido,                
                valorTotal,
                status,
                itensPedido
            } = req.body;
          

            const novoPedido = await PedidoModel.create({
                idUsuario: id,
                dataPedido,                
                valorTotal,
                status
            });

            if(!novoPedido){
                res.status(400).json('Erro ao inserir o pedido!');
            }

            const pedidoId = novoPedido.id;               

            const newItensPedido =  itensPedido.map( (itemPedido: Object) => {
                return Object.assign(itemPedido, {idPedido: pedidoId});                
            });

            const insertBulkItensPedido = await ItensPedidoModel.bulkCreate(newItensPedido);

            if(!insertBulkItensPedido){
                res.status(400).json('Erro ao inserir os itens do pedido.');
            }

            let pedidoCompleto =  Object.assign({}, novoPedido, insertBulkItensPedido);

            return res.status(201).json(pedidoCompleto);

        } catch (error) {
            return res.status(400).json({erro: `Erro ao inserir o pedido/venda. Detalhes: ${error} `});
        }
    }

    public async update(req: Request, res: Response) {
        try {

            const { id } = req.params;

            if (!id) {
                return res.json("O parâmetro id é obrigatório.");
            }            

            const pedido = await PedidoModel.findByPk(id);

            if (!pedido) {
                return res.json(`Pedido de id '${id} não encontrado.'`);
            }

            let payloadUpdate = { };

            Object.assign(payloadUpdate, req.body);

            const pedidoUpdate = await PedidoModel.update(payloadUpdate, {
                where: { id },
            });

            return res.status(200).json(pedidoUpdate);

        } catch (error) {
            return res.status(500).json({erro: "Erro na atualização do pedido/venda", error});
        }
    }

    public async getAll(req: Request, res: Response){
        try {
            const pedidos = await PedidoModel.findAll({
                include:[{ 
                    model: UsuarioModel, as: 'usuario',
                 },{ 
                     model: ItensPedidoModel, as: 'itensPedido'
                }],                
            })
            return res.status(200).json(pedidos);
        } catch (error) {
            return res.status(400).json({erro: `Erro ao buscar as vendas. Detalhes: ${error}`});
        }
    }
    public async getByid(req: Request, res: Response){
        try {

            const { id } = req.params;

            if(!id){
                return res.status(400).json('O parâmetro id é obrigatório.');
            }

            const pedidoId = await PedidoModel.findByPk(id,{
                include:[{ 
                    model: UsuarioModel, as: 'usuario',
                 },{ 
                     model: ItensPedidoModel, as: 'itensPedido'
                }],           
            })
            if(!pedidoId){
                return res.status(400).json(`Pedido de id ${id} não encontrado.`);
            }
            return res.status(200).json(pedidoId);
        } catch (error) {
            return res.status(400).json({erro: "Erro ao buscar a venda/pedido.", error});
        }
    }
}

export default new PedidoVendasController();

