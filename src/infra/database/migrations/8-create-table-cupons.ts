import { QueryInterface, DataTypes } from 'sequelize';

export default {
    up: (queryInterface: QueryInterface) => {
        return queryInterface.createTable('cupons', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            nome: {
                type: DataTypes.STRING(145),
                allowNull:false,
            },        
            valor:{
                type: DataTypes.DOUBLE,
                allowNull: false,
            },        
            createdAt: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            updatedAt: {
                type: DataTypes.DATE,
                allowNull: false
            },
        })
    },
    down: (queryInterface: QueryInterface) => {
        return queryInterface.dropTable('cupons');
    }
}