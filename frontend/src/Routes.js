import React from "react";
import { Routes, Route } from "react-router-dom";
import Cadastro from "./Pages/Cadastro/CadastroUsuario";
import ListaUsuarios from "./Pages/Tabelas/ListaUsuario/index";

const Rotas = () => {
  return (
    <>
      <Routes>
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/listaUsuarios" element={<ListaUsuarios />} />
      </Routes>
    </>
  );
};

export default Rotas;
