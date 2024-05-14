import React from 'react';

const CadastroItem = ({ Cadastro, onDelete }) => {
  return (
    <tr>
      <td>{Cadastro.id}</td>
      <td>{Cadastro.nome}</td>
      <td>{Cadastro.email}</td>
      <td>{Cadastro.cpf}</td>
      <td>{Cadastro.endereco}</td>
      <td>{Cadastro.telefone}</td>
      <td>
        <button onClick={() => onDelete(Cadastro.id)}>Excluir</button>
      </td>
    </tr>
  );
};

export default CadastroItem;
