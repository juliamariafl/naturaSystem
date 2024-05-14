//Produtos
import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import TabelaCadastroProduto from "../../Components/TabelaCadastroProduto";
import './Estoque.css'

const Estoque = () => {
  return (
    <>
      <div>
        <h3 className="estoqueProduto">Estoque</h3>
        <TabelaCadastroProduto />
      </div>

    </>
  );
};

export default Estoque;