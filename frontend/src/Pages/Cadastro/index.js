//Cadastro
import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CadastroFormCliente from "../../Components/CadastroFormCliente";
import CadastroFormFuncionario from "../../Components/CadastroFormFuncionario";
import CadastroFormFornecedor from "../../Components/CadastroFormFornecedor";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "../Cadastro/cadastro.css";

const Cadastro = () => {
  const [show, setShow] = useState(false);
  const [shows, setShows] = useState(false);
  const [showt, setShowt] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloses = () => setShows(false);
  const handleShows = () => setShows(true);

  const handleCloset = () => setShowt(false);
  const handleShowt = () => setShowt(true);
  return (
    <>
      <Card className="cardCadastro">
        <CardActionArea>
          <CardContent className="CardComTudo">
            <div className="BoxCadastro">
              <div>
                <h2 className="cadastro">Cadastro</h2>
                <p className="cadastro">Quem você deseja cadastrar?</p>
              </div>

              <Dropdown className="dropCadastro">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Categoria
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {/* cadastro usuario */}
                  <div className="DropUsuario">
                    <Dropdown.Item
                      variant="primary"
                      onClick={handleShow}
                      href="#/action-1"
                    >
                      Cliente
                    </Dropdown.Item>
                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Cadastro de Clientes</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <CadastroFormCliente />
                      </Modal.Body>
                    </Modal>
                  </div>
                  {/* cadastro Funcionario */}
                  <div className="DropUsuario">
                    <Dropdown.Item
                      variant="primary"
                      onClick={handleShows}
                      href="#/action-2"
                    >
                      Funcionário
                    </Dropdown.Item>
                    <Modal show={shows} onHide={handleCloses}>
                      <Modal.Header closeButton>
                        <Modal.Title>Cadastro de Funcionário</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <CadastroFormFuncionario />
                      </Modal.Body>
                    </Modal>
                  </div>
                  {/* cadastro Fonecedor */}
                  <div className="DropUsuario">
                    <Dropdown.Item
                      variant="primary"
                      onClick={handleShowt}
                      href="#/action-3"
                    >
                      Fornecedor
                    </Dropdown.Item>
                    <Modal show={showt} onHide={handleCloset}>
                      <Modal.Header closeButton>
                        <Modal.Title>Cadastro de Fornecedor</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <CadastroFormFornecedor />
                      </Modal.Body>
                    </Modal>
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default Cadastro;
