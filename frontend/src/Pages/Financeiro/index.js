import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { TbPigMoney } from "react-icons/tb";
import CadastroFormFinanceiro from "../../Components/CadastroFormFinanceiro";
import TabelaCadastroFinanceiro from "../../Components/TabelaCadastroFinanceiro";
import TabelaPedidoFornecedor from "../../Components/TabelaPedidoFornecedor";
import CadastroFormPedidoFornecedor from "../../Components/CadastroFormPedidoFornecedor";
import { FaHome } from "react-icons/fa";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { Image } from "react-bootstrap";
import "../Financeiro/Financeiro.css";
import financas from "../../img/financasimg.svg";
import Button from "react-bootstrap/esm/Button";
import Stack from "react-bootstrap/Stack";
import { GiArchiveRegister } from "react-icons/gi";
import Modal from "react-bootstrap/Modal";

const Financeiro = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <h2 className="financeiro mt-5">Registro de Gastos Financeiros</h2>
      <div className="novoGasto">
        <FaPlus className="iconPlus" />
        <h6 className="tituloGasto">Adicionar novo gasto</h6>
      </div>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row className="rowPullis">
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <div className="menuTodo">
                <FaHome className="iconHome" />
                <h5 className="menuP">Menu</h5>
              </div>
              <Nav.Item>
                <Nav.Link eventKey="second">
                  <FaPlus className="linkPlus" />
                  Adicionar novo gasto
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">
                  <FaMoneyCheckDollar className="linkDollar" />
                  Novo Pedido ao fornecedor:
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="quarter">
                  <TbPigMoney className="linkPig" />
                  Pedidos ao forneceodor:
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={8}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Image
                  src={financas}
                  style={{
                    width: "550px",
                    height: "350px",
                  }}
                  fluid
                  alt="Phone image"
                />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <CadastroFormFinanceiro />
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <CadastroFormPedidoFornecedor />
              </Tab.Pane>
              <Tab.Pane eventKey="quarter">
                {" "}
                <Button
                  id="dropdown-basic"
                  variant="primary"
                  onClick={handleShow}
                >
                  <GiArchiveRegister className="iconeButtonVendas" />
                  Registro dos pedidos
                </Button>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Registro de Pedidos</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <TabelaPedidoFornecedor />
                  </Modal.Body>
                </Modal>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
      <hr className="linhaEspaco"></hr>
      <Row className="rowPullis">
        <Col>
          <div className="novoGasto">
            <TbPigMoney className="iconPlus" />
            <h6 className="tituloGasto">Finanças</h6>
          </div>
        </Col>
      </Row>
      <Row className="adicionaisEmpresa">
        <Col>
          <div>
            {" "}
            <TabelaCadastroFinanceiro />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Financeiro;
