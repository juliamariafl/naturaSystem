import React, { useState, useEffect } from "react";
import axios from "axios";

const TabelaCadastroFinanceiro = () => {
  const [cadastros, setCadastros] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:8080/cadastrosFinanceiro"
        );
        setCadastros(data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error); // Adiciona este log de erro
      }
    };

    fetchData();
  }, []);

  const handleExcluirUsuario = async (idTransacao) => {
    try {
      await axios.delete(`http://localhost:8080/cadastros/${idTransacao}`);
      // Atualiza a lista de cadastros após a exclusão
      const { data } = await axios.get(
        "http://localhost:8080/cadastrosFinanceiro"
      );
      setCadastros(data);
      console.log("Usuário excluído com sucesso!");
    } catch (error) {
      console.error("Erro ao excluir usuário:", error);
    }
  };

  return (
    <>
      <div>
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
              {/* Adicione mais colunas, se necessário */}
            </tr>
          </thead>
          <tbody>
            {cadastros.map((cadastro) => (
              <tr key={cadastro.idTransacao}>
                <td>{cadastro.idTransacao}</td>
                <td>{cadastro.dataTransacao}</td>
                <td>{cadastro.descricaoTransacao}</td>
                <td>{cadastro.montante}</td>
                <td>{cadastro.tipoTransacao}</td>
                {/* <td>{cadastro.categoria}</td>
                <td>{cadastro.vencimento}</td>
                <td>{cadastro.formaDePagamento}</td> */}

                <td>
                  {cadastro.excluir}
                  <button
                    variant="danger"
                    onClick={() => handleExcluirUsuario(cadastro.idFinanceiro)}
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

export default TabelaCadastroFinanceiro;
