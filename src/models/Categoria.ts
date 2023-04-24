import db from "../infra/database";
import { DataTypes, Model, Optional } from 'sequelize';

export interface ICategoria {
    id: number;
    nome: string;
    descricao: string;
    imagem: any;
    createdAt: Date;
    updatedAt: Date;
}

type CategoriaCreation = Optional<ICategoria, 'id' | 'createdAt' | 'updatedAt'>;

interface CategoriaInstance
  extends Model<ICategoria, CategoriaCreation>,
  ICategoria {
    created_at?: Date;
    updated_at?: Date;
}

const CategoriaModel = db.define<CategoriaInstance>(
    "categorias",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nome: {
            type: DataTypes.STRING(145),
        },
        descricao: {
            type: DataTypes.STRING(300),
        },
        imagem: {
            type: DataTypes.STRING(45),
        },
        createdAt: {
            type: DataTypes.DATE
        },
        updatedAt: {
            type: DataTypes.DATE
        },
    },{
        tableName: "categorias"
    }
);

export default CategoriaModel;