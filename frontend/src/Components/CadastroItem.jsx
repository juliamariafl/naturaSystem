<<<<<<< HEAD
import React from "react";

const CadastroItem = ({ Cadastro, onDelete }) => {
  return (
    <tr>
      <td>{Cadastro.id}</td>
      <td>{Cadastro.nome}</td>
      <td>{Cadastro.email}</td>
      <td>{Cadastro.cpf}</td>
      <td>{Cadastro.telefone}</td>
      <td>
        <button onClick={() => onDelete(Cadastro.id)}>Excluir</button>
      </td>
    </tr>
  );
};

export default CadastroItem;
=======
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
>>>>>>> ce00ef35239bbd4f4109c01cef58b8c0a7951a5a
