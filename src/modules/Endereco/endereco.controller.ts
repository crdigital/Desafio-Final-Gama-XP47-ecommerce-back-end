import { Request, Response } from 'express';
import EnderecoModel from '../../models/Endereco';

class EnderecoController {

    public async create(req: Request, res: Response) {

        try {
            const {
                idUsuario,
                logradouro,
                numero,
                bairro,
                cidade,
                estado,
                cep,
                tipo
            } = req.body;

            const endereco = await EnderecoModel.create({ ...req.body });
            return res.status(201).json(endereco);

        } catch (error) {
            return res.status(400).json(error);
        }
    }

    public async update(req: Request, res: Response) {
        try {

            const { id } = req.params;

            if (!id) {
                return res.json("O parâmetro id é obrigatório.");
            }            

            const endereco = await EnderecoModel.findByPk(id);

            if (!endereco) {
        return res.json(`Endereço não encontrado.'`);
            }

            let payloadUpdate = { };           
           

            Object.assign(payloadUpdate, req.body);

            const endercoUpdate = await EnderecoModel.update(payloadUpdate, {
                where: { id },
            });

            return res.status(200).json(endercoUpdate);

        } catch (error) {
            return res.status(500).json(`Ocorreu algum erro na atualização do endereço: ${error}`);
        }
    }
}

export default new EnderecoController();