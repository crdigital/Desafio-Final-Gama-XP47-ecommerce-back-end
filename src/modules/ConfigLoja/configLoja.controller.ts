import { Request, Response } from 'express';
import { ConfigLojaModel } from '../../models';
import fs from 'fs';

class ConfigLojaController {

    public async update(req: Request, res: Response) {
        try {

            const { id } = req.params;
            const { file } = req;

            if (!id) {
                return res.json("O parâmetro id é obrigatório.");
            }

            const dadosLoja = await ConfigLojaModel.findByPk(id);

            if (!dadosLoja) {
                return res.json({erro: "Erro na busca dos dados da loja."});
            }

            let payloadUpdate = {};

            if (file?.filename) {

                const logotipo = "/images/" + file?.filename;

                if (dadosLoja.logotipo == '/images/default-image.png') {
                    payloadUpdate = { logotipo };
                } else {
                    fs.unlinkSync('./uploads' + dadosLoja.logotipo);
                    payloadUpdate = { logotipo };
                }

            }

            Object.assign(payloadUpdate, req.body);

            const dadosLojaUpdate = await ConfigLojaModel.update(payloadUpdate, {
                where: { id },
            });

            return res.status(200).json(dadosLojaUpdate);

        } catch (error) {
            return res.status(400).json({erro: "Erro na atualização.", error});
        }
    }

    public async list(req: Request, res: Response) {
        try {
            const dadosLoja = await ConfigLojaModel.findOne();
            res.status(200).json(dadosLoja);
        } catch (error) {
            res.status(400).json({erro: "Erro ao listar os dados da loja.", error});
        }
    }

}

export default new ConfigLojaController();