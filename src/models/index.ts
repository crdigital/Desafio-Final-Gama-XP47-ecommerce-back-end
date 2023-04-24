import UsuarioModel from "./Usuario";
import EnderecoModel from "./Endereco";
import CategoriaModel from "./Categoria";
import ProdutoModel from "./Produto";
import PedidoModel from "./Pedido";
import ItensPedidoModel from "./ItensPedido";
import ConfigLojaModel from "./ConfigLoja";
import CupomModel from "./Cupom";

/**
 * Relations
 * */

// Usuario/Endereco
UsuarioModel.hasOne(EnderecoModel,{
    foreignKey: 'idUsuario', as: 'endereco'
});
EnderecoModel.belongsTo(UsuarioModel,{
    foreignKey: 'idUsuario', as: 'usuario'
});

// Produto/Categoria
CategoriaModel.hasOne(ProdutoModel,{
    foreignKey: 'idCategoria', as: 'produto'
});
ProdutoModel.belongsTo(CategoriaModel,{
    foreignKey: 'idCategoria', as: 'categoria'
});

// Pedido/Usuário
UsuarioModel.hasMany(PedidoModel,{
    foreignKey: 'idUsuario', as: 'pedido'
});
PedidoModel.belongsTo(UsuarioModel,{
    foreignKey: 'idUsuario', as: 'usuario'
});

// Pedido/Itens Pedido
PedidoModel.hasMany(ItensPedidoModel,{
    foreignKey: 'idPedido', as: 'itensPedido'
});
ItensPedidoModel.belongsTo(PedidoModel,{
    foreignKey: 'idPedido', as: 'pedido'
});

export {
    UsuarioModel,
    EnderecoModel,
    CategoriaModel,
    ProdutoModel,
    PedidoModel,
    ItensPedidoModel,
    ConfigLojaModel,
    CupomModel
}
