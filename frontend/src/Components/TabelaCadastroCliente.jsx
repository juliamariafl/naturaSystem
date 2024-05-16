import React, { useState, useEffect } from "react";
import axios from "axios";

const TabelaCadastroCliente = () => {
  const [cadastros, setCadastros] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:8080/cadastrosCliente"
        );
        setCadastros(data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error); // Adiciona este log de erro
      }
    };

    fetchData();
  }, []);

  const handleExcluirUsuario = async (idCliente) => {
    try {
      await axios.delete(`http://localhost:3001/cadastros/${idCliente}`);
      // Atualiza a lista de cadastros após a exclusão
      const { data } = await axios.get(
        "http://localhost:3001/cadastrosCliente"
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
        <h3 className="tabela">Tabela de Clientes</h3>
        <table border={2} cellPadding={5} cellSpacing={5}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Email</th>
              <th>CPF</th>
              <th>Telefone</th>
              <th>Senha</th>
              {/* Adicione mais colunas, se necessário */}
            </tr>
          </thead>
          <tbody>
            {cadastros.map((cadastro) => (
              <tr key={cadastro.idCliente}>
                <td>{cadastro.idCliente}</td>
                <td>{cadastro.nome}</td>
                <td>{cadastro.email}</td>
                <td>{cadastro.cpf}</td>
                <td>{cadastro.telefone}</td>
                <td>{cadastro.senha}</td>
                <td>
                  <button
                    variant="danger"
                    onClick={() => handleExcluirUsuario(cadastro.idCliente)}
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

export default TabelaCadastroCliente;