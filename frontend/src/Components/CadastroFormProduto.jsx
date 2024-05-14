// CadastroForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const CadastroFormFuncionario = () => {
  const [formData, setFormData] = useState({
    id: '',
    nome: '',
    descricao: '',
    estoque: '',
    preco: ''
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
        descricao: '',
        estoque: '',
        preco: ''
      });
    } catch (error) {
      console.error('Erro ao criar cadastro:', error);
      alert('Erro ao criar cadastro. Verifique o console para mais detalhes.');
    }
  };

  return (
    <form className='FormInputs' onSubmit={handleSubmit}>
      <input type="text" name="id" placeholder="ID" value={formData.id} onChange={handleChange} />
      <input type="text" name="nome" placeholder="Nome" value={formData.nome} onChange={handleChange} />
      <input type="text" name="descricao" placeholder="Descrição" value={formData.descricao} onChange={handleChange} />
      <input type="number" name="estoque" placeholder="Estoque" value={formData.estoque} onChange={handleChange} />
      <input type="number" name="preco" placeholder="Preço" value={formData.preco} onChange={handleChange} />
      <button type="submit">Salvar</button>
    </form>
  );
};

export default CadastroFormFuncionario;
