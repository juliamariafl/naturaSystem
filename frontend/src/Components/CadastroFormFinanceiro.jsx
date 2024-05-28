// CadastroForm.jsx
import React, { useState } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";

const CadastroFormFinanceiro = () => {
  const [formData, setFormData] = useState({
    idTransacao: "",
    dataTransacao: "",
    descricaoTransacao: "",
    montante: "",
    tipoTransacao: "",
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
      await axios.post("http://localhost:8080/cadastrosFinanceiro", formData);
      alert("Cadastro criado com sucesso!");
      // Limpar o formulário após o envio bem-sucedido
      setFormData({
        idTransacao: "",
        dataTransacao: "",
        descricaoTransacao: "",
        montante: "",
        tipoTransacao: "",
      });
    } catch (error) {
      console.error("Erro ao criar cadastro:", error);
      alert("Erro ao criar cadastro. Verifique o console para mais detalhes.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="date"
        name="dataTransacao"
        placeholder="Data do Gasto"
        min="2000-01-02"
        value={formData.dataTransacao}
        onChange={handleChange}
      />
      <input
        type="text"
        name="descricaoTransacao"
        placeholder="Descrição do Gasto"
        value={formData.descricaoTransacao}
        onChange={handleChange}
      />
      <input
        type="text"
        name="montante"
        placeholder="Montante (Valor do gasto)"
        value={formData.montante}
        onChange={handleChange}
      />
      <Form.Select
        aria-label="Default select example"
        className="botaoCategoria"
        value={formData.tipoTransacao}
        onChange={(e) =>
          setFormData({ ...formData, tipoTransacao: e.target.value })
        }
      >
        <option value="">Categoria</option>
        <option value="A pagar">A pagar</option>
        <option value="A receber">A receber</option>
      </Form.Select>
      <button className="botaoProduto" type="submit">
        Salvar
      </button>
    </form>
  );
};

export default CadastroFormFinanceiro;
