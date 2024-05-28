import React, { useState, useEffect } from "react";
import TabelaVendas from "../../Components/TabelaVendas.jsx";
import Button from "react-bootstrap/esm/Button";
import Stack from "react-bootstrap/Stack";
import { Container, Row, Col } from "react-bootstrap";
import { FaFilter } from "react-icons/fa";
import { GiArchiveRegister } from "react-icons/gi";
import { FiEdit } from "react-icons/fi";
import "../Vendas/Vendas.css";
import Modal from "react-bootstrap/Modal";

const Vendas = () => {
  const [cadastros, setCadastros] = useState([]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container>
        <Row className="VendasButton">
          <h1 className="tituloVenda mt-5">Registro de Gestão de Vendas</h1>
          <Stack direction="horizontal" gap={3} id="buttonsVendas">
            <Button id="dropdown-basic" variant="primary" onClick={handleShow}>
              <GiArchiveRegister className="iconeButtonVendas" />
              Nova Venda
            </Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Cadastro de Clientes</Modal.Title>
              </Modal.Header>
              <Modal.Body>ola</Modal.Body>
            </Modal>
            <Button className="p-2" variant="success" id="dropdown-basic">
              <FiEdit className="iconeButtonVendas" />
              Editar
            </Button>
            <Button className="p-2" variant="success" id="dropdown-basic">
              <FaFilter className="iconeButtonVendas" />
              Filtrar
            </Button>
          </Stack>
          <Col></Col>
        </Row>
      </Container>
      <div className="Container">
        <div className="TabelaVendas">
          <TabelaVendas />
        </div>
      </div>
    </>
  );
};

export default Vendas;
