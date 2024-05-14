//Cadastro
import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CadastroFormUsuario from "../../Components/CadastroFormUsuario";
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
          <CardContent>
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
                      Usuário
                    </Dropdown.Item>
                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Cadastro de Usuário</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <CadastroFormUsuario />
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
