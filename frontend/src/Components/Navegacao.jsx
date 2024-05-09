import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Container, Row, Col } from "react-bootstrap";
import '../Components/Cadastro/index';

const Header = () => {
  return (
    <header>
      <nav>
        <ul className='navbar2'>
          <li className='links'>
            <Link to="/">Home</Link>
          </li>
          <li className='links'>
            <Link to="/contato">Contato</Link>
          </li>
          <li className='links'>
            <Link to="/cadastro">Cadastro</Link>
          </li>
          <li className='links'>
            <Dropdown className='listas'>
              <Dropdown.Toggle variant="success" id="dropdown-basics">
                <Link>Listas</Link>
              </Dropdown.Toggle>
              <Dropdown.Menu>
              <Dropdown.Item href="#/action-1"><Link className='listas' to="/listaUsuarios">Lista de Usuario</Link></Dropdown.Item>
                <Dropdown.Item href="#/action-1"><Link className='listas' to="/listaFuncionario">Lista de Funcionario</Link></Dropdown.Item>
                <Dropdown.Item href="#/action-2"><Link className='listas' to="/listaFornecedor">Lista de Fornecedor</Link></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>

        </ul>
      </nav>
    </header>
  );
};

export default Header;