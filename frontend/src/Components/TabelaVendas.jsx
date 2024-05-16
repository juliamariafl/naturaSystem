import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/esm/Button";
import Stack from 'react-bootstrap/Stack';
import { Container, Row, Col } from 'react-bootstrap'
import { FaFilter } from "react-icons/fa";
import { GiArchiveRegister } from "react-icons/gi";
import { FiEdit } from "react-icons/fi";
import '../../src/Pages/Vendas/Vendas.css'

const TabelaVendas = () => {
    const [cadastros, setCadastros] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get("http://localhost:8080/cadastros");
                setCadastros(data);
            } catch (error) {
                console.error("Erro ao buscar usuários:", error); // Adiciona este log de erro
            }
        };

        fetchData();
    }, []);

    const handleExcluirUsuario = async (idCadastro) => {
        try {
            await axios.delete //(https://localhost:8080/cadastros/${idCadastro});
            //   // Atualiza a lista de cadastros após a exclusão
            const { data } = await axios.get("http://localhost:8080/cadastros");
            setCadastros(data);
            console.log("Usuário excluído com sucesso!");
        } catch (error) {
            console.error("Erro ao excluir usuário:", error);
        }
    };

    return (
        <>
            <Container>
                <Row className="VendasButton">
                    <h2 className="tituloVenda">Tabela de Gestão de Vendas</h2>
                    <Stack direction="horizontal" gap={3} id="buttonsVendas">
                        <Button className="p-2 ms-auto" variant="success" id="dropdown-basic"><GiArchiveRegister className="icon" />Cadastrar</Button>
                        <Button className="p-2" variant="success" id="dropdown-basic"><FiEdit className="icon" />Editar</Button>
                        <Button className="p-2" variant="success" id="dropdown-basic"><FaFilter className="icon" />Filtrar</Button>
                    </Stack>
                    <Col>

                    </Col>
                </Row>
                <div className="tabelaResponsiva">
                    <table border={2} cellPadding={5} cellSpacing={5}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Sobrenome</th>
                                <th>Email</th>
                                <th>CPF</th>
                                <th>Telefone</th>
                                <th>Senha</th>
                                <th>Excluir</th>
                                {/* Adicione mais colunas, se necessário */}
                            </tr>
                        </thead>
                        <tbody>
                            {cadastros.map((cadastro) => (
                                <tr key={cadastro.idCadastro}>
                                    <td>{cadastro.idCadastro}</td>
                                    <td>{cadastro.nome}</td>

                                    <td>{cadastro.email}</td>
                                    <td>{cadastro.cpf}</td>
                                    <td>{cadastro.telefone}</td>
                                    <td>{cadastro.senha}</td>
                                    <td>{cadastro.excluir}</td>
                                    <td>
                                        <button
                                            variant="danger"
                                            onClick={() => handleExcluirUsuario(cadastro.idCadastro)}
                                        >
                                            Excluir
                                        </button>
                                    </td>
                                    {/* Renderizar outras colunas, se necessário */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Container>
        </>
    );
};

export default TabelaVendas;