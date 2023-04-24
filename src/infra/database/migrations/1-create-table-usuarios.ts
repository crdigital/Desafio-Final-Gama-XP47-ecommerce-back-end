import { QueryInterface, DataTypes } from 'sequelize';

export default {
    up: (queryInterface: QueryInterface) => {
        return queryInterface.createTable('usuarios', {
            id:{
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            nome:{
                type: DataTypes.STRING(255),
                allowNull:false,
            },
            email:{
                type: DataTypes.STRING(145),
                unique: true,
                allowNull:false,
            },
            senha:{
                type: DataTypes.STRING(300),
                allowNull:false,
            },
            fone:{
                type: DataTypes.STRING(45),
                allowNull:false,
            },
            tipo:{
                type: DataTypes.STRING(2),
                defaultValue: "2",
                allowNull:false,
            },
            createdAt:{
                type: DataTypes.DATE,
                allowNull:false,
            },
            updatedAt:{
                type: DataTypes.DATE,
                allowNull:false,
            }
        })
    },
    down: (queryInterface: QueryInterface) => {
        return queryInterface.dropTable('usuarios');
    }
}