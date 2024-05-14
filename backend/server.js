<<<<<<< HEAD
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes'); // Importa as rotas do backend

const app = express();
const port = 8080; // Defina a porta que deseja utilizar

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Usa as rotas do backend
app.use('/', routes);

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
=======
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes'); // Importa as rotas do backend

const app = express();
const port = 8080; // Defina a porta que deseja utilizar

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Usa as rotas do backend
app.use('/', routes);

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
>>>>>>> ce00ef35239bbd4f4109c01cef58b8c0a7951a5a
