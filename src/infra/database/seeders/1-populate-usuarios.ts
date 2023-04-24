import { QueryInterface } from 'sequelize';
import bcrypt from 'bcryptjs';

export default {
    up: (queryInterface: QueryInterface) => {
        return queryInterface.bulkInsert('usuarios',[
            {
                nome:"Administrdor",
                email:"admin@admin.com",
                senha:bcrypt.hashSync("admin", 10),
                fone:"(00)0 0000-0000",
                tipo:"1",
                createdAt: new Date(),
                updatedAt: new Date(),
            }
        ]);
    },
    down: (queryInterface: QueryInterface) => {
        return queryInterface.bulkDelete('usuarios', {}, {});
    }
}