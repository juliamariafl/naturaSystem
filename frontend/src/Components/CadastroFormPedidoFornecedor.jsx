// CadastroForm.jsx
import React, { useState } from "react";
import axios from "axios";

const CadastroFormPedidoFornecedor = () => {
  const [formData, setFormData] = useState({
    idPedido: "",
    quantidade: "",
    nomeProdutoPedido: "",
    idFornecedorPedido: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:8080/cadastrosPedidoFornecedor",
        formData
      );
      alert("Cadastro criado com sucesso!");
      // Limpar o formulário após o envio bem-sucedido
      setFormData({
        idPedido: "",
        quantidade: "",
        nomeProdutoPedido: "",
        idFornecedorPedido: "",
      });
    } catch (error) {
      console.error("Erro ao criar cadastro:", error);
      alert("Erro ao criar cadastro. Verifique o console para mais detalhes.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="nomeProdutoPedido"
        placeholder="Nome do Produto"
        value={formData.nomeProdutoPedido}
        onChange={handleChange}
      />
      <input
        type="text"
        name="idFornecedorPedido"
        placeholder="ID do Fornecedor"
        value={formData.idFornecedorPedido}
        onChange={handleChange}
      />
      <input
        type="text"
        name="quantidade"
        placeholder="Quantidade de Produtos"
        value={formData.quantidade}
        onChange={handleChange}
      />
      <button className="botaoProduto" type="submit">
        Salvar
      </button>
    </form>
  );
};

export default CadastroFormPedidoFornecedor;
