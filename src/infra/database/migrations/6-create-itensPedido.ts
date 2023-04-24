import { QueryInterface, DataTypes } from 'sequelize';

export default {
    up: (queryInterface: QueryInterface) => {
        return queryInterface.createTable('itensPedido', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            idPedido: {
                type: DataTypes.INTEGER,
                references: {
                    model: {
                      tableName: 'pedidos',
                    },
                    key: 'id'
                  },
                allowNull: false,
            },
            idProduto: {
                type: DataTypes.INTEGER,
                references: {
                    model: {
                      tableName: 'produtos',
                    },
                    key: 'id'
                  },
                allowNull: false,
            },
            preco:{
                type: DataTypes.DOUBLE,
                allowNull: false,
            },
            quantidade: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            createdAt: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            updatedAt: {
                type: DataTypes.DATE,
                allowNull: false,
            },
        });
    },
    down: (queryInterface: QueryInterface) => {
        return queryInterface.dropTable('itensPedido');
    }
}