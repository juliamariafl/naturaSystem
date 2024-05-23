// CadastroForm.jsx
import React, { useState } from "react";
import axios from "axios";

const CadastroFormFuncionario = () => {
  const [formData, setFormData] = useState({
    id: "",
    nome: "",
    email: "",
    cpf: "",
    telefone: "",
    salario: "",
    cargo: "",
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
      await axios.post("http://localhost:8080/cadastrosFuncionario", formData);
      alert("Cadastro criado com sucesso!");
      // Limpar o formulário após o envio bem-sucedido
      setFormData({
        id: "",
        nome: "",
        email: "",
        cpf: "",
        telefone: "",
        salario: "",
        cargo: "",
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
        type="text"
        name="cpf"
        placeholder="CPF"
        value={formData.cpf}
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
        type="number"
        name="salario"
        placeholder="Salário"
        value={formData.salario}
        onChange={handleChange}
      />
      <input
        type="text"
        name="cargo"
        placeholder="Cargo"
        value={formData.cargo}
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

export default CadastroFormFuncionario;
