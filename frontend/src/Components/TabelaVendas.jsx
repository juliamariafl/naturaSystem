import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import "../../src/Pages/Vendas/Vendas.css";

const TabelaVendas = () => {
  const [cadastros, setCadastros] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:8080/cadastrosVendas"
        );
        setCadastros(data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error); // Adiciona este log de erro
      }
    };

    fetchData();
  }, []);

  const handleExcluirUsuario = async (idCadastro) => {
    try {
      await axios.delete; //(https://localhost:8080/cadastros/${id});
      //   // Atualiza a lista de cadastros após a exclusão
      const { data } = await axios.get("http://localhost:8080/cadastroVendas");
      setCadastros(data);
      console.log("Usuário excluído com sucesso!");
    } catch (error) {
      console.error("Erro ao excluir usuário:", error);
    }
  };

  return (
    <>
      <Container>
        <div className="tabelaResponsiva">
          <table border={2} cellPadding={5} cellSpacing={5}>
            <thead>
              <tr>
                <th>ID da Venda</th>
                <th>ID do Cliente</th>
                <th>Nome</th>
                <th>Id do Produto</th>
                <th>Nome do Produto</th>
                <th>Excluir</th>
                {/* Adicione mais colunas, se necessário */}
              </tr>
            </thead>
            <tbody>
              {cadastros.map((cadastro) => (
                <tr key={cadastro.id}>
                  <td>{cadastro.id}</td>
                  <td>{cadastro.idCliente}</td>
                  <td>{cadastro.nome}</td>
                  <td>{cadastro.idProduto}</td>
                  <td>{cadastro.nomeProduto}</td>
                  <td>
                    {cadastro.excluir}
                    <button
                      variant="danger"
                      onClick={() => handleExcluirUsuario(cadastro.id)}
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
