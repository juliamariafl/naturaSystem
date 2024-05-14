//Lista de Usuarios
import React from "react";
<<<<<<< HEAD
<<<<<<< HEAD
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./RegistroProdutos.css";
=======
=======
>>>>>>> ce00ef35239bbd4f4109c01cef58b8c0a7951a5a
import TabelaCadastroProduto from '../../../Components/TabelaCadastroProduto';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { TfiMoney } from "react-icons/tfi";
import { MdOutlineSell } from "react-icons/md";
import { MdOutlineInventory } from "react-icons/md";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import './RegistroProdutos.css';
<<<<<<< HEAD
>>>>>>> bd1e2ff1d6c5766fee922308e1f3f414482d8f7f


const RegistroProduto = () => {
<<<<<<< HEAD
  return (
    <>
      <div>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <div></div>
    </>
  );
=======
=======


const RegistroProduto = () => {
>>>>>>> ce00ef35239bbd4f4109c01cef58b8c0a7951a5a
    return (
        <>
            <Container>
                <Row className="cardEspecial">
                    <Col md={4}>
                        <Link className='listas' to="/listaUsuarios">
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardContent>
                                        <TfiMoney />
                                        <Typography gutterBottom variant="h5" component="div">
                                            Financeiro
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                    </Col>
                    <Col md={4}>
                        <Link className='listas' to="/listaUsuarios">
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardContent>
                                        <MdOutlineInventory />
                                        <Typography gutterBottom variant="h5" component="div">
                                            Estoque
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                    </Col>
                    <Col md={4}>
                        <Link className='listas' to="/listaUsuarios">
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardContent>
                                        <MdOutlineSell />
                                        <Typography gutterBottom variant="h5" component="div">
                                            Vendas
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                    </Col>
                </Row>
            </Container>
            <div>
                <TabelaCadastroProduto />
            </div>
        </>
    );
<<<<<<< HEAD
>>>>>>> bd1e2ff1d6c5766fee922308e1f3f414482d8f7f
=======
>>>>>>> ce00ef35239bbd4f4109c01cef58b8c0a7951a5a
};

export default RegistroProduto;
