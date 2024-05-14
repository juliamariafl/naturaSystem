import React from "react";
import { Routes, Route } from "react-router-dom";
import Cadastro from "./Pages/Cadastro/CadastroUsuario";
import ListaUsuarios from "./Pages/Tabelas/ListaUsuario/index";
import Produtos from "./Pages/Produtos/CadastroProdutos";
import RegistroProduto from "./Pages/Produtos/RegistroProdutros/index";

const Rotas = () => {
  return (
    <>
      <Routes>
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/Produtos" element={<Produtos />} />
        <Route path="/listaUsuarios" element={<ListaUsuarios />} />
        <Route path="/registroProduto" element={<RegistroProduto />} />
      </Routes>
    </>
  );
};

export default Rotas;
