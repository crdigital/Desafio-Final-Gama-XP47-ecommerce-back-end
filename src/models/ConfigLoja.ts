import db from "../infra/database";
import { DataTypes, Model, Optional } from "sequelize";

export interface IConfigLoja {
    id: number;
    nomeFantasia: string;
    endCompleto: string;
    email: string;
    fone: string;
    instagram: string;
    facebook: string;
    twitter: string;
    logotipo:string;
    createdAt: Date;
    updatedAt: Date;
}

type ConfigLojaCreation = Optional<IConfigLoja, 'id' | 'createdAt' | 'updatedAt'>;

interface ConfigLojaInstance
  extends Model<IConfigLoja, ConfigLojaCreation>,
  IConfigLoja {
    created_at?: Date;
    updated_at?: Date;
}

const ConfigLojaModel = db.define<ConfigLojaInstance>(
    "ConfigLoja",
    {
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
    },{
        tableName: 'configLoja',
    }
);

export default ConfigLojaModel;