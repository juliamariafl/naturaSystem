//Financeiro
import React from "react";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineAttachMoney } from "react-icons/md";
import { TbPigMoney } from "react-icons/tb";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import CadastroFormFinanceiro from "../../Components/CadastroFormFinanceiro";
import { FaHome } from "react-icons/fa";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import '../Financeiro/Financeiro.css';

const Financeiro = () => {
    return (
        <>
            <h3 className="financeiro">Finanças</h3>
            <div className="novoGasto">
                <FaPlus className="iconPlus" />
                <h6 className="tituloGasto">Adicionar novo gasto</h6>
            </div>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">

                <Row className="rowPullis">
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <div className="menuTodo"><FaHome className="iconHome" /><h5 className="menuP">Menu</h5></div>
                            <Nav.Item>
                                <Nav.Link eventKey="first"><MdOutlineAttachMoney className="linkMoney" />Finanças:</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second"><FaPlus className="linkPlus" />Adicionar novo gasto</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third"><FaMoneyCheckDollar className="linkDollar" />Controle do mês:</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="quarter"><TbPigMoney className="linkPig" />Metas Financeiras:</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={8}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">Finanças:</Tab.Pane>
                            <Tab.Pane eventKey="second"><CadastroFormFinanceiro /></Tab.Pane>
                            <Tab.Pane eventKey="third">Controle do mês:</Tab.Pane>
                            <Tab.Pane eventKey="quarter">Metas Financeiras:</Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
            <hr className="linhaEspaco"></hr>
            <Row className="rowPullis">
                <Col md={7}>
                    <div className="novoGasto">
                        <FaPlus className="iconPlus" />
                        <h6 className="tituloGasto">Adicionar novo gasto</h6>
                    </div>
                </Col>
                <Col md={5}>
                    <div className="novoGasto">
                        <FaPlus className="iconPlus" />
                        <h6 className="tituloGasto">Adicionar novo gasto</h6>
                    </div>
                </Col>
            </Row>
            <h3 className="financeiro">Registro de Produto</h3>
        </>
    );
};

export default Financeiro;