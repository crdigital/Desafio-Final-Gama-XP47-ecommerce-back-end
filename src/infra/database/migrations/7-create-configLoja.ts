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
                type: DataTypes.STRING,
                allowNull: false,
            },
            endCompleto: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            fone: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            instagram: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            facebook: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            twitter:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            logotipo:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            createdAt:{
                type: DataTypes.DATE,
                allowNull: false,
            },
            updatedAt:{
                type: DataTypes.DATE,
                allowNull: false,
            }
        });
    },
    down: (queryInterface: QueryInterface) => {
        return queryInterface.dropTable('configLoja');
    }
}