import { Request, Response } from 'express';
import { ItensPedidoModel, PedidoModel, UsuarioModel } from '../../models';
import { Op } from 'sequelize';
import dataFunc from '../../utils/trataDatas';

class DashboardController {

    public async vendasPeriodo(req: Request, res: Response){
        try {
            let { periodo } = req.query; 

            let hoje = new Date();
            const periodoBusca = [];
            let index0: any;
            let index1: any;


            if(periodo == 'mes'){

                index0 = dataFunc.sliceDate(dataFunc.removeDays(hoje, 30));
                index1 = dataFunc.sliceDate(dataFunc.addDays(hoje, 30));
                periodoBusca[0] = index0;
                periodoBusca[1] = index1;

            }else if(periodo == 'trimestre'){

                index0 = dataFunc.sliceDate(dataFunc.removeDays(hoje, 90));
                index1 = dataFunc.sliceDate(dataFunc.addDays(hoje, 90));
                periodoBusca[0] = index0;
                periodoBusca[1] = index1;

            }else if(periodo == 'semestre'){

                index0 = dataFunc.sliceDate(dataFunc.removeDays(hoje, 180));
                index1 = dataFunc.sliceDate(dataFunc.addDays(hoje, 180));
                periodoBusca[0] = index0;
                periodoBusca[1] = index1;

            }else if(periodo == 'ano'){

                index0 = dataFunc.sliceDate(dataFunc.removeDays(hoje, 365));
                index1 = dataFunc.sliceDate(dataFunc.addDays(hoje, 365));
                periodoBusca[0] = index0;
                periodoBusca[1] = index1;

            }else{

                index0 = dataFunc.sliceDate(dataFunc.removeDays(hoje, Number(periodo)));
                index1 = dataFunc.sliceDate(dataFunc.addDays(hoje, Number(periodo)));
                periodoBusca[0] = index0;
                periodoBusca[1] = index1;                
            }

            const vendasPeriodo = await PedidoModel.findAll(
                {
                    where: {
                      dataPedido: {
                        [Op.between]: [periodoBusca[0], periodoBusca[1]],
                      }
                    },
                    include:[{ 
                        model: UsuarioModel, as: 'usuario',
                     },{ 
                         model: ItensPedidoModel, as: 'itensPedido'
                    }],
                }                           
            );

            return res.status(200).json(vendasPeriodo); 
        } catch (error) {
            return res.status(400).json({erro: "Erro na busca das vendas/pedido", error});
        }
    }    
}

export default new DashboardController();

// https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#operators

// https://www.youtube.com/watch?v=ZrgCsRS8zdY // query params

// https://pt.stackoverflow.com/questions/475013/como-contar-registros-ap%C3%B3s-uma-data-especifica-no-sequelize