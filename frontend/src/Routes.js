import React from "react";
import {Routes, Route} from "react-router-dom";
import Cadastro from "./Pages/Cadastro/CadastroUsuario";
import ListaUsuarios from "./Pages/Tabelas/ListaUsuario/index";
import ListaFuncionario from "./Pages/Tabelas/ListaFuncionario/index";
import ListaFornecedor from './Pages/Tabelas/ListaFornecedor/index';
import Produtos from "./Pages/Produtos/CadastroProdutos";
import RegistroProduto from './Pages/Produtos/RegistroProdutros/index';

const Rotas = () => {
  return (
    <>
      <Routes>
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/Produtos" element={<Produtos />} />
        <Route path="/listaUsuarios" element={<ListaUsuarios />} />
        <Route path="/listaFuncionario" element={<ListaFuncionario />} />
        <Route path="/registroProduto" element={<RegistroProduto />} />
        <Route path="/registroProduto" element={<RegistroProduto />} />
        <Route path="/listaFornecedor" element={<ListaFornecedor />} />
      </Routes>
    </>
  );
};

export default Rotas;
