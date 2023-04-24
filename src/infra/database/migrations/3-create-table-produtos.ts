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
                type: DataTypes.STRING(255),
                allowNull: false,
              },
              descricao:{
                type: DataTypes.TEXT,
                allowNull: false,
              },
              preco:{
                type: DataTypes.DOUBLE,
                allowNull: false,
              },
              imagem:{
                type: DataTypes.STRING(255),
                allowNull: false,
              },
              status:{
                type: DataTypes.STRING(145),
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