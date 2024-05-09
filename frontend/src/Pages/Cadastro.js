//Cadastro
import React from "react";
import DropCadastro from '../Components/DropCadastro';
import '../Components/Cadastro/cadastro.css';

const Cadastro = () => {
  return (
    <>
      <div>
        <h2 className="cadastro">Cadastro</h2>
        <p className="cadastro">Quem você deseja cadastrar?</p>
        <DropCadastro />
      </div>
    </>
  );
};

export default Cadastro;
