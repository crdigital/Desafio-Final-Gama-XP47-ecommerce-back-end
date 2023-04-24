import db from "../infra/database";
import { DataTypes, Model, Optional } from 'sequelize';

export interface IPedido {
    id: number;
    idUsuario: number;
    valorTotal: number;
    dataPedido: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
}

type PedidoCreation = Optional<IPedido, 'id' | 'createdAt' | 'updatedAt'>;

interface PedidoInstance
  extends Model<IPedido, PedidoCreation>,
  IPedido {
    created_at?: Date;
    updated_at?: Date;
}


const PedidoModel = db.define<PedidoInstance>(
    "Pedidos",
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idUsuario:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        dataPedido:{
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        valorTotal:{
            type: DataTypes.DOUBLE,
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
    },    
    {
        tableName: "pedidos",
    }
);

export default PedidoModel;