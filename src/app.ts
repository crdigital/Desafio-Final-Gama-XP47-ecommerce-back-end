import App from "./infra/app";

import MainRoutes from "./modules/Main/main.routes";
import UsuarioRoutes from "./modules/Usuario/usuario.routes";
import AuthRoutes from "./modules/Auth/auth.routes";
import CategoriaRoutes from "./modules/Categoria/categoria.routes";
import ProdutoRoutes from "./modules/Produto/produto.routes";
import EnderecoRoutes from "./modules/Endereco/endereco.routes";
import PedidoVendasRoutes from "./modules/PedidoVendas/pedido_vendas.routes";
import ConfigLojaRoutes from "./modules/ConfigLoja/configLoja.routes";
import DashboardRoutes from "./modules/dashboard/dashboard.routes";

const app = new App([
    AuthRoutes.getRoutes(), 
    MainRoutes.getRoutes(), 
    UsuarioRoutes.getRoutes(),
    CategoriaRoutes.getRoutes(),
    ProdutoRoutes.getRoutes(),
    EnderecoRoutes.getRoutes(),
    PedidoVendasRoutes.getRoutes(),
    ConfigLojaRoutes.getRoutes(),
    DashboardRoutes.getRoutes()
]/*, Number(process.env.PORT)*/);

export default app;