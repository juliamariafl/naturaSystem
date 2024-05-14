//Produtos
import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CadastroFormCliente from "../../../Components/CadastroFormCliente";
import '../CadastroProdutos/produtos.css';

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
              <CadastroFormCliente />
            </div>
          </CardContent>
        </CardActionArea>
      </Card>

    </>
  );
};

export default CadastroProdutos;