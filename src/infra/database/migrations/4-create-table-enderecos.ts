import { QueryInterface, DataTypes } from 'sequelize';

export default {
    up: (queryInterface: QueryInterface) => {
        return queryInterface.createTable('enderecos', {
            id:{
                type:DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            idUsuario: {
                type: DataTypes.INTEGER,
                references: {
                  model: {
                    tableName: 'usuarios',
                  },
                  key: 'id'
                },
                allowNull: false
            },
            logradouro:{
                type: DataTypes.STRING(145),
                allowNull: false,
            },
            numero:{
                type: DataTypes.STRING(45),
                allowNull: false,
            },
            bairro:{
                type: DataTypes.STRING(145),
                allowNull: false,
            },
            cidade:{
                type: DataTypes.STRING(145),
                allowNull: false,
            },
            estado:{
                type: DataTypes.STRING(2),
                allowNull: false,
            },
            cep:{
                type: DataTypes.STRING(12),
                allowNull: false,
            },
            tipo:{
                type: DataTypes.STRING(2),
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
        return queryInterface.dropTable('enderecos');
    }
}