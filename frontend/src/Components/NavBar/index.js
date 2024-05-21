import { Link } from "react-router-dom";
import React, { useState } from "react";
import Natura from "../../img/Natura.png";
import { CiSearch } from "react-icons/ci";
import { Container, Row, Col } from "react-bootstrap";
import "../NavBar/Navbar.css";

const Navbar = () => {
  return (
    <>
      <Container>
        <div className="pai">
          <div>
            <Col md={4}></Col>
            <img src={Natura} className="imagem" />
          </div>
          <div class="wrapper-search">
            <form
              class="form"
              data-search=""
              action="/busca"
              role="search"
              method="GET"
            >
              <button class="button" type="submit">
                <CiSearch />
              </button>
              <input
                id="barraPesquisa"
                class="input"
                name="q"
                placeholder="O que está buscando?"
                required=""
              />
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Navbar;
