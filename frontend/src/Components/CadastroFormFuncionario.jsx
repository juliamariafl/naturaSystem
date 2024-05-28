// CadastroForm.jsx
import React, { useState } from "react";
import axios from "axios";
import { Form, Row } from "react-bootstrap";

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
      <Row className="inputSalario">
        <input
          className="inputeSalario"
          type="number"
          name="salario"
          placeholder="Salário"
          value={formData.salario}
          onChange={handleChange}
        />
      </Row>
      <Row className="inputeCargos">
        <Form.Select
          className="BotaoFornecedor"
          aria-label="Default select example"
          value={formData.cargo}
          onChange={(e) => setFormData({ ...formData, cargo: e.target.value })}
        >
          <option value="">Cargos</option>
          <option value="Representante de Vendas">
            Representante de Vendas
          </option>
          <option value="Supervisor de Vendas">Supervisor de Vendas</option>
          <option value="Gerente de Vendas">Gerente de Vendas</option>
          <option value="Gerente de Produto">Gerente de Produto</option>
          <option value="Analista de Marketing">Analista de Marketing</option>
          <option value="Coordenador de Marketing">
            Coordenador de Marketing
          </option>
          <option value="Coordenador de Eventos">Coordenador de Eventos</option>
          <option value="Especialista em Relações Públicas">
            Especialista em Relações Públicas
          </option>
          <option value="Gerente de Comunicação">Gerente de Comunicação</option>
          <option value="Analista de Cadeia de Suprimentos">
            Analista de Cadeia de Suprimentos
          </option>
          <option value="Gerente de Compras">Gerente de Compras</option>
          <option value="Comprador">Comprador</option>
          <option value="Designer de Produto">Designer de Produto</option>
          <option value="Designer de Embalagens">Designer de Embalagens</option>
          <option value="Designer Gráfico">Designer Gráfico</option>
          <option value="Administrador de Banco de Dados">
            Administrador de Banco de Dados
          </option>
          <option value="Analista de Sistemas">Analista de Sistemas</option>
          <option value="Desenvolvedor de Software">
            Desenvolvedor de Software
          </option>
          <option value="Engenheiro de Produto">Engenheiro de Produto</option>
          <option value="Cientista de Cosméticos">
            Cientista de Cosméticos
          </option>
          <option value="Coordenador de Logística">
            Coordenador de Logística
          </option>
          <option value="Analista de Operações">Analista de Operações</option>
          <option value="Gerente de Operações">Gerente de Operações</option>
          <option value="Gerente Financeiro">Gerente Financeiro</option>
          <option value="Analista Financeiro">Analista Financeiro</option>
          <option value="Contador">Contador</option>
          <option value="Analista de Recursos Humanos">
            Analista de Recursos Humanos
          </option>
          <option value="Recrutador">Recrutador</option>
        </Form.Select>
      </Row>
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
