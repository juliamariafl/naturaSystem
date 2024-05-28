import { Link } from "react-router-dom";
import React, { useState } from "react";
import "../Login/Login.css";
import { Image } from "react-bootstrap";
import ImgLogin from "../../img/login.svg";
import { Form } from "react-bootstrap";
import { Col, Container, Row, InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import * as formik from "formik";
import * as yup from "yup";

import { MDBIcon, MDBInput, MDBCheckbox } from "mdb-react-ui-kit";

function Login() {
  const { Formik } = formik;

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <div className="mt-5 titulo  color">
        <h2>Bem vindo de volta, funcionário!</h2>
      </div>
      <Container fluid className="p-3 my-5 containerLogin borda">
        <Row>
          <Col col="6" md="5">
            <Image className="Natura" src={ImgLogin} fluid alt="Phone image" />
          </Col>
          <Col col="6" md="6">
            <Form
              className="formLogin"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                  <Form.Label className="nomeinput">Insira seu ID</Form.Label>
                  <Form.Control type="text" placeholder="ID" required />
                  <Form.Control.Feedback type="invalid">
                    Incorreto
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom04">
                  <Form.Label className="nomeinput">Senha</Form.Label>
                  <Form.Control type="password" placeholder="Senha" required />
                  <Form.Control.Feedback type="invalid">
                    Incorreto.
                  </Form.Control.Feedback>
                </Form.Group>
                <Link className="botaoEnviar" to="/registroProduto">
                  {" "}
                  <Button type="submit">Enviar</Button>
                </Link>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Login;
