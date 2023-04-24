import db from "../infra/database";
import { DataTypes, Model, Optional } from 'sequelize';

export interface IEndereco {
    id: number;
    idUsuario: number;
    logradouro: string;
    numero:string;
    bairro: string;
    cidade: string;
    estado:string;
    cep:string;
    tipo:string;
    createdAt: Date;
    updatedAt: Date;
}

type EnderecoCreation = Optional<IEndereco, "id" | "createdAt" | "updatedAt">;

interface EnderecoInstance
    extends Model<IEndereco, EnderecoCreation>,
 IEndereco {
    created_at?: Date;
    updated_at?: Date;
 }   

const EnderecoModel = db.define<EnderecoInstance>(
    "Enderecos",
    {
        id:{
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        idUsuario: {
            type: DataTypes.INTEGER,
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
    },
    {
        tableName: "enderecos",
    }
);

export default EnderecoModel;