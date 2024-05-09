import React, { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CadastroFormUsuario from "../Components/CadastroFormUsuario";
import CadastroFormFornecedor from "./CadastroformFornecedor";
import CadastroFormFuncionario from "./CadastroFormFuncionario";

function BasicExample() {
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
        <Dropdown className="dropCadastro">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Categoria
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {/* cadastro usuario */}
                <div className="DropUsuario">
                    <Dropdown.Item variant="primary" onClick={handleShow} href="#/action-1">Usuário</Dropdown.Item>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Cadastro de Usuário</Modal.Title>
                        </Modal.Header>
                        <Modal.Body><CadastroFormUsuario /></Modal.Body>
                    </Modal>
                </div>
                {/* cadastro Funcionario */}
                <div className="DropUsuario">
                    <Dropdown.Item variant="primary" onClick={handleShows} href="#/action-2">Funcionário</Dropdown.Item>
                    <Modal show={shows} onHide={handleCloses}>
                        <Modal.Header closeButton>
                            <Modal.Title>Cadastro de Funcionário</Modal.Title>
                        </Modal.Header>
                        <Modal.Body><CadastroFormFuncionario /></Modal.Body>
                    </Modal>
                </div>
                {/* cadastro Fonecedor */}
                <div className="DropUsuario">
                    <Dropdown.Item variant="primary" onClick={handleShowt} href="#/action-3">Fornecedor</Dropdown.Item>
                    <Modal show={showt} onHide={handleCloset}>
                        <Modal.Header closeButton>
                            <Modal.Title>Cadastro de Fornecedor</Modal.Title>
                        </Modal.Header>
                        <Modal.Body><CadastroFormFornecedor /></Modal.Body>
                    </Modal>
                </div>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default BasicExample;
