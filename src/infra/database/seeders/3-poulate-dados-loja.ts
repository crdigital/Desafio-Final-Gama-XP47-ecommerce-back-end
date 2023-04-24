import { QueryInterface } from 'sequelize';

export default {
    up: (queryInterface: QueryInterface) => {
        return queryInterface.bulkInsert('configLoja',[
            {
                nomeFantasia:"Ecommerce Gama xp47 2023",
                endCompleto: "Av Paulista nº 2055, Bela Vista São Paulo SP",
                email:"admin@admin.com",
                fone:"(11)9 9999-8888",
                instagram:"@ecommercexp472023",
                facebook:"@ecommercexp472023",
                twitter:"@ecommercexp472023",
                logotipo:"/images/default-image.png",
                createdAt: new Date(),
                updatedAt: new Date(),
            }
        ]);
    },
    down: (queryInterface: QueryInterface) => {
        return queryInterface.bulkDelete('configLoja', {}, {});
    }
}