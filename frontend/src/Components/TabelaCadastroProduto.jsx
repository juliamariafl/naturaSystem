import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";

const TabelaCadastroProduto = () => {
  const [cadastros, setCadastros] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:8080/cadastrosProduto"
        );
        setCadastros(data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error); // Adiciona este log de erro
      }
    };

    fetchData();
  }, []);

  const handleExcluirUsuario = async (idProduto) => {
    try {
      await axios.delete(`http://localhost:8080/cadastros/${idProduto}`);
      // Atualiza a lista de cadastros após a exclusão
      const { data } = await axios.get(
        "http://localhost:8080/cadastrosProduto"
      );
      setCadastros(data);
      console.log("Usuário excluído com sucesso!");
    } catch (error) {
      console.error("Erro ao excluir usuário:", error);
    }
  };

  return (
    <>
      <div className="tabelaResponsiva">
        <table border={2} cellPadding={5} cellSpacing={5}>
          <thead>
            <tr>
              <th>ID do Produto</th>
              <th>ID do Fornecedor</th>
              <th>Nome do Fornecedor</th>
              <th>Nome do Produto</th>
              <th>Linha</th>
              <th>Preço (R$)</th>
              <th>Descrição do Produto</th>
              <th>Excluir</th>
              {/* Adicione mais colunas, se necessário */}
            </tr>
          </thead>
          <tbody>
            {cadastros.map((cadastro) => (
              <tr key={cadastro.idProduto}>
                <td>{cadastro.idProduto}</td>
                <td>{cadastro.idFornecedor}</td>
                <td>{cadastro.nome}</td>
                <td>{cadastro.nomeProduto}</td>
                <td>{cadastro.linha}</td>
                <td>{cadastro.preco}</td>
                <td>{cadastro.descricaoProduto}</td>
                <td>
                  {cadastro.excluir}
                  <button
                    variant="danger"
                    onClick={() => handleExcluirUsuario(cadastro.idProduto)}
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
    </>
  );
};

export default TabelaCadastroProduto;
