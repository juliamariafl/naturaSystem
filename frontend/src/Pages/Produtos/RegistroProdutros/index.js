//Lista de Usuarios
import React from "react";
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


const RegistroProduto = () => {
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
};

export default RegistroProduto;
