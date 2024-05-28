import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../../src/Pages/Vendas/Vendas.css";

const TabelaPedidoFornecedor = () => {
  const [cadastros, setCadastros] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:8080/cadastrosRegistroPedidos"
        );
        setCadastros(data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error); // Adiciona este log de erro
      }
    };

    fetchData();
  }, []);

  const handleExcluirUsuario = async (id) => {
    try {
      await axios.delete; //(https://localhost:8080/cadastrosRegistroPedidos/${id});
      //   // Atualiza a lista de cadastros após a exclusão
      const { data } = await axios.get(
        "http://localhost:8080/cadastrosRegistroPedidos"
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
        <div className="tabelaResponsiva">
          <table border={2} cellPadding={5} cellSpacing={5}>
            <thead>
              <tr>
                <th>ID do Pedido</th>
                <th>ID Fornecedor do Produto</th>
                <th>ID do Produto</th>
                <th>Nome do Fornecedor </th>
                <th>Nome do Produto</th>
                <th>Quantidade</th>
                <th>Linha</th>
                <th>Preço</th>
                <th>Excluir</th>
                {/* Adicione mais colunas, se necessário */}
              </tr>
            </thead>
            <tbody>
              {cadastros.map((cadastro) => (
                <tr key={cadastro.id}>
                  <td>{cadastro.idProduto}</td>
                  <td>{cadastro.idFornecedorPedido}</td>
                  <td>{cadastro.idProduto}</td>
                  <td>{cadastro.nome}</td>
                  <td>{cadastro.nomeProduto}</td>
                  <td>{cadastro.quantidade}</td>
                  <td>{cadastro.linha}</td>
                  <td>{cadastro.preco}</td>
                  <td>
                    {cadastro.excluir}
                    <Button
                      variant="outline-danger"
                      onClick={() => handleExcluirUsuario(cadastro.id)}
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
      </Container>
    </>
  );
};

export default TabelaPedidoFornecedor;
