//Produtos
import React from "react";
import CadastroFormProduto from '../../../Components/CadastroFormProduto';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './produtos.css'

const CadastroProdutos = () => {
  return (
    <>
      <Card className="card" sx={{ maxWidth: 345 }}>
        <CardActionArea className="CardActionArea">
          <CardContent className="CardContent">
            <Typography gutterBottom variant="h4" component="div">
              Novo Produto
            </Typography>
            <div className="InputProduto">
              <CadastroFormProduto />
            </div>
          </CardContent>
        </CardActionArea>
      </Card>

    </>
  );
};

export default CadastroProdutos;