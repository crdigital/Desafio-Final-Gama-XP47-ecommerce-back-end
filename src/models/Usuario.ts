import db from '../infra/database';
import {DataTypes, Optional, Model} from 'sequelize';

export interface IUsuario {
    id: number;
    nome: string;
    email: string;
    senha: string;
    fone: string;
    tipo: string;
    createdAt: Date;
    updatedAt: Date;
}

type UsuarioCreation = Optional<IUsuario, 'id' | 'createdAt' | 'updatedAt'>;

interface UsuarioInstance
  extends Model<IUsuario, UsuarioCreation>,
  IUsuario {
    created_at?: Date;
    updated_at?: Date;
}

const UsuarioModel = db.define<UsuarioInstance>(
    "Usuarios",
    {
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
    },
    {
        tableName: "usuarios",
    }
);

export default UsuarioModel;