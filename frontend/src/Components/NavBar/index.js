import { Link } from "react-router-dom";
import React, { useState } from "react";
import NatutaSystem from "../../img/natutaSystem.png";
import { CiSearch } from "react-icons/ci";
import { IoMdPerson } from "react-icons/io";
import { Container, Row, Col } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import "../NavBar/Navbar.css";

const Navbar = () => {
  return (
    <>
      <Container>
        <div className="pai">
          <div>
            <Col md={4}></Col>
            <img src={NatutaSystem} className="imagem" />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Navbar;
