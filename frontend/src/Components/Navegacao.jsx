import { Link } from "react-router-dom";
import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Container, Row, Col } from "react-bootstrap";

const Navegacao = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <ul className="navLinks">
                <li>
                  <Link className="linkNav" to="/login">
                    Login
                  </Link>
                </li>
                <li>
                  <Link className="linkNav" to="/cadastro">
                    Cadastro
                  </Link>
                </li>
                <Dropdown className="listas">
                  <Dropdown.Toggle variant="success" id="dropdown-basics">
                    <Link className="linkNav">Produtos</Link>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">
                      <Link className="listas" to="/cadastroProdutos">
                        Cadastro de produtos
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-1">
                      <Link className="listas" to="/registroProduto">
                        Registro de produtos
                      </Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="listas">
                  <Dropdown.Toggle variant="success" id="dropdown-basics">
                    <Link className="linkNav">Cadastro de Usuários</Link>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">
                      <Link className="listas" to="/listaClientes">
                        Lista de Clientes
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-1">
                      <Link className="listas" to="/listaFuncionario">
                        Lista de Funcionário
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      <Link className="listas" to="/listaFornecedor">
                        Lista de Fornecedor
                      </Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <li>
                  <Link className="linkNav" to="/financeiro">
                    Financeiro
                  </Link>
                </li>
                <li>
                  <Link className="linkNav" to="/estoque">
                    Estoque
                  </Link>
                </li>
                <li>
                  <Link className="linkNav" to="/vendas">
                    Vendas
                  </Link>
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navegacao;
