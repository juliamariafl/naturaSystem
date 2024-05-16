import React from "react";

const CadastroItem = ({ cadastro, onDelete }) => {
  return (
    <tr>
      <td>{cadastro.id}</td>
      <td>{cadastro.nome}</td>
      <td>{cadastro.email}</td>
      <td>{cadastro.cpf}</td>
      <td>{cadastro.telefone}</td>
      <td>
        <button onClick={() => onDelete(Cadastro.id)}>Excluir</button>
      </td>
    </tr>
  );
};

export default CadastroItem;
