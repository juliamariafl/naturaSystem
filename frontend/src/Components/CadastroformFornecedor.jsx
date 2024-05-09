// CadastroForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';



const CadastroFormFornecedor = () => {
  const [formData, setFormData] = useState({
    id: '',
    nome: '',
    email: '',
    cpf: '',
    endereco: '',
    telefone: '',
    senha: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/Cadastro', formData);
      alert('Cadastro criado com sucesso!');
      // Limpar o formulário após o envio bem-sucedido
      setFormData({
        id: '',
        nome: '',
        email: '',
        cpf: '',
        endereco: '',
        telefone: '',
        senha: '',
      });
    } catch (error) {
      console.error('Erro ao criar cadastro:', error);
      alert('Erro ao criar cadastro. Verifique o console para mais detalhes.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="id" placeholder="ID" value={formData.id} onChange={handleChange} />
      <input type="text" name="nome" placeholder="Nome" value={formData.nome} onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      <input type="text" name="cpf" placeholder="CPF" value={formData.cpf} onChange={handleChange} />
      <input type="text" name="endereco" placeholder="Endereço" value={formData.endereco} onChange={handleChange} />
      <input type="number" name="telefone" placeholder="Telefone" value={formData.telefone} onChange={handleChange} />
      <input type="password" name="senha" placeholder="Crie uma senha" />
      <DropdownButton id="dropdown-basic-button" value={formData.mercadoria} onChange={handleChange} title="Mercadoria">
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      <Dropdown.Item href="#/action-4">Something else</Dropdown.Item>
      <Dropdown.Item href="#/action-5">Something else</Dropdown.Item>
      <Dropdown.Item href="#/action-6">Something else</Dropdown.Item>
    </DropdownButton>
      <button type="submit">Salvar</button>
    </form>
  );
};

export default CadastroFormFornecedor;
