// CadastroForm.jsx
<<<<<<< HEAD
import React, { useState } from "react";
import axios from "axios";

const CadastroFormUsuario = () => {
  const [formData, setFormData] = useState({
    id: "",
    nome: "",
    email: "",
    cpf: "",
    telefone: "",
    senha: "",
=======
import React, { useState } from 'react';
import axios from 'axios';

const CadastroFormUsuario = () => {
  const [formData, setFormData] = useState({
    id: '',
    nome: '',
    email: '',
    cpf: '',
    endereco: '',
    telefone: '',
    senha: ''
>>>>>>> ce00ef35239bbd4f4109c01cef58b8c0a7951a5a
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
<<<<<<< HEAD
      [name]: value,
=======
      [name]: value
>>>>>>> ce00ef35239bbd4f4109c01cef58b8c0a7951a5a
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
<<<<<<< HEAD
      await axios.post("http://localhost:8080/cadastros", formData);
      alert("Cadastro criado com sucesso!");
      // Limpar o formulário após o envio bem-sucedido
      setFormData({
        id: "",
        nome: "",
        email: "",
        cpf: "",
        telefone: "",
        senha: "",
      });
    } catch (error) {
      console.error("Erro ao criar cadastro:", error);
      alert("Erro ao criar cadastro. Verifique o console para mais detalhes.");
=======
      await axios.post('http://localhost:8080/cadastros', formData);
      alert('Cadastro criado com sucesso!');
      // Limpar o formulário após o envio bem-sucedido
      setFormData({
        id: '',
        nome: '',
        email: '',
        cpf: '',
        endereco: '',
        telefone: '',
        senha: ''
      });
    } catch (error) {
      console.error('Erro ao criar cadastro:', error);
      alert('Erro ao criar cadastro. Verifique o console para mais detalhes.');
>>>>>>> ce00ef35239bbd4f4109c01cef58b8c0a7951a5a
    }
  };

  return (
    <form onSubmit={handleSubmit}>
<<<<<<< HEAD
      <input
        type="text"
        name="id"
        placeholder="ID"
        value={formData.id}
        onChange={handleChange}
      />
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
        type="password"
        name="senha"
        placeholder="Crie uma senha"
        value={formData.senha}
        onChange={handleChange}
      />
=======
      <input type="text" name="id" placeholder="ID" value={formData.id} onChange={handleChange} />
      <input type="text" name="nome" placeholder="Nome" value={formData.nome} onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      <input type="text" name="cpf" placeholder="CPF" value={formData.cpf} onChange={handleChange} />
      <input type="number" name="telefone" placeholder="Telefone" value={formData.telefone} onChange={handleChange} />
      <input type="password" name="senha" placeholder="Crie uma senha" value={formData.senha} onChange={handleChange} />
>>>>>>> ce00ef35239bbd4f4109c01cef58b8c0a7951a5a
      <button type="submit">Salvar</button>
    </form>
  );
};

export default CadastroFormUsuario;
