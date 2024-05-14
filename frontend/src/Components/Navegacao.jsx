import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Container, Row, Col } from "react-bootstrap";
import '../Pages/Cadastro/CadastroUsuario';

const Header = () => {
  return (
    <header>
      <nav>
        <ul className='navbar2'>
          <li className='links'>
            <Link className='linkNav' to="/login">Login</Link>
          </li>
          <li className='links'>
            <Link className='linkNav' to="/cadastro">Cadastro</Link>
          </li>
          <li className='links'>
          <Dropdown className='listas'>
              <Dropdown.Toggle variant="success" id="dropdown-basics">
                <Link className='linkNav'>Produtos</Link>
              </Dropdown.Toggle>
              <Dropdown.Menu>
              <Dropdown.Item href="#/action-1"><Link className='listas' to="/cadastroProdutos">Cadastro de produtos</Link></Dropdown.Item>
                <Dropdown.Item href="#/action-1"><Link className='listas' to="/registroProduto">Registro de produtos</Link></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <li className='links'>
            <Dropdown className='listas'>
              <Dropdown.Toggle variant="success" id="dropdown-basics">
                <Link className='linkNav'>Cadastro de Usuários</Link>
              </Dropdown.Toggle>
              <Dropdown.Menu>
              <Dropdown.Item href="#/action-1"><Link className='listas' to="/listaUsuarios">Lista de Usuário</Link></Dropdown.Item>
                <Dropdown.Item href="#/action-1"><Link className='listas' to="/listaFuncionario">Lista de Funcionário</Link></Dropdown.Item>
                <Dropdown.Item href="#/action-2"><Link className='listas' to="/listaFornecedor">Lista de Fornecedor</Link></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <li className='links'>
            <Link className='linkNav' to="/financeiro">Financeiro</Link>
          </li>
          <li className='links'>
            <Link className='linkNav' to="/estoque">Estoque</Link>
          </li>
          <li className='links'>
            <Link className='linkNav' to="/vendas">Vendas</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;