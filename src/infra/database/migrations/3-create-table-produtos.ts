import { QueryInterface, DataTypes } from 'sequelize';

export default {
    up: (queryInterface: QueryInterface) => {
        return queryInterface.createTable('produtos', {
            id:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
              },
              idCategoria: {
                type: DataTypes.INTEGER,
                references: {
                  model: {
                    tableName: 'categorias',
                  },
                  key: 'id'
                },
                allowNull: false
              },
              nome:{
                type: DataTypes.STRING(155),
                allowNull: false,
              },
              descricao:{
                type: DataTypes.STRING(500),
                allowNull: false,
              },
              preco:{
                type: DataTypes.DOUBLE,
                allowNull: false,
              },
              imagem:{
                type: DataTypes.TEXT,
                allowNull: false,
              },  
              status:{
                type: DataTypes.CHAR(1),
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
        return queryInterface.dropTable('produtos');
    }
}