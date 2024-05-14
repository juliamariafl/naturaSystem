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
<<<<<<< HEAD
      <h3 className="tabela">Registro de Produtos</h3>
=======
        <h3 className="tabela">Registro de Produtos</h3>
>>>>>>> ce00ef35239bbd4f4109c01cef58b8c0a7951a5a
        <table border={2} cellPadding={5} cellSpacing={5}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
<<<<<<< HEAD
              <th>Email</th>
              <th>CPF</th>
              <th>Telefone</th>
              <th>Senha</th>
              <th>Salário</th>
              <th>Excluir</th>
=======
              <th>Estoque</th>
              <th>Preço</th>
>>>>>>> ce00ef35239bbd4f4109c01cef58b8c0a7951a5a
              {/* Adicione mais colunas, se necessário */}
            </tr>
          </thead>
          <tbody>
            {cadastros.map((cadastro) => (
              <tr key={cadastro.idCadastro}>
                <td>{cadastro.idCadastro}</td>
                <td>{cadastro.nome}</td>
<<<<<<< HEAD
                <td>{cadastro.email}</td>
                <td>{cadastro.cpf}</td>
                <td>{cadastro.telefone}</td>
                <td>{cadastro.senha}</td>
                <td>{cadastro.salario}</td>
                <td>{cadastro.excluir}</td>
=======
                <td>{cadastro.estoque}</td>
                <td>{cadastro.preco}</td>
>>>>>>> ce00ef35239bbd4f4109c01cef58b8c0a7951a5a
                <td>
                  <button
                    variant="danger"
                    onClick={() => handleExcluirUsuario(cadastro.idCadastro)}
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

export default TabelaCadastro;