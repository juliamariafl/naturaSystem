// CadastroForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const CadastroFormUsuario = () => {
  const [formData, setFormData] = useState({
    nome: '',
    descricao: '',
    valor: '',
    conta: '',
    categoria: '',
    vencimento: '',
    formaDePagamento: ''
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
      await axios.post('http://localhost:8080/cadastros', formData);
      alert('Cadastro criado com sucesso!');
      // Limpar o formulário após o envio bem-sucedido
      setFormData({
        nome: '',
        descricao: '',
        valor: '',
        conta: '',
        categoria: '',
        vencimento: '',
        formaDePagamento: ''
      });
    } catch (error) {
      console.error('Erro ao criar cadastro:', error);
      alert('Erro ao criar cadastro. Verifique o console para mais detalhes.');
    }
  };

  return (
    <form className='financeiroForm' onSubmit={handleSubmit}>
      <input type="text" name="nome" placeholder="Nome" value={formData.nome} onChange={handleChange} />
      <input type="text" name="descricao" placeholder="Descrição" value={formData.descricao} onChange={handleChange} />
      <input type="number" name="valor" placeholder="Valor" value={formData.valor} onChange={handleChange} />
      <input type="text" name="conta" placeholder="Conta" value={formData.conta} onChange={handleChange} />
      <input type="text" name="categoria" placeholder="Categoria" value={formData.categoria} onChange={handleChange} />
      <input type="number" name="vencimento" placeholder="Vencimento" value={formData.vencimento} onChange={handleChange} />
      <input type="text" name="formaDePagamento" placeholder="Forma de Pagamento" value={formData.formaDePagamento} onChange={handleChange} />
      <button type="submit">Salvar</button>
    </form>
  );
};

export default CadastroFormUsuario;
