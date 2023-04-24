import { QueryInterface, DataTypes } from 'sequelize';

export default {
    up: (queryInterface: QueryInterface) => {
        return queryInterface.createTable('configLoja', {
            id:{
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            nomeFantasia:{
                type: DataTypes.STRING(145),
                allowNull: false,
            },
            endCompleto: {
                type: DataTypes.STRING(300),
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING(145),
                allowNull: false,
            },
            fone: {
                type: DataTypes.STRING(45),
                allowNull: false,
            },
            instagram: {
                type: DataTypes.STRING(155),
                allowNull: false,
            },
            facebook: {
                type: DataTypes.STRING(155),
                allowNull: false,
            },
            twitter:{
                type: DataTypes.STRING(155),
                allowNull: false,
            },
            logotipo:{
                type: DataTypes.STRING(300),
                allowNull: false,
            },
            createdAt:{
                type: DataTypes.DATE,
                allowNull: false,
            },
            updatedAt:{
                type: DataTypes.DATE,
                allowNull: false,
            },
        });
    },
    down: (queryInterface: QueryInterface) => {
        return queryInterface.dropTable('configLoja');
    }
}