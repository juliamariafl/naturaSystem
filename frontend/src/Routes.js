import React from "react";
import {Routes, Route} from "react-router-dom";
import Cadastro from "./Pages/Cadastro/CadastroCliente";
import ListaClientes from "./Pages/Tabelas/ListaCliente/index";
import ListaFuncionario from "./Pages/Tabelas/ListaFuncionario/index";
import ListaFornecedor from './Pages/Tabelas/ListaFornecedor/index';
import CadastroProdutos from "./Pages/Produtos/CadastroProdutos/index";
import RegistroProduto from './Pages/Produtos/RegistroProdutros/index';
import Estoque from './Pages/Estoque/index';
import Financeiro from "./Pages/Financeiro";

const Rotas = () => {
  return (
    <>
      <Routes>
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/cadastroProdutos" element={<CadastroProdutos />} />
        <Route path="/listaClientes" element={<ListaClientes />} />
        <Route path="/listaFuncionario" element={<ListaFuncionario />} />
        <Route path="/registroProduto" element={<RegistroProduto />} />
        <Route path="/estoque" element={<Estoque />} />
        <Route path="/financeiro" element={<Financeiro />} />
        <Route path="/listaFornecedor" element={<ListaFornecedor />} />
      </Routes>
    </>
  );
};

export default Rotas;
