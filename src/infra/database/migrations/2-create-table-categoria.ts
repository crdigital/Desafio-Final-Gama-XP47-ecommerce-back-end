import { QueryInterface, DataTypes } from 'sequelize';

export default {
    up: (queryInterface: QueryInterface) => {
        return queryInterface.createTable('categorias', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            nome: {
                type: DataTypes.STRING(145),
                allowNull:false,
            },
            descricao: {
                type: DataTypes.STRING(300),
                allowNull:false,
            },
            imagem: {
                type: DataTypes.STRING(300),
                allowNull:false,
            },
            createdAt: {
                type: DataTypes.DATE,
                allowNull:false,
            },
            updatedAt: {
                type: DataTypes.DATE,
                allowNull:false,
            },
        })
    },
    down: (queryInterface: QueryInterface) => {
        return queryInterface.dropTable('categorias');
    }
}