import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Rodape from "./Components/Rodape";
import Navbar from "./Components/NavBar/index";
//Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

//Importar complementos aqui
import Rotas from "./Routes";

//Importar componentes aqui
import Navegacao from "./Components/Navegacao";


const App = () => {
  return (
    <>
    <Navbar />
      <Router>
        <Navegacao />
        <Rotas />
      </Router>
      <Rodape />
    </>
  );
};

export default App;
