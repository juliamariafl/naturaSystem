import React from "react";
import {Routes, Route} from "react-router-dom";
import Cadastro from "./Pages/Cadastro/CadastroUsuario";
import ListaUsuarios from "./Pages/Tabelas/ListaUsuario/index";
import ListaFuncionario from "./Pages/Tabelas/ListaFuncionario/index";
import ListaFornecedor from './Pages/Tabelas/ListaFornecedor/index';
import CadastroProdutos from "./Pages/Produtos/CadastroProdutos/index";
import RegistroProduto from './Pages/Produtos/RegistroProdutros/index';

const Rotas = () => {
  return (
    <>
      <Routes>
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/cadastroProdutos" element={<CadastroProdutos />} />
        <Route path="/listaUsuarios" element={<ListaUsuarios />} />
        <Route path="/listaFuncionario" element={<ListaFuncionario />} />
        <Route path="/registroProduto" element={<RegistroProduto />} />
        <Route path="/listaFornecedor" element={<ListaFornecedor />} />
      </Routes>
    </>
  );
};

export default Rotas;
