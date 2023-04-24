import db from '../infra/database';
import { DataTypes, Model, Optional } from 'sequelize';

export interface IProduto {
    id:number;
    idCategoria:number;
    nome:string;
    descricao:Text;
    preco:number;
    imagem: any;
    status:string;
    createdAt: Date;
    updatedAt: Date;
}

type ProdutoCreation = Optional<IProduto, "id" | "createdAt" | "updatedAt">;

interface ProdutoInstance
  extends Model<IProduto, ProdutoCreation>,
  IProduto {
    created_at?: Date;
    updated_at?: Date;
}

const ProdutoModel = db.define<ProdutoInstance>(
    "Produtos",
    {
      id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      idCategoria: {
        type: DataTypes.INTEGER,
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
    },
    {
        tableName:"produtos",
    }
);

export default ProdutoModel;