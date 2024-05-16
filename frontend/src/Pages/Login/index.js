import React from 'react';
import '../Login/Login.css';
import { Image } from 'react-bootstrap';
import img1 from '../../img/natura_removerFundo-removebg-preview.png';
import { Form } from 'react-bootstrap';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';



import {

    MDBIcon,
    MDBInput,
    MDBCheckbox
} from 'mdb-react-ui-kit';

function App() {
    return (
        <Container fluid className="p-3 my-5 borda">
            
            <Row>
                <Col col='12' md='5'>
                    <Image className='Natura' src={img1} fluid alt="Phone image" />
                </Col>
                <Col col='4' md='6'>
                    <MDBInput wrapperClass='mb-4' label='' id='formControlLg' type='number' size="lg" placeholder='ID' />
                    <MDBInput wrapperClass='mb-4' label='' id='formControlLg' type='password' size="lg" placeholder='Senha' />
                    <div className="d-flex justify-content-between mx-4 mb-4">
                        <input type='checkbox' className='Lembrar' value='' id='flexCheckDefault' label='Lembrar de mim' />
                        <h4>Lembrar de mim</h4>
                        <a href="!#">Esqueci meu ID ou Senha</a>

                    </div>
                    <div style={{ width: '100%', maxWidth: '320px' }}> {/* Definindo uma largura máxima para evitar o aumento do botão */}

                        <button type="submit" className="mb-2 w-80 Logar" size="lg">Entrar</button>

                    </div>
                    <Col>
                    <Form.Select aria-label="Default select example">

                        <option>Escolha como logar</option>
                        <option>Usuario</option>
                        <option>Funcionarios</option>
                        <option>Fornecedor</option>

                    </Form.Select>
                    </Col>
                    <Container sm={4} md={12} P-3 MY-5>
                        <Col>
                            <Row>
                                <div className="divider d-flex align-items-center my-4">
                                    <p className="text-center fw-bold mx-3 mb-0">Logar através:</p>
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
                </Col>
            </Row>
        </Container>
    );
}

export default App;