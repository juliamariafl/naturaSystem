import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Button } from "react-bootstrap";

const TabelaCadastroFornecedor = () => {
  const [cadastros, setCadastros] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:8080/cadastrosFornecedor"
        );
        setCadastros(data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error); // Adiciona este log de erro
      }
    };

    fetchData();
  }, []);

  const handleExcluirUsuario = async (idFornecedor) => {
    try {
      await axios.delete(
        `http://localhost:8080/cadastrosFornecedor/${idFornecedor}`
      );
      // Atualiza a lista de cadastros após a exclusão
      const { data } = await axios.get(
        "http://localhost:8080/cadastrosFornecedor"
      );
      setCadastros(data);
      console.log("Usuário excluído com sucesso!");
    } catch (error) {
      console.error("Erro ao excluir usuário:", error);
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className="tabelaResponsiva">
              <h2 className="tabela mt-5">Registro de Fornecedores</h2>
              <table border={2} cellPadding={5} cellSpacing={5}>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Telefone</th>
                    <th>Mercadoria</th>
                    <th>Senha</th>
                    <th>Excluir</th>

                    {/* Adicione mais colunas, se necessário */}
                  </tr>
                </thead>
                <tbody>
                  {cadastros.map((cadastro) => (
                    <tr key={cadastro.idFornecedor}>
                      <td>{cadastro.idFornecedor}</td>
                      <td>{cadastro.nome}</td>
                      <td>{cadastro.email}</td>
                      <td>{cadastro.telefone}</td>
                      <td>{cadastro.mercadoria}</td>
                      <td>{cadastro.senha}</td>
                      <td>
                        {cadastro.excluir}
                        <Button
                          variant="outline-danger"
                          onClick={() =>
                            handleExcluirUsuario(cadastro.idFornecedor)
                          }
                        >
                          Excluir
                        </Button>
                      </td>
                      {/* Renderizar outras colunas, se necessário */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TabelaCadastroFornecedor;
