import db from "../infra/database";
import { DataTypes, Model, Optional } from 'sequelize';

export interface ICupom {
    id: number;
    nome: string;
    valor: number;
    createdAt: Date;
    updatedAt: Date;
}

type CupomCreation = Optional<ICupom, 'id' | 'createdAt' | 'updatedAt'>;

interface CupomInstance
  extends Model<ICupom, CupomCreation>,
  ICupom {
    created_at?: Date;
    updated_at?: Date;
}

const CupomModel = db.define<CupomInstance>(
    "Cupons",
    {
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
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    },{
        tableName: "cupons",
    }
);

export default CupomModel;