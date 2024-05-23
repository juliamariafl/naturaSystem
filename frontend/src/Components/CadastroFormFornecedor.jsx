// CadastroForm.jsx
import React, { useState } from "react";
import axios from "axios";

const CadastroFormFornecedor = () => {
  const [formData, setFormData] = useState({
    id: "",
    nome: "",
    email: "",
    telefone: "",
    mercadoria: "",
    senha: "",
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
      await axios.post("http://localhost:8080/cadastrosFornecedor", formData);
      alert("Cadastro criado com sucesso!");
      // Limpar o formulário após o envio bem-sucedido
      setFormData({
        id: "",
        nome: "",
        email: "",
        telefone: "",
        mercadoria: "",
        senha: "",
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
        name="nome"
        placeholder="Nome"
        value={formData.nome}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="number"
        name="telefone"
        placeholder="Telefone"
        value={formData.telefone}
        onChange={handleChange}
      />
      <input
        type="text"
        name="mercadoria"
        placeholder="Mercadoria"
        value={formData.mercadoria}
        onChange={handleChange}
      />
      <input
        type="password"
        name="senha"
        placeholder="Crie uma senha"
        value={formData.senha}
        onChange={handleChange}
      />
      <button className="botaoProduto" type="submit">
        Salvar
      </button>
    </form>
  );
};

export default CadastroFormFornecedor;
