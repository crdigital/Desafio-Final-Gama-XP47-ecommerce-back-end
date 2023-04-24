import { QueryInterface, DataTypes } from 'sequelize';

export default {
    up: (queryInterface: QueryInterface) => {
        return queryInterface.createTable('pedidos', {
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
            dataPedido:{
                type: DataTypes.STRING(45),
                allowNull: false,
            },
            status:{
                type: DataTypes.STRING(45),
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
        return queryInterface.dropTable('pedidos');
    }
}