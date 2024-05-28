//Produtos
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import TabelaRegistroProduto from "../../Components/TabelaRegistroProduto";
import "./Estoque.css";

const Estoque = () => {
  return (
    <>
      <div>
        <h1 className="estoqueProduto mt-5">Registro de Estoque de Produtos</h1>
        <TabelaRegistroProduto />
      </div>
    </>
  );
};

export default Estoque;
