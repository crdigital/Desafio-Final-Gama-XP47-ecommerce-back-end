import db from "../infra/database";
import { DataTypes, Model, Optional } from 'sequelize';

export interface ItensPedido {
    id: number;
    idPedido: number;
    idProduto: number;
    preco: number;
    quantidade: number;
    createdAt: Date;
    updatedAt: Date;
}

type ItensPedidoCreation = Optional<ItensPedido, "id" | "createdAt" | "updatedAt">;

interface ItensPedidoInstance
    extends Model<ItensPedido, ItensPedidoCreation>,
    ItensPedido {
    created_at?: Date;
    updated_at?: Date;
}

const ItensPedidoModel = db.define<ItensPedidoInstance>(
    "ItensPedido",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        idPedido: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        idProduto: {
            type: DataTypes.INTEGER,
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
    },
    {
        tableName: "itensPedido",
    }
);

export default ItensPedidoModel;