// CadastroForm.jsx
import React, { useState } from "react";
import axios from "axios";

const CadastroFormProduto = () => {
  const [formData, setFormData] = useState({
    idProduto: "",
    nomeProduto: "",
    linha: "",
    preco: "",
    descricaoProduto: "",
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
      await axios.post("http://localhost:8080/cadastrosProduto", formData);
      alert("Cadastro criado com sucesso!");
      // Limpar o formulário após o envio bem-sucedido
      setFormData({
        idProduto: "",
        nomeProduto: "",
        linha: "",
        preco: "",
        descricaoProduto: "",
      });
    } catch (error) {
      console.error("Erro ao criar cadastro:", error);
      alert("Erro ao criar cadastro. Verifique o console para mais detalhes.");
    }
  };

  return (
    <form className="FormInputs" onSubmit={handleSubmit}>
      <input
        type="text"
        name="nomeProduto"
        placeholder="Nome do Produto"
        value={formData.nomeProduto}
        onChange={handleChange}
      />
      <input
        type="text"
        name="linha"
        placeholder="Linha do Produto"
        value={formData.linha}
        onChange={handleChange}
      />
      <input
        type="text"
        name="preco"
        placeholder="Preço do produto"
        value={formData.preco}
        onChange={handleChange}
      />
      <input
        type="text"
        name="descricaoProduto"
        placeholder="Descrição do produto"
        value={formData.descricaoProduto}
        onChange={handleChange}
      />
      <button className="botaoProduto" type="submit">
        Salvar
      </button>
    </form>
  );
};

export default CadastroFormProduto;
