import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";

const TabelaCadastroFuncionario = () => {
  const [cadastros, setCadastros] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:8080/cadastrosFuncionario"
        );
        setCadastros(data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error); // Adiciona este log de erro
      }
    };

    fetchData();
  }, []);

  const handleExcluirUsuario = async (idFuncionario) => {
    try {
      await axios.delete(`http://localhost:8080/cadastros/${idFuncionario}`);
      // Atualiza a lista de cadastros após a exclusão
      const { data } = await axios.get(
        "http://localhost:8080/cadastrosFuncionario"
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
        <h3 className="tabela">Tabela de Funcionários</h3>
        <table border={2} cellPadding={5} cellSpacing={5}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Email</th>
              <th>CPF</th>
              <th>Telefone</th>
              <th>Salário</th>
              <th>Cargo</th>
              <th>Senha</th>

              <th>Excluir</th>
              {/* Adicione mais colunas, se necessário */}
            </tr>
          </thead>
          <tbody>
            {cadastros.map((cadastro) => (
              <tr key={cadastro.idFuncionario}>
                <td>{cadastro.idFuncionario}</td>
                <td>{cadastro.nome}</td>
                <td>{cadastro.email}</td>
                <td>{cadastro.cpf}</td>
                <td>{cadastro.telefone}</td>
                <td>{cadastro.salario}</td>
                <td>{cadastro.cargo}</td>
                <td>{cadastro.senha}</td>
                <td>
                  {cadastro.excluir}
                  <button
                    variant="danger"
                    onClick={() => handleExcluirUsuario(cadastro.idFuncionario)}
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

export default TabelaCadastroFuncionario;
