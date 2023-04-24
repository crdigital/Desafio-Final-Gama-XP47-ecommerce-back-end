import { QueryInterface } from 'sequelize';
import bcrypt from 'bcryptjs';

export default {
    up: (queryInterface: QueryInterface) => {
        return queryInterface.bulkInsert('enderecos',[
            {
                idUsuario: 4,
                logradouro:"Rua 21 de Abril",
                numero:"123",
                bairro:"Centro",
                cidade:"Barra do Garças",
                estado:"MT",
                cep:"76800-000",
                tipo:"1",
                createdAt: new Date(),
                updatedAt: new Date(),
            }
        ]);
    },
    down: (queryInterface: QueryInterface) => {
        return queryInterface.bulkDelete('enderecos', {}, {});
    }
}