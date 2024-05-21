import React from "react";
import TabelaVendas from '../../Components/TabelaVendas.jsx';
import '../../Pages/Vendas/Vendas.css';

const Vendas = () => {
  return (
    <>
      <div className="Container">
        <div className="TabelaVendas">
          <TabelaVendas />
        </div>
      </div>
    </>
  );
};

export default Vendas;