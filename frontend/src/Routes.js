import React from "react";
import { Routes, Route } from "react-router-dom";
import Cadastro from "./Pages/Cadastro/CadastroUsuario";
import ListaUsuarios from "./Pages/Tabelas/ListaUsuario/index";
<<<<<<< HEAD
import Produtos from "./Pages/Produtos/CadastroProdutos";
import RegistroProduto from "./Pages/Produtos/RegistroProdutros/index";
=======
import ListaFuncionario from "./Pages/Tabelas/ListaFuncionario/index";
import ListaFornecedor from './Pages/Tabelas/ListaFornecedor/index';
import CadastroProdutos from "./Pages/Produtos/CadastroProdutos/index";
import RegistroProduto from './Pages/Produtos/RegistroProdutros/index';
>>>>>>> bd1e2ff1d6c5766fee922308e1f3f414482d8f7f

const Rotas = () => {
  return (
    <>
      <Routes>
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/cadastroProdutos" element={<CadastroProdutos />} />
        <Route path="/listaUsuarios" element={<ListaUsuarios />} />
        <Route path="/registroProduto" element={<RegistroProduto />} />
<<<<<<< HEAD
=======
        <Route path="/listaFornecedor" element={<ListaFornecedor />} />
>>>>>>> bd1e2ff1d6c5766fee922308e1f3f414482d8f7f
      </Routes>
    </>
  );
};

export default Rotas;
