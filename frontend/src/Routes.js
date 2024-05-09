import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Cadastro from "./Pages/Cadastro";
import ListaUsuarios from "./Pages/ListaUsuarios";
import ListaFuncionario from "./Pages/ListaFuncionario";
import ListaFornecedor from './Pages/ListaFornecedor';

const Rotas = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/listaUsuarios" element={<ListaUsuarios />} />
        <Route path="/listaFuncionario" element={<ListaFuncionario />} />
        <Route path="/listaFornecedor" element={<ListaFornecedor />} />
      </Routes>
    </>
  );
};

export default Rotas;
