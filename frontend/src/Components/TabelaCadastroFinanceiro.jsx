import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Button } from "react-bootstrap";

const TabelaCadastroFinanceiro = () => {
  const [cadastros, setCadastros] = useState([]);
  const [filtro, setFiltro] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:8080/cadastrosFinanceiro"
        );
        setCadastros(data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      }
    };

    fetchData();
  }, []);

  const handleExcluirUsuario = async (idTransacao) => {
    try {
      await axios.delete(
        `http://localhost:8080/cadastrosFinanceiro/${idTransacao}`
      );
      const { data } = await axios.get(
        "http://localhost:8080/cadastrosFinanceiro"
      );
      setCadastros(data);
      console.log("Usuário excluído com sucesso!");
    } catch (error) {
      console.error("Erro ao excluir usuário:", error);
    }
  };

  const handleFilterChange = (event) => {
    setFiltro(event.target.value);
  };

  const filteredCadastros = cadastros.filter((cadastro) =>
    cadastro.tipoTransacao.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <>
      <Container className="mt-4">
        <Row>
          <Col>
            <div>
              <label>
                Filtrar por:
                <select
                  className="dropFiltrar"
                  value={filtro}
                  onChange={handleFilterChange}
                >
                  <option value="">Todos</option>
                  <option value="pagar">Contas a Pagar</option>
                  <option value="receber">Contas a Receber</option>
                </select>
              </label>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <div className="tabelaResponsiva">
              <table
                className="tabelaFinanceiro"
                border={2}
                cellPadding={5}
                cellSpacing={5}
              >
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Data</th>
                    <th>Descrição</th>
                    <th>Montante</th>
                    <th>Categoria</th>
                    <th>Excluir</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCadastros.map((cadastro) => (
                    <tr key={cadastro.idTransacao}>
                      <td>{cadastro.idTransacao}</td>
                      <td>{cadastro.dataTransacao}</td>
                      <td>{cadastro.descricaoTransacao}</td>
                      <td>{cadastro.montante}</td>
                      <td>{cadastro.tipoTransacao}</td>
                      <td>
                        <Button
                          variant="outline-danger"
                          onClick={() =>
                            handleExcluirUsuario(cadastro.idTransacao)
                          }
                        >
                          Excluir
                        </Button>
                      </td>
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

export default TabelaCadastroFinanceiro;
