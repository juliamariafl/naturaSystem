import React, { useState, useEffect } from "react";
import axios from "axios";

const TabelaCadastroFinanceiro = () => {
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
      await axios.delete(`http://localhost:8080/cadastros/${idCadastro}`);
      // Atualiza a lista de cadastros após a exclusão
      const { data } = await axios.get("http://localhost:8080/cadastros");
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
              <th>Nome</th>
              <th>Descrição</th>
              <th>Valor</th>
              <th>Conta</th>
              <th>Categoria</th>
              <th>Vencimento</th>
              <th>Forma de pagamento</th>
              <th>Excluir</th>
              {/* Adicione mais colunas, se necessário */}
            </tr>
          </thead>
          <tbody>
            {cadastros.map((cadastro) => (
              <tr key={cadastro.idCadastro}>
                <td>{cadastro.nome}</td>
                <td>{cadastro.descricao}</td>
                <td>{cadastro.valor}</td>
                <td>{cadastro.conta}</td>
                <td>{cadastro.categoria}</td>
                <td>{cadastro.vencimento}</td>
                <td>{cadastro.formaDePagamento}</td>

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
