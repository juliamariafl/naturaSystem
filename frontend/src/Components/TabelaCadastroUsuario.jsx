import React, { useState, useEffect } from "react";
import axios from "axios";

const TabelaCadastro = () => {
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

<<<<<<< HEAD
  const handleExcluirUsuario = async (idCliente) => {
    try {
      await axios.delete(`http://localhost:8080/cadastros/${idCliente}`);
=======
  const handleExcluirUsuario = async (idCadastro) => {
    try {
      await axios.delete(`http://localhost:8080/cadastros/${idCadastro}`);
>>>>>>> ce00ef35239bbd4f4109c01cef58b8c0a7951a5a
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
        <h3 className="tabela">Tabela de Usuário</h3>
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
<<<<<<< HEAD
              <tr key={cadastro.idCliente}>
                <td>{cadastro.idCliente}</td>
=======
              <tr key={cadastro.idCadastro}>
                <td>{cadastro.idCadastro}</td>
>>>>>>> ce00ef35239bbd4f4109c01cef58b8c0a7951a5a
                <td>{cadastro.nome}</td>

                <td>{cadastro.email}</td>
                <td>{cadastro.cpf}</td>
                <td>{cadastro.telefone}</td>
                <td>{cadastro.senha}</td>
                <td>{cadastro.excluir}</td>
                <td>
                  <button
                    variant="danger"
<<<<<<< HEAD
                    onClick={() => handleExcluirUsuario(cadastro.idCliente)}
=======
                    onClick={() => handleExcluirUsuario(cadastro.idCadastro)}
>>>>>>> ce00ef35239bbd4f4109c01cef58b8c0a7951a5a
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

<<<<<<< HEAD
export default TabelaCadastro;
=======
export default TabelaCadastro;
>>>>>>> ce00ef35239bbd4f4109c01cef58b8c0a7951a5a
