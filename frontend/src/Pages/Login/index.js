import { Link } from "react-router-dom";
import React from "react";
import "../Login/Login.css";
import { Image } from "react-bootstrap";
import img1 from "../../img/natura_removerFundo-removebg-preview.png";
import { Form } from "react-bootstrap";
import { Col, Container, Row, InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import * as formik from "formik";
import * as yup from "yup";

import { MDBIcon, MDBInput, MDBCheckbox } from "mdb-react-ui-kit";

function Login() {
  const { Formik } = formik;

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    terms: yup.bool().required().oneOf([true], "Terms must be accepted"),
  });

  return (
    <>
      <div className="mt-4 text-center">
        <h2>Bem vindo de volta, funcionário!</h2>
      </div>
      <Container fluid className="p-3 my-5 containerLogin borda">
        <Row>
          <Col col="12" md="5">
            <Image className="Natura" src={img1} fluid alt="Phone image" />
          </Col>
          <Col col="4" md="6">
            <Formik
              validationSchema={schema}
              onSubmit={console.log}
              initialValues={{
                firstName: "",
                lastName: "",
                terms: false,
              }}
            >
              {({ handleSubmit, handleChange, values, touched, errors }) => (
                <Form noValidate onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationFormik01">
                      <Form.Label>Insira seu ID</Form.Label>
                      <Form.Control
                        className="inputLogin"
                        wrapperClass="mb-4"
                        size="lg"
                        placeholder="ID"
                        type="text"
                        name="firstName"
                        value={values.firstName}
                        onChange={handleChange}
                        isValid={touched.firstName && !errors.firstName}
                      />
                      <Form.Control.Feedback>Correto!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationFormik02">
                      <Form.Label>Senha</Form.Label>
                      <Form.Control
                        className="inputLogin"
                        wrapperClass="mb-4"
                        type="password"
                        size="lg"
                        placeholder="Senha"
                        name="lastName"
                        value={values.lastName}
                        onChange={handleChange}
                        isValid={touched.lastName && !errors.lastName}
                      />

                      <Form.Control.Feedback>Correto</Form.Control.Feedback>
                    </Form.Group>
                    <div className="d-flex justify-content-between mx-4 mb-4">
                      <input
                        type="checkbox"
                        className="Lembrar"
                        value=""
                        id="flexCheckDefault"
                        label="Lembrar de mim"
                      />
                      <h4 className="h4Login">Lembrar de mim</h4>
                      <a href="!#">Esqueci meu ID ou Senha</a>
                    </div>
                  </Row>
                  <Link className="listas" to="/registroProduto">
                    <div style={{ width: "100%", maxWidth: "320px" }}>
                      <Button
                        type="submit"
                        className="mb-2 w-80 Logar"
                        size="lg"
                      >
                        Entrar
                      </Button>
                    </div>
                  </Link>
                  <Col>
                    <Form.Select aria-label="Default select example">
                      <option>Seu cargo:</option>
                      <option>Funcionarios</option>
                      <option>Fornecedor</option>
                    </Form.Select>
                  </Col>
                  <Container sm={4} md={12} P-3 MY-5>
                    <Col>
                      <Row>
                        <div className="divider d-flex align-items-center my-4">
                          <p className="text-center fw-bold mx-3 mb-0">
                            Logar através:
                          </p>
                        </div>
                        <div className="d-grid gap-2">
                          <Button variant="dark" size="lg">
                            Continuar com o Google
                          </Button>
                          <Button variant="dark" size="lg">
                            Continuar com o Facebook
                          </Button>
                        </div>
                      </Row>
                    </Col>
                  </Container>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Login;
